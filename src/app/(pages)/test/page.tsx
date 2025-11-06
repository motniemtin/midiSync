"use client";

import { useTranslation } from 'react-i18next';
import { useState, useCallback, useRef } from 'react';
import { AlphaTabViewer, AlphaTabViewerHandles } from './AlphaTabViewer';
import PageContainer from '@/app/components/container/PageContainer';
import { Box, Slider, IconButton, Typography, Stack } from '@mui/material';
import { PlayArrow, Pause } from '@mui/icons-material';
import { Grid } from '@mui/material';

// Hàm định dạng thời gian từ giây sang MM:SS
const formatTime = (seconds: number) => {
    const floorSeconds = Math.floor(seconds);
    const min = Math.floor(floorSeconds / 60);
    const sec = floorSeconds % 60;
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
};

export default function Test() {
    const { t } = useTranslation();
    const [score, setScore] = useState(null);
    const [notesJson, setNotesJson] = useState(null);
    const alphaTabRef = useRef<AlphaTabViewerHandles>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);


    // Thay thế bằng đường dẫn thực tế đến file xml của bạn
    const xmlPath = "/windy_hill.musicxml";

    const handleScoreLoaded = useCallback((loadedScore: any) => {
        setScore(loadedScore);
        try {
            const _notesJson: any = {};
            const track = loadedScore.tracks[0];
            let _tempo = 120;
            let _currentTime = 0;

            track.staves.forEach((stave: any) => {
                stave.bars.forEach((bar: any) => {
                    if (loadedScore.masterBars[bar.index].tempoAutomation) {
                        _tempo = loadedScore.masterBars[bar.index].tempoAutomation.value;
                    }
                    bar.voices.forEach((voice: any) => {
                        voice.beats.forEach((beat: any) => {
                            const _duration = ((beat.playbackDuration * (60000.0 / (_tempo * 960))) | 0) / 1000;
                            beat.notes.forEach((note: any) => {
                                if (typeof _notesJson[note.displayValue] === "undefined") {
                                    _notesJson[note.displayValue] = [];
                                }
                                _notesJson[note.displayValue].push({ start: _currentTime, stop: _currentTime + _duration, fret: note.fret, string: note.string });
                            });
                            _currentTime += _duration;
                        });
                    });
                });
            });
            setNotesJson(_notesJson);
            console.log("Notes JSON created:", _notesJson);
        } catch (e) {
            console.error("Error processing score:", e);
        }
    }, []);

    const handlePlayerPositionChanged = useCallback((e: { currentTime: number, endTime: number }) => {
        setCurrentTime(e.currentTime);
    }, []);

    const handlePlayerStateChanged = useCallback((e: { state: number, isPlaying: boolean }) => {
        setIsPlaying(e.isPlaying);
    }, []);

    const handleMidiLoaded = useCallback((e: { endTime: number }) => {
        setDuration(e.endTime);
    }, []);

    const handlePlayPause = () => {
        alphaTabRef.current?.playPause();
    };

    const handleSeek = (event: Event, newValue: number | number[]) => {
        const newTime = newValue as number;
        alphaTabRef.current?.a_api?.player.seek(newTime);
    };

    return (
        <PageContainer
            seo={{
                title: "TEST AlphaTab Viewer",
                description: "Test page for AlphaTab Viewer integration",
                keywords: "AlphaTab, MusicXML, Viewer, Test",
                thumb: "/images/seo/dashboard-home.png",
            }}
        >
            <Grid container spacing={2}>
                {/* Cột trái chiếm 8/12 */}
                <Grid item xs={12} md={9}>
                    <Box sx={{ width: '100%', position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
                        <AlphaTabViewer
                            ref={alphaTabRef}
                            xmlPath={xmlPath}
                            onScoreLoaded={handleScoreLoaded}
                            onPlayerPositionChanged={handlePlayerPositionChanged}
                            onMidiLoaded={handleMidiLoaded}
                            onPlayerStateChanged={handlePlayerStateChanged}
                            width='500px'
                            height='500px'
                            scaling={0.75}
                            layoutMode='horizontal'
                        />
                    </Box>
                    <Box sx={{ p: 2, border: '1px solid #ccc', borderRadius: '4px', mt: 2 }}>
                        <Stack direction="row" spacing={2} alignItems="center">
                            <IconButton onClick={handlePlayPause}>
                                {isPlaying ? <Pause /> : <PlayArrow />}
                            </IconButton>
                            <Typography variant="body2">
                                {formatTime(currentTime)}
                            </Typography>
                            <Slider
                                aria-label="time-indicator"
                                size="small"
                                value={currentTime}
                                min={0}
                                step={1}
                                max={duration}
                                onChange={handleSeek}
                                sx={{
                                    height: 4,
                                }}
                            />
                            <Typography variant="body2">
                                {formatTime(duration)}
                            </Typography>
                        </Stack>
                    </Box>
                </Grid>

                {/* Cột phải chiếm 4/12 */}
                <Grid item xs={12} md={3}>
                </Grid>
            </Grid>

        </PageContainer>
    );
}