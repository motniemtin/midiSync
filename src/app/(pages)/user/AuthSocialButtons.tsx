"use client";
import CustomSocialButton from "@/app/components/forms/theme-elements/CustomSocialButton";
import { Stack } from "@mui/system";
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box'; 
import { signInType } from "@/app/types/auth/auth";
import { SocialLogin } from "@capgo/capacitor-social-login";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { showToast } from '@/utils/showToast';
import { useQueryClient } from "@tanstack/react-query";
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { Capacitor } from "@capacitor/core";
import { jwtDecode } from "jwt-decode";

const AuthSocialButtons = ({ title }: signInType) => {
  const { t } = useTranslation();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [isWeb, setIsWeb] = useState(false);
  useEffect(() => {
    setIsWeb(Capacitor.getPlatform() === 'web');
    SocialLogin.initialize({
      google: {
        webClientId: '271408278055-aq099jsihpd8j12r3tngrvijsvi7odfq.apps.googleusercontent.com',
        iOSServerClientId: '271408278055-aq099jsihpd8j12r3tngrvijsvi7odfq.apps.googleusercontent.com',
        mode: 'online',  // 'online' or 'offline'
      }
    });
  }, []);

  const handleLoginSuccess = async (loginData: any) => {
    const response = await fetch("https://server.pianosync.com/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      await showToast(t('LOGIN_FAIL'), 'error');
      return;
    }

    const jsonLogin = await response.json();
    queryClient.setQueryData(["user", "login"], jsonLogin.user);
    localStorage.setItem("token", jsonLogin.token);
    await showToast(t('LOGIN_SUCCESS'), 'success');
    queryClient.refetchQueries({
      type: 'all', // bao gồm cả inactive queries
    });
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  const handleGoogleWebLogin = async (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) {
      await showToast(t('LOGIN_FAIL'), 'error');
      return;
    }
    const decoded =  await jwtDecode(credentialResponse.credential);
    const loginPayload = {
      ...decoded,
      idToken: credentialResponse.credential,
    };
    await handleLoginSuccess({
      provider: "google",
      result: loginPayload,
    });
  };

  const signIn = async () => {
    try {
      const userGoogle = await SocialLogin.login({
        provider: 'google',
        options: {
          scopes: ['email', 'profile'],
        }
      });
      if (!userGoogle.result) {
        await showToast(t('LOGIN_FAIL'), 'error');
        return;
      }
      await handleLoginSuccess({
        provider: "google",
        result: userGoogle.result,
      });
    } catch (error) {
      console.error("Sign-in error:", error);
      await showToast(t('LOGIN_FAIL'), 'error');
    }
  };
  return (
    <GoogleOAuthProvider clientId="271408278055-aq099jsihpd8j12r3tngrvijsvi7odfq.apps.googleusercontent.com"> 
      <Stack direction="row" justifyContent="center" spacing={2} mt={3}>
        {isWeb ? (
          <GoogleLogin
            onSuccess={handleGoogleWebLogin}
            onError={() => {
              showToast(t('LOGIN_FAIL'), 'error');
            }}
          />
        ) : (
          <CustomSocialButton onClick={signIn}>
            <Avatar
              src={"/images/svgs/google-icon.svg"}
              alt={"icon1"}
              sx={{
                width: 16,
                height: 16,
                borderRadius: 0,
                mr: 1,
              }}
            />
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                whiteSpace: "nowrap",
                mr: { sm: "3px" },
              }}
            >
              {title}{" "}
            </Box>{" "}
            Google
          </CustomSocialButton>
        )}
        <CustomSocialButton onClick={signIn}>
          <Avatar
            src={"/images/svgs/apple-icon.svg"}
            alt={"icon1"}
            sx={{
              width: 16,
              height: 16,
              borderRadius: 0,
              mr: 1,
            }}
          />
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              whiteSpace: "nowrap",
              mr: { sm: "3px" },
            }}
          >
            {title}{" "}
          </Box>{" "}
          Apple
        </CustomSocialButton>
      </Stack>
    </GoogleOAuthProvider>
  );
}
export default AuthSocialButtons;
