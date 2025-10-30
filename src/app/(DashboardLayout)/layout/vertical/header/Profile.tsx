"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { IconMail } from '@tabler/icons-react';
import { Stack } from '@mui/system';
import Image from 'next/image';
import { useUserLogin } from '@/services/user/useUserLogin'
import { useTranslation } from "react-i18next";
import { IconPiano } from '@tabler/icons-react';

const Profile = () => {
  const [anchorEl2, setAnchorEl2] = useState(null);
  const { user, isLoading, isError } = useUserLogin();
  const { t } = useTranslation();
  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  if (isLoading) {
    return (
      <Skeleton variant="circular" width={35} height={35} />
    );
  }

  return (
    <Box>
      {/* Chưa đăng nhập */}
      {!user &&
        <Link href="/user/login">
          {t('LOGIN')}
        </Link>
      }
      {/* Đã đăng nhập */}
      {user &&
        <>
          <IconButton
            size="large"
            aria-label="show 11 new notifications"
            color="inherit"
            aria-controls="msgs-menu"
            aria-haspopup="true"
            sx={{
              ...(typeof anchorEl2 === 'object' && {
                color: 'primary.main',
              }),
            }}
            onClick={handleClick2}
          >
            <Avatar
              src={user?.avatar || "/images/profile/user-1.jpg"}
              alt={'ProfileImg'}
              sx={{
                width: 35,
                height: 35,
              }}
            />
          </IconButton>
          <Menu
            id="msgs-menu"
            anchorEl={anchorEl2}
            keepMounted
            open={Boolean(anchorEl2)}
            onClose={handleClose2}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            sx={{
              '& .MuiMenu-paper': {
                width: '360px',
                p: 4,
              },
            }}
          >
            <Stack direction="row" py={3} spacing={2} alignItems="center">
              <Avatar src={user?.avatar || "/images/profile/user-1.jpg"} alt={"ProfileImg"} sx={{ width: 95, height: 95 }} />
              <Box>
                <Typography variant="subtitle2" color="textPrimary" fontWeight={600}>
                  {user?.fullName}
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  display="flex"
                  alignItems="center"
                  gap={1}
                >
                  <IconMail width={15} height={15} />
                  {user?.email}
                </Typography>
              </Box>
            </Stack>
            <Divider />
            <Box>
              <Box sx={{ py: 2, px: 0 }} className="hover-text-primary">
                <Link href="/user/songs">
                  <Stack direction="row" spacing={2}>
                    <Box
                      width="45px"
                      height="45px"
                      bgcolor="primary.light"
                      display="flex"
                      alignItems="center"
                      justifyContent="center" flexShrink="0"
                    >
                      <IconPiano width={24} height={24} />
                    </Box>
                    <Box>
                      <Typography
                        variant="subtitle2"
                        fontWeight={600}
                        color="textPrimary"
                        className="text-hover"
                        noWrap
                        sx={{
                          width: '240px',
                        }}
                      >
                        {t('USER_SONGS')}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="subtitle2"
                        sx={{
                          width: '240px',
                        }}
                        noWrap
                      >
                        {t('USER_SONGS_SUBTITLE')}
                      </Typography>
                    </Box>
                  </Stack>
                </Link>
              </Box>
            </Box>
          </Menu>
        </>
      }
    </Box>
  );
};

export default Profile;
