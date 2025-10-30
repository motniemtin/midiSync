"use client";
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import { useState, useMemo, useEffect } from "react";
import {
  CircularProgress,
  Alert,
  Stack,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Tooltip,
} from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import Pagination from "@mui/material/Pagination";
import { useSongLogin } from "@/services/song/useSongLogin";
import { Song } from "@/types/song";
// Hook để debounce giá trị, tránh gọi API/URL update liên tục
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
};

export default function MYSONGSPAGE() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { t } = useTranslation();

  // Đọc state từ URL hoặc dùng giá trị mặc định
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const [pageSize, setPageSize] = useState(Number(searchParams.get('limit')) || 10);
  const [sort, setSort] = useState(searchParams.get('sort') || "createdAt DESC");
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  // Xây dựng object `where` từ state
  const whereObject = useMemo(() => {
    const where: { [key: string]: any } = {};
    const initialWhere = JSON.parse(searchParams.get('where') || '{"name": ""}');
    const filter = debouncedSearchTerm || initialWhere.name?.contains || '';
    if (filter) {
      where.name = { contains: filter };
    }
    return where;
  }, [debouncedSearchTerm, searchParams]);

  // Đồng bộ state vào URL
  useEffect(() => {
    const params = new URLSearchParams();
    params.set('page', String(page));
    params.set('limit', String(pageSize));
    params.set('sort', sort);
    if (Object.keys(whereObject).length > 0) {
      params.set('where', JSON.stringify(whereObject));
    }
    // Dùng replace để không tạo thêm entry trong history của trình duyệt
    router.replace(`${pathname}?${params.toString()}`);
  }, [page, pageSize, sort, whereObject, pathname, router]);

  // Gọi hook với các tham số riêng biệt theo chuẩn Sails.js
  const { songs, pagination, isLoading: loading, isError: error } = useSongLogin(page, pageSize, whereObject, sort);

  if (loading) return <div>Loading songs...</div>;
  if (error) return <Alert severity="error">Đã xảy ra lỗi khi tải dữ liệu.</Alert>;

  return (
    <PageContainer seo={{
      title: t('MYSONGSPAGE_TITLE') + " - " + t('PAGE') + " " + page,
      description: t('MYSONGSPAGE_DESCRIPTION') + " - " + t('PAGE') + " " + page,
      keywords: t('MYSONGSPAGE_KEYWORDS'),
      thumb: ""
    }}>
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" fontWeight="bold" mb={4}>{t('MYSONGSPAGE_TITLE')}</Typography>        

        <Grid container spacing={2} mb={4} alignItems="center">
          <Grid item xs={12} md>
            <Stack direction="row" spacing={1}>
              <TextField
                label="Search by title..."
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setPage(1); }}
                variant="outlined"
                size="small"
                fullWidth
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md="auto">
            <FormControl variant="outlined" size="small" fullWidth sx={{ minWidth: 180 }}>
              <InputLabel id="sort-select-label">Sort By</InputLabel>
              <Select
                labelId="sort-select-label"
                value={sort}
                onChange={(e) => setSort(e.target.value as string)}
                onChange={(e) => setSort(e.target.value)}
                label="Sort By"
              >
                <MenuItem value={"createdAt DESC"}>Newest</MenuItem>
                <MenuItem value={"title ASC"}>Title (A-Z)</MenuItem>
                <MenuItem value={"title DESC"}>Title (Z-A)</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} md="auto">
            <FormControl variant="outlined" size="small" fullWidth sx={{ minWidth: 120 }}>
              <InputLabel id="page-size-select-label">Show</InputLabel>
              <Select
                labelId="page-size-select-label"
                value={pageSize}
                onChange={(e) => setPageSize(e.target.value as number)}
                onChange={(e) => setPageSize(Number(e.target.value))}
                label="Show"
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          {songs && songs.map((song: Song) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={song.id}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardActionArea component={Link} href={`/song?id=${song.id}`}>
                  <CardMedia
                    component="img"
                    sx={{
                      width: '100%',
                      height: 'auto',
                      aspectRatio: '16 / 9', // Giữ tỷ lệ 16:9, bạn có thể thay đổi
                    }}
                    image={song.thumb || "/default-cover.png"}
                    alt={song.title}
                  />
                  <CardContent>
                    <Tooltip title={song.title}>
                      <Typography gutterBottom variant="h6" component="div" noWrap>
                        {song.title}
                      </Typography>
                    </Tooltip>
                    <Typography variant="body2" color="text.secondary">
                      {song.artist?.name || 'Unknown Artist'}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* === Khu vực Phân trang === */}
        {pagination && pagination.totalPage > 1 && (
          <Stack spacing={2} mt={4} alignItems="center">
            <Pagination
              count={pagination.totalPage}
              page={page}
              onChange={(event, value) => setPage(value)}
              color="primary"
            />
          </Stack>
        )}
        {songs && songs.length === 0 && (
          <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'center', mt: 4 }}>
            {t('MYSONGSPAGE_NO_SONG_FOUND')}
          </Typography>
        )}
      </Box>
    </PageContainer>
  );
}
