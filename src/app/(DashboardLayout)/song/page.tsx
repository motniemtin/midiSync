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
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import { useTranslation } from 'react-i18next';
import { useSongIndex } from '@/services/song/useSongIndex';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import Breadcrumb from "@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb";
import { IconPlayerPlay, IconDownload, IconClock, IconMusic, IconHome, IconInfoCircle, IconPiano } from "@tabler/icons-react";



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
          <>
            <Grid container spacing={3} sx={{ mb: 3 }} alignItems="center">
              <Grid item xs={12} sm={8}>
                <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                  <Typography variant="h4" component="h1" fontWeight="bold">
                    {song.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {song.artist}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    my={1}
                    flexWrap="wrap"
                    gap={1}
                    justifyContent={{ xs: 'center', sm: 'flex-start' }}
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
                    justifyContent={{ xs: 'center', sm: 'flex-start' }}
                  >
                    {song.tempo && (
                      <Chip icon={<IconMusic size="14" />} label={`${t('SONG_TEMPO')}: ${song.tempo}`} size="small" />
                    )}
                    {song.duration && (
                      <Chip icon={<IconClock size="14" />} label={`${t('SONG_DURATION')}: ${Math.floor(song.duration / 60)}:${String(Math.floor(song.duration % 60)).padStart(2, '0')}`} size="small" />
                    )}
                  </Stack>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'flex-end' } }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Button variant="contained" startIcon={<IconPlayerPlay />}>{t('SONG_PLAY_SONG')}</Button>
                </Stack>
              </Grid>
            </Grid>

            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={tabValue} onChange={handleTabChange} aria-label="Song sheets tabs" variant="scrollable">
                  {song.svgs && song.svgs.map((svgPath: string, index: number) => (
                    <Tab
                      key={svgPath}
                      icon={<img src={svgPath} alt={`${t('SONG_SHEET_MUSIC')} ${index + 1}`} style={{ height: 40, width: 'auto', borderRadius: '4px' }} />}
                      label={`${t('SONG_SHEET_MUSIC')} ${index + 1}`}
                      {...a11yProps(index)}
                    />
                  ))}
                </Tabs>
              </Box>
              {song.svgs && song.svgs.map((svgPath: string, index: number) => (
                <CustomTabPanel key={svgPath} value={tabValue} index={index}>
                  <Box sx={{ flexGrow: 1 }}>
                    <Composition
                      // You can take the "id" to render a video:
                      // npx remotion render src/index.jsx <id> out/video.mp4
                      id="AlphaTab"
                      component={AlphaTab}
                      durationInFrames={song.duration ? song.duration * 30 : 9000}
                      fps={30}
                      width={1920}
                      height={1080}
                      // You can override these props for each render:
                      // https://www.remotion.dev/docs/parametrized-rendering
                      defaultProps={{
                        title: 'Welcome to Remotion',
                        author: 'Remotion',
                      }}
                    />
                  </Box>
                </CustomTabPanel>
              ))}
            </Box>
          </>
        )}
      </Box>
    </PageContainer>
  );
}
