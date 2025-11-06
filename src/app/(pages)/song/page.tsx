"use client";
import Box from '@mui/material/Box';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PageContainer from '@/app/components/container/PageContainer';
import { useTranslation } from 'react-i18next';
import { useSongIndex } from '@/services/song/useSongIndex';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Breadcrumb from '@/app/layout/shared/breadcrumb/Breadcrumb';
import { IconPlayerPlay, IconDownload, IconClock, IconMusic, IconHome, IconInfoCircle, IconPiano, IconPlayerPause } from "@tabler/icons-react";
import { Player } from "@remotion/player";
import type { PlayerRef } from "@remotion/player";

//For Player
import { Composition } from 'remotion';
import { AlphaTab } from '@/remotion/AlphaTab';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ width: '100%' }}
      {...other}
    >
      {value === index && (
        <Box>{children}</Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Song() {
  const { t } = useTranslation();

  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [tabValue, setTabValue] = useState(0);
  const playerRef = useRef<PlayerRef>(null); // Bắt đầu với autoPlay
  const [isPlaying, setIsPlaying] = useState(false);

  // ✅ Gọi hook với giá trị id an toàn
  const { song, isLoading, isError } = useSongIndex(id);

  useEffect(() => {
    if (!id) {
      router.push("/"); // Chuyển về trang chủ nếu chưa có id
    }
  }, [id, router]);

  if (!id) return null; // Tránh render sớm khi chưa redirect

  const BCrumb = [
    {
      to: '/',
      title: t('HOME_BREADCUMB'),
      icon: <IconHome size="16" />,
    },
    {
      title: song ? song.title : t('SONG_BREADCUMB'),
      icon: <IconMusic size="16" />,
    },
  ];

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <PageContainer
      seo={{
        title: song ? song.title : t('SONGPAGE_TITLE'),
        description: song ? song.description : t('SONGPAGE_DESCRIPTION'),
        keywords: song ? `${song.title}, ${song.artist}, piano, midi` : t('SONGPAGE_KEYWORDS'),
        thumb: song ? song.thumb : ""
      }}
    >
      <Breadcrumb title={song ? song.title : t('SONG_BREADCUMB')} items={BCrumb} />
      <Box mt={3}>
        {isLoading && (
          <Stack alignItems="center" justifyContent="center" sx={{ py: 10 }}>
            <CircularProgress />
          </Stack>
        )}
        {isError && <Alert severity="error">{t('SONG_LOAD_ERROR')}</Alert>}
        {song && (
          <Grid container spacing={3}>
            {/* Player Column */}
            <Grid item xs={12} md={8} sx={{ order: { xs: 2, md: 1 } }}>
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "16 / 9",
                  bgcolor: "black",
                  borderRadius: '4px',
                  overflow: 'hidden'
                }}
              >
                <Player
                  ref={playerRef}
                  component={AlphaTab}
                  fps={30}
                  style={{
                    width: '100%',
                    // Vô hiệu hóa tương tác chuột khi video đang phát để cho phép cuộn trang
                    pointerEvents: isPlaying ? 'none' : 'auto',
                  }}
                  durationInFrames={song.duration ? song.duration * 30 : 9000}
                  inputProps={{
                    title: song.title,
                    xmlPath: song.xmlPath,
                    author: song.artist,
                  }}
                  compositionHeight={1080}
                  compositionWidth={1920}
                  controls 
                  loop
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />
              </Box>
            </Grid>

            {/* Song Info Column */}
            <Grid item xs={12} md={4} sx={{ order: { xs: 1, md: 2 } }}>
              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography variant="h4" component="h1" fontWeight="bold">
                  {song.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  {song.artist}
                </Typography>
                <Stack
                  direction="row"
                  spacing={1}
                  my={1}
                  flexWrap="wrap"
                  gap={1}
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                >
                  <Chip label={t(`SONG_DIFFICULT_${song.lever.toUpperCase()}`)} color="primary" size="small" />
                  <Chip label={t(song.private.toUpperCase())} color="secondary" size="small" />
                </Stack>
                <Stack
                  direction="row"
                  spacing={1}
                  my={1}
                  flexWrap="wrap"
                  gap={1}
                  justifyContent={{ xs: 'center', md: 'flex-start' }}
                >
                  {song.tempo && (
                    <Chip icon={<IconMusic size="14" />} label={`${t('SONG_TEMPO')}: ${song.tempo}`} size="small" />
                  )}
                  {song.duration && (
                    <Chip icon={<IconClock size="14" />} label={`${t('SONG_DURATION')}: ${Math.floor(song.duration / 60)}:${String(Math.floor(song.duration % 60)).padStart(2, '0')}`} size="small" />
                  )}
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center" justifyContent={{ xs: 'center', md: 'flex-start' }} sx={{ mt: 2 }}>
                  <Button
                    variant="contained"
                    startIcon={isPlaying ? <IconPlayerPause /> : <IconPlayerPlay />}
                    onClick={() => playerRef.current?.toggle()}
                    sx={{ width: 150 }}
                  >
                    {isPlaying ? t('Pause Song') : t('SONG_PLAY_SONG')}
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        )}
      </Box>
    </PageContainer>
  );
}
