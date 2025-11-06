"use client";

import { useRef, useEffect, forwardRef, useImperativeHandle, useCallback } from "react";
import { AlphaTabApi, Settings, LayoutMode } from "@coderline/alphatab";

import { Box } from '@mui/material';

export interface AlphaTabViewerHandles {
  playPause: () => void;
  stop: () => void;
  setPlaybackPosition: (tick: number) => void;
  get a_api(): AlphaTabApi | null;
}

interface AlphaTabViewerProps {
  xmlPath: string;
  layoutMode?: 'page' | 'horizontal';
  onScoreLoaded?: (score: any, duration: number) => void;
  onMidiLoaded?: (e: { endTime: number }) => void;
  onPlayerPositionChanged?: (e: { currentTime: number, endTime: number }) => void;
  onPlayerStateChanged?: (e: { state: number, isPlaying: boolean }) => void;
  width?: string | number;
  height?: string | number;
  scaling?: number;
}

export const AlphaTabViewer = forwardRef<AlphaTabViewerHandles, AlphaTabViewerProps>(({ xmlPath, onScoreLoaded, onMidiLoaded, onPlayerPositionChanged, onPlayerStateChanged, width = '100%', height = '100%', scaling = 0.5, layoutMode = 'horizontal' }: AlphaTabViewerProps, ref) => {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const apiRef = useRef<AlphaTabApi | null>(null);
  useEffect(() => {
    if (!elementRef.current || !xmlPath) return;

    const baseUrl = window.location.origin;
    const settings: Settings = {
      core: {
        fontDirectory: `${baseUrl}/alphaTab/font/`,
      },
      player: {
        enablePlayer: true,
        enableCursor: true,
        soundFont: `${baseUrl}/alphaTab/soundfont/sonivox.sf2`
      },
      display: {
        layoutMode: layoutMode,
        width: width,        // Chiều rộng của trang hiển thị
        height: height,       // Chiều cao trang (nếu layoutMode là 'page')
        scaling: scaling,       // Tỉ lệ phóng to (1.0 = 100%)        
      },
    };

    const api = new AlphaTabApi(elementRef.current!, settings);
    apiRef.current = api;

    if (onScoreLoaded) {
      apiRef.current.scoreLoaded.on((score) => {
        onScoreLoaded(score);
      });
      // apiRef.current.playerReady.on(() => {
      //   console.log('Thời lượng phát (giây):', api.player.duration);
      // });
    }
    if (onPlayerPositionChanged) {
      apiRef.current.playerPositionChanged.on(onPlayerPositionChanged);
    }
    // if (onMidiLoaded) {
    //   apiRef.current.midiLoaded.on(onMidiLoaded);
    // }
    if (onPlayerStateChanged) {
      apiRef.current.playerStateChanged.on(onPlayerStateChanged);
    }

    // Sử dụng prop xmlPath để load file nhạc
    apiRef.current.load(xmlPath);

    return () => {
      if (apiRef.current) {
        apiRef.current?.destroy();
      }
    };
  }, [xmlPath, onScoreLoaded, onPlayerPositionChanged, onPlayerStateChanged, onMidiLoaded, layoutMode, width, height, scaling]);

  useImperativeHandle(ref, () => ({
    playPause: () => {
      apiRef.current?.playPause();
    },
    stop: () => {
      apiRef.current?.stop();
    },
    setPlaybackPosition: (tick: number) => {
      if (apiRef.current) apiRef.current.playbackRange = null;
      if (apiRef.current) apiRef.current.tickPosition = tick;
    },
    get a_api() { return apiRef.current; }
  }));
  return (

    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'lightblue'
      }}
    >
      <div ref={elementRef} style={{ width: '100%', height: '100%' }} />
    </Box >
  );
});
AlphaTabViewer.displayName = 'AlphaTabViewer';