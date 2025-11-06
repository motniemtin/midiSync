"use client";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import PageContainer from '@/app/components/container/PageContainer';
import { useTranslation } from "react-i18next";
import { Card } from "@mui/material";
import AuthSocialButtons from '@/app/(pages)/user/AuthSocialButtons';
import Image from 'next/image';

export default function Login() {
  const { t } = useTranslation();  
  return (
    <PageContainer seo={{
      title: t('LOGINPAGE_TITLE'),
      description: t('LOGINPAGE_DESCRIPTION'),
      keywords: t('LOGINPAGE_KEYWORDS'),
      thumb: ""
    }}>
      <Box
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: '0.3',
          },
        }}
      >
        <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={5}
            xl={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '550px' }}>              
              <Box mt={3} display="flex" alignItems="center" justifyContent="center">
                <Typography fontWeight="700" variant="h3" mb={1}>
                  {t('LOGIN_TITLE')}
                </Typography>
              </Box>
              <AuthSocialButtons/>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  )
};

Login.layout = "RootLayout";
