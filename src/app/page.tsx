"use client";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PageContainer from '@/app/components/container/PageContainer';
import { useTranslation } from 'react-i18next';
export default function Home() {
  const { t } = useTranslation();
  
  return (
    <PageContainer seo={{
      title: t('HOMEPAGE_TITLE'),
      description: t('HOMEPAGE_DESCRIPTION'),
      keywords: t('HOMEPAGE_KEYWORDS'),
      thumb: ""
    }}
    >
      <Box mt={3}>
        <Grid container spacing={3}>
        </Grid>
      </Box>
    </PageContainer>
  )
}

// Home.layout = "Blank";
