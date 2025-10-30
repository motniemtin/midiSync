
"use client";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PageContainer from '@/app/(DashboardLayout)/components/container/PageContainer';
import { useTranslation } from "react-i18next";
import { Card, CardHeader, CardContent, Divider, Button, CircularProgress, Checkbox } from "@mui/material";
import Image from 'next/image';
import { useUserLogin } from '@/services/user/useUserLogin'
import CustomTextField from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomTextField';
import CustomFormLabel from '@/app/(DashboardLayout)/components/forms/theme-elements/CustomFormLabel';
import Breadcrumb from '@/app/(DashboardLayout)/layout/shared/breadcrumb/Breadcrumb';
import { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useEffect, useRef } from "react";
import Link from "next/link";
import axios from 'axios';
import { showToast } from '@/utils/showToast';
import { useRouter } from 'next/navigation';

import { IconCloudUp, IconFilePlus, IconHome, IconUpload } from '@tabler/icons-react';
import {
    Stack,
    Alert,
} from "@mui/material";

interface Upload {
    id: number | string;
    status: 'ok' | 'error' | 'notsupport' | string;
    title: string;
    artist: string;
}

export default function UploadPage() {
    const { t } = useTranslation();
    const { user, isLoading, isError } = useUserLogin();
    const router = useRouter();
    const [difficult, setDifficult] = useState("beginner");
    const [file, setFile] = useState<File | null>(null);
    const [creating, setCreating] = useState(false);
    const [message, setMessage] = useState<{ text: string, type: 'success' | 'error' | 'info' | 'warning' } | null>(null);
    const [uploading, setUploading] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [uploadStatus, setUploadStatus] = useState<Upload['status'] | null>(null);
    const [percent, setPercent] = useState(0);
    const [upload, setUpload] = useState<Upload | null>(null);
    const [songPrivate, setSongPrivate] = useState("public");
    const [agreement, setAgreement] = useState(true);
    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [description, setDescription] = useState("");
    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
            await handleCheckingFile(event.target.files[0]);
        }
    };
    const handleCheckingFile = async (_file: File) => {
        if (_file) {
            setUploading(true);
            setProcessing(false);
            setUploadStatus(null);
            setPercent(0);
            setMessage({ text: t("CHECKING_FILE"), type: 'info' });
            const token = localStorage.getItem('token'); // lấy token từ localStorage
            if (!token) return console.error('No token found');
            const formData = new FormData();
            formData.append("file", _file);

            try {
                const res = await axios.post('https://server.pianosync.com/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${token}`, // gửi token
                    },
                    onUploadProgress: (progressEvent) => {
                        if (progressEvent.total) {
                            const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                            setPercent(percent);
                        }
                    },
                });
                setMessage({ text: t("PROCESSING_FILE"), type: 'info' });
                setProcessing(true);
                setUploading(false);
                setUpload(res.data.upload);
                const interval = setInterval(async (upload) => {
                    try {
                        const res = await axios.get(`https://server.pianosync.com/upload/index?id=${upload.id}`, {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        });
                        setUpload(res.data.upload);
                        if (res.data.upload.status == "ok" || res.data.upload.status == "error" || res.data.upload.status == "notsupport") {
                            setProcessing(false);
                            if (interval) clearInterval(interval); // 💥 Dừng interval khi xong
                            setUploadStatus(res.data.upload.status);
                            if (res.data.upload.status == "ok") {
                                setMessage({ text: t("ENTER_SONG_DETAIL"), type: 'success' });
                                setTitle(res.data.upload.title);
                                setArtist(res.data.upload.artist);
                            }
                            if (res.data.upload.status == "error") {
                                setMessage({ text: t("CHECKING_FILE_ERROR"), type: 'error' });
                            }
                            if (res.data.upload.status == "notsupport") {
                                setMessage({ text: t("CHECKING_FILE_NOTSUPPORT"), type: 'error' });
                            }
                            setFile(null);
                            setProcessing(false);
                            setUploading(false);
                        }
                    } catch (err) {
                        console.error("Error checking process:", err);
                    }
                }, 1000, res.data.upload);
            } catch (error) {
                setMessage({ text: t("CHECKING_FILE_ERROR"), type: 'error' });
            } finally {
                setUploading(false);
            }
        } else {
            alert('Chưa có File');
        }
    };
    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleFileUpload();
    };
    const handleFileUpload = async () => {
        if (!upload) {
            setMessage({ text: t("UPLOAD_DATA_MISSING"), type: 'error' });
            return;
        }
        if (title.length < 5) {
            setMessage({ text: t("SONG_TITLE_REQUIRED"), type: 'error' });
            return;
        }
        if (artist.length < 5) {
            setMessage({ text: t("SONG_ARTIST_REQUIRED"), type: 'error' });
            return;
        }
        if (!agreement) {
            setMessage({ text: t("SONG_AGREEMENT_REQUIRED"), type: 'error' });
            return;
        }
        setCreating(true);
        setMessage({ text: t("CREATING_SONG"), type: 'info' });
        const token = localStorage.getItem('token'); // lấy token từ localStorage
        if (!token) return console.error('No token found');
        try {
            const res = await axios.post('https://server.pianosync.com/song/create', {
                uploadId: upload.id,
                title,
                artist,
                description,
                lever: difficult,
                private: songPrivate
            }, {
                headers: {
                    Authorization: `Bearer ${token}`, // gửi token
                },
            });
            await showToast(t('SONG_CREATE_OK'), 'success');
            router.push("/song?id=" + res.data.song.id); 
        } catch (error) {
            setMessage({ text: t("SONG_CREATE_ERROR"), type: 'error' });
            setCreating(false);
        }
    };

    const BCrumb = [
        {
            to: '/',
            title: t('HOME_BREADCUMB'), 
            icon: <IconHome size="16" />
        },
        {
            title: t('UPLOAD_BREADCUMB'),
            icon: <IconUpload size="16" />
        },
    ];

    if (!user && !isLoading) {
        return (<PageContainer seo={{
            title: t('UPLOADPAGE_TITLE'),
            description: t('UPLOADPAGE_DESCRIPTION'),
            keywords: t('UPLOADPAGE_KEYWORDS'),
            thumb: ""
        }}>
            <Breadcrumb title={t('UPLOADPAGE_TITLE')} items={BCrumb} />
            <Link href="/user/login">{t('LIGIN_TO_UPLOAD')}</Link>
        </PageContainer>)
    }
    return (
        <PageContainer seo={{
            title: t('UPLOADPAGE_TITLE'),
            description: t('UPLOADPAGE_DESCRIPTION'),
            keywords: t('UPLOADPAGE_KEYWORDS'),
            thumb: ""
        }}>
            <Breadcrumb title={t('UPLOADPAGE_TITLE')} items={BCrumb} />
            <Card>
                <CardHeader title={t('UPLOAD_TITLE')} sx={{ p: 1 }} />
                <Divider />
                <CardContent sx={{ p: 1 }}>
                    {message &&
                        <Stack>
                            <Alert variant="outlined" severity={message.type}>
                                {message.text}
                            </Alert>
                        </Stack>
                    }
                    <form onSubmit={handleFormSubmit}>
                        {uploadStatus == "ok" && !creating && <>
                            <CustomFormLabel htmlFor="songTitle">{t('SONG_TITLE')}</CustomFormLabel>
                            <CustomTextField id="songTitle" placeholder="" variant="outlined" fullWidth
                                value={title}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                            />
                            <CustomFormLabel htmlFor="songArtist">{t('SONG_ARTIST')}</CustomFormLabel>
                            <CustomTextField id="songArtist" placeholder="" variant="outlined" fullWidth
                                value={artist}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setArtist(e.target.value)}
                            />
                            <CustomFormLabel htmlFor="songDescription">{t('SONG_DESCRIPTION')}</CustomFormLabel>
                            <CustomTextField id="songDescription" placeholder="" variant="outlined" fullWidth
                                value={description}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDescription(e.target.value)}
                            />
                            <FormControl fullWidth >
                                <CustomFormLabel htmlFor="song-difficult">{t('SONG_DIFFICULT')}</CustomFormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-song-difficult-label"
                                    defaultValue={difficult}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDifficult(e.target.value)}
                                >
                                    <FormControlLabel value="beginner" control={<Radio />} label={t('SONG_DIFFICULT_EASY')} />
                                    <FormControlLabel value="intermediate" control={<Radio />} label={t('SONG_DIFFICULT_MEDIUM')} />
                                    <FormControlLabel value="advanced" control={<Radio />} label={t('SONG_DIFFICULT_HARD')} />
                                </RadioGroup>
                            </FormControl>
                            <FormControl fullWidth >
                                <CustomFormLabel htmlFor="song-difficult">{t('SONG_PRIVATE')}</CustomFormLabel>
                                <RadioGroup
                                    aria-labelledby="demo-song-difficult-label"
                                    defaultValue={songPrivate}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSongPrivate(e.target.value)}
                                >
                                    <FormControlLabel value="public" control={<Radio />} label={t('SONG_PUBLIC')} />
                                    <FormControlLabel value="songPrivate" control={<Radio />} label={t('SONG_PRIVATE')} />
                                </RadioGroup>
                            </FormControl>
                            <FormControl fullWidth >
                                <CustomFormLabel htmlFor="song-difficult">{t('AGREEMENT')}</CustomFormLabel>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={agreement}
                                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAgreement(e.target.checked)}
                                            color="primary"
                                        />
                                    }
                                    label={agreement ? t('AGREEMENT_YES') : t('AGREEMENT_NO')}
                                />
                            </FormControl>
                            <FormControl fullWidth >
                                <Button variant="contained" type="submit" startIcon={<IconFilePlus />}>
                                    {t('SONG_CREATE')}
                                </Button>
                            </FormControl>
                        </>
                        }
                        {!uploading && !processing && uploadStatus != "ok" && <>
                            <CustomFormLabel htmlFor="name">{t('SONG_FILE')}</CustomFormLabel>
                            <Button variant="contained" component="label" startIcon={<IconCloudUp />}>
                                {t('FILE_CHOICE')} {file ? ("[" + file.name + "]") : ""}
                                <input type="file" hidden onChange={handleFileChange} accept=".mid,.midi,.gp3,.gp4,.gp5,.gpx,.xml,.musicxml,.mxl" />
                            </Button>
                        </>
                        }
                        {(uploading || processing || creating) && (
                            <Stack alignItems="center" justifyContent="center" sx={{ my: 4 }}>
                                {uploading && (
                                    <Box
                                        sx={{
                                            position: "relative",
                                            display: "inline-flex",
                                        }}
                                    >
                                        <CircularProgress
                                            variant="determinate"
                                            value={percent}
                                            size={80}
                                            thickness={4}
                                        />
                                        <Box
                                            sx={{
                                                top: 0,
                                                left: 0,
                                                bottom: 0,
                                                right: 0,
                                                position: "absolute",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Typography sx={{ color: "text.secondary" }} variant="caption" component="div" color="text.secondary">
                                                {`${Math.round(percent)}%`}
                                            </Typography>
                                        </Box>
                                    </Box>
                                )}
                                {processing && <CircularProgress />}
                                {creating && <CircularProgress />}
                            </Stack>
                        )}
                    </form>
                </CardContent>
            </Card>
        </PageContainer>
    )
};

UploadPage.layout = "RootLayout";
