import { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import Link from "next/link";
import { IconChevronDown, IconHelp, IconShare, IconPlaylist } from "@tabler/icons-react";
import AppLinks from "./AppLinks";
import QuickLinks from "./QuickLinks";
import { useTranslation } from "react-i18next";

const AppDD = () => {
  const { t } = useTranslation();
  const [anchorEl2, setAnchorEl2] = useState(null);

  const handleClick2 = (event: any) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  return (
    <>
      <Button
        color="inherit"
        sx={{ color: (theme) => theme.palette.text.secondary }}
        variant="text"
        href="/songs"
        component={Link}
      >
        <IconShare style={{ marginRight: 8 }} size="18" />
        {t('SHARED SONGS')}
      </Button>
      <Button
        color="inherit"
        sx={{ color: (theme) => theme.palette.text.secondary }}
        variant="text"
        href="/user/songs"
        component={Link}
      >
        <IconPlaylist style={{ marginRight: 8 }} size="18" />
        {t('MY SONGS')}
      </Button>
    </>
  );
};

export default AppDD;
