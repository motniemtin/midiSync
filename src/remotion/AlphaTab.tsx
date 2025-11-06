import '@/remotion/player.css';
import { spring } from "remotion";
import React from "react";
import { useRef, useState, useEffect, useCallback } from "react";
import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import { AlphaTabApi, Settings, LayoutMode } from "@coderline/alphatab";

import {
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  staticFile,
  Audio
} from "remotion";

import { Title } from '@/remotion/Logo/Title';
import { cancelRender, continueRender, delayRender } from "remotion";
import { easeInQuint } from '@/remotion/easings.js';
//For Piano
import { PianoComposition } from '@/remotion/Piano/PianoComposition';
//For Guitar
import { GuitarComposition } from '@/remotion/Guitar/GuitarComposition';
// import music from '@/remotion/canon.mp3';
import Particles from "@/remotion/Proton/Particles";
import { TitleScene } from '@/remotion/TitleScene/TitleScene';
import { LogoScene } from '@/remotion/TitleScene/LogoScene';
import { Visualization } from '@/remotion/Visualization/Visualization';

export const AlphaTab = React.memo(({ title, author, xmlPath }) => {
  const frame = useCurrentFrame();
  const { width, height, fps, durationInFrames } = useVideoConfig();
  const scrollRef = useRef(null);

  const [layoutMode, setLayoutMode] = useState<'page' | 'horizontal'>('page');

  const [loaded, setLoaded] = useState(false);
  const [score, setScore] = useState(null);
  const [handle] = useState(() => delayRender());
  const [alphaTabScroll, setAlphaTabScroll] = useState({ frameAt: 0, scrollLeft: 0 });

  const elementRef = useRef<HTMLDivElement>(null);
  const apiRef = useRef<AlphaTabApi | null>(null);

  // Animate from 0 to 1 after 25 frames
  const location = { top: 30, left: 30, width: 1860, height: '100%' };
  const pianoLocation = location;
  const guitarLocation = { top: 500, left: 30, width: 1860, height: 350 };
  // const audioData = useAudioData(music);
  const [alphaTabHeight, setAlphaTabHeight] = useState('100%');
  const introTime = 0;
  const logoTranslationProgress = spring({
    frame: frame - 25,
    fps,
    config: {
      damping: 100,
    },
  });
  const [notesJson, setNotesJson] = useState(null);
  // Move the logo up by 150 pixels once the transition starts
  const logoTranslation = interpolate(
    logoTranslationProgress,
    [0, 1],
    [0, -150]
  );

  // Fade out the animation at the end
  const opacity = interpolate(
    frame,
    [durationInFrames - 25, durationInFrames - 15],
    [1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );
  var scroll = alphaTabScroll.scrollLeft;
  if (apiRef.current && introTime < (frame / fps)) {
    try {
      apiRef.current.timePosition = parseInt((frame * 1000) / fps) - introTime;
      apiRef.current.scrollToCursor();
    } catch (e) {
    }
  }

  useEffect(() => {
    const api = new AlphaTabApi(elementRef.current!, {
      core: {
        fontDirectory: '/alphatab/font/'
      },
      player: {
        enablePlayer: true,
        enableCursor: true,
        enableUserInteraction: true,
        srollElement: document.querySelector(".at-viewport"),
        scrollMode: "continue",
        enableAnimatedBeatCursor: false,
        soundFont: '/alphatab/soundfont/sonivox.sf2'
      },
      display: {
        layoutMode: "horizontal",
      }
    } as Settings);
    apiRef.current = api;
    api.load(xmlPath);

    apiRef.current.scoreLoaded.on((score) => {
      try {
        var _notesJson = {};
        //score.tracks.map((track, track_id) => {
        var track_id = 0;
        var track = score.tracks[track_id];
        var _trackJson = {};
        var _tempo = 120;
        track.staves.map((stave, stave_id) => {
          var _currentTime = 0;
          stave.bars.map((bar, bar_id) => {
            if (score.masterBars[bar.index].tempoAutomation) {
              _tempo = score.masterBars[bar.index].tempoAutomation.value;
            }
            bar.voices.map((voice, voice_id) => {
              voice.beats.map((beat, beat_id) => {
                var _duration = ((beat.playbackDuration * (60000.0 / (_tempo * 960))) | 0) / 1000;
                beat.notes.map((note, note_id) => {
                  if (typeof _notesJson[note.displayValue] == "undefined") {
                    _notesJson[note.displayValue] = [];
                  }
                  _notesJson[note.displayValue].push({ start: _currentTime, stop: _currentTime + _duration, fret: note.fret, string: note.string, track: track_id, slave: stave_id });
                });
                _currentTime += _duration;
              });
            });
          });
        });
        //});
      } catch (e) {
        console.log(e)
      }
      var atMain = document.querySelector(".at-main");
      setScore(score);
      setAlphaTabHeight(atMain.clientHeight);
      setNotesJson(_notesJson);
      continueRender(handle);
    });
    apiRef.current.error.on((error) => {
      cancelRender(handle);
    });
    apiRef.current.playerPositionChanged.on((e) => {
      try {
        if (typeof apiRef.current._lastScroll != 'undefined') {
          var lastScroll = apiRef.current._lastScroll;
          lastScroll = (lastScroll - (lastScroll % location.width));
          //if(lastScroll > alphaTabScroll.scrollLeft)
          setAlphaTabScroll({ frameAt: frame, scrollLeft: lastScroll });
        }
      } catch (e) { }
    });
    return () => {
      if (apiRef.current) {
        apiRef.current.destroy();
        apiRef.current = null;
      }
    }
  }, [xmlPath]);

  return (
    <AbsoluteFill>
      <AbsoluteFill>
        {notesJson && <PianoComposition style={pianoLocation} data={notesJson} introTime={introTime} />}
      </AbsoluteFill>
      <AbsoluteFill style={location}>
        <div className="at-wrap">
          <div className="at-content" style={{ height: alphaTabHeight }}>
            <div className="at-viewport" style={{ left: -1 * scroll }}>
              <div className="at-main" ref={elementRef} style={{ backgroundColor: '#ffffffb0', borderRadius: 10, overflow: 'hidden' }} />
            </div>
          </div>
        </div>
      </AbsoluteFill>
      <AbsoluteFill style={{ opacity }}>
        <TitleScene title={title} author={author} />
      </AbsoluteFill>
      <AbsoluteFill style={{ opacity }}>
        <LogoScene />
      </AbsoluteFill>
    </AbsoluteFill>
  );
});
