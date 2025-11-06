import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AlphaTabApi, PlayerState } from '@coderline/alphatab';
import { Keyboard, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

interface Note {
  midi: number;
  startTick: number;
  duration: number;
}

interface FallingNoteProps {
  note: Note;
  currentTick: number;
  ticksPerPixel: number;
  pianoPosition: { top: number, left: number };
  keyWidth: number;
  isNextNote: boolean;
}

const FallingNote: React.FC<FallingNoteProps> = ({ note, currentTick, ticksPerPixel, pianoPosition, keyWidth, isNextNote }) => {
  const noteHeight = note.duration / ticksPerPixel;
  const distance = (note.startTick - currentTick) / ticksPerScreen;
  const top = pianoPosition.top - noteHeight - distance;

  // Simple mapping of MIDI to key position (this is a simplification)
  const getNotePosition = (midi: number) => {
    const octave = Math.floor(midi / 12) - 1;
    const noteInOctave = midi % 12;
    const whiteKeyMap = [0, 0.5, 1, 1.5, 2, 3, 3.5, 4, 4.5, 5, 5.5, 6];
    const isBlack = [1, 3, 6, 8, 10].includes(noteInOctave);
    
    let keyIndex = octave * 7 + whiteKeyMap[noteInOctave];
    // This is a rough approximation and needs a proper mapping function
    // based on the exact layout of react-piano keys.
    // For now, let's use a simpler multiplier.
    const keyPosition = (midi - 21) * (keyWidth * 0.7); // A0 is 21
    return { left: keyPosition, isBlack };
  };

  const { left, isBlack } = getNotePosition(note.midi);

  if (top > pianoPosition.top || top < -noteHeight) {
    return null; // Don't render notes far off-screen
  }

  const style: React.CSSProperties = {
    position: 'absolute',
    top: `${top}px`,
    left: `${pianoPosition.left + left}px`,
    width: `${isBlack ? keyWidth * 0.6 : keyWidth}px`,
    height: `${noteHeight}px`,
    backgroundColor: isNextNote ? 'yellow' : (isBlack ? 'black' : 'cyan'),
    border: '1px solid grey',
    borderRadius: '4px',
    zIndex: isBlack ? 2 : 1,
  };

  return <div style={style} />;
};

const ticksPerScreen = 4 * 960; // Show 4 quarter notes on screen

interface PianoTutorialProps {
  file: string;
  onMidiMessage: (callback: (data: Uint8Array) => void) => void;
}

export const PianoTutorial: React.FC<PianoTutorialProps> = ({ file, onMidiMessage }) => {
  const alphaTabRef = useRef<AlphaTabApi | null>(null);
  const rendererRef = useRef<HTMLDivElement>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentTick, setCurrentTick] = useState(0);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0);
  const [playbackState, setPlaybackState] = useState<'stopped' | 'playing' | 'waiting'>('stopped');
  const [activeMidiNotes, setActiveMidiNotes] = useState<number[]>([]);

  const pianoWidth = 1000;
  const keyWidth = pianoWidth / 52; // Approx 52 white keys on 88-key piano

  // Initialize AlphaTab
  useEffect(() => {
    if (rendererRef.current) {
      const api = new AlphaTabApi(rendererRef.current, {
        player: {
          enablePlayer: true,
          soundFont: 'https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/soundfont/sonivox.sf2',
          scrollElement: rendererRef.current.parentElement,
        },
      });
      alphaTabRef.current = api;

      api.midiLoaded.on(midi => {
        const extractedNotes: Note[] = [];
        midi.tracks.forEach(track => {
          track.events.forEach(event => {
            if (event.type === 144) { // NoteOn
              const noteOffEvent = track.events.find(e => e.type === 128 && e.noteKey === event.noteKey && e.tick > event.tick);
              if (noteOffEvent) {
                extractedNotes.push({
                  midi: event.noteKey,
                  startTick: event.tick,
                  duration: noteOffEvent.tick - event.tick,
                });
              }
            }
          });
        });
        extractedNotes.sort((a, b) => a.startTick - b.startTick);
        setNotes(extractedNotes);
      });

      api.load(file);

      return () => {
        api.destroy();
      };
    }
  }, [file]);

  // Animation Loop
  useEffect(() => {
    let animationFrameId: number;
    const animate = () => {
      if (playbackState === 'playing') {
        if (alphaTabRef.current?.player) {
          alphaTabRef.current.player.tickPosition += 1;
          setCurrentTick(alphaTabRef.current.player.tickPosition);
        }

        if (notes.length > currentNoteIndex) {
          const nextNote = notes[currentNoteIndex];
          if ((alphaTabRef.current?.player.tickPosition ?? 0) >= nextNote.startTick) {
            setPlaybackState('waiting');
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    if (playbackState === 'playing') {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [playbackState, notes, currentNoteIndex]);

  // MIDI Message Handler
  const handleMidi = useCallback((data: Uint8Array) => {
    const command = data[0] >> 4;
    const note = data[1];
    const velocity = data.length > 2 ? data[2] : 0;

    if (command === 9 && velocity > 0) { // Note On
      setActiveMidiNotes(prev => [...prev, note]);
      if (playbackState === 'waiting' && notes.length > currentNoteIndex) {
        const expectedNote = notes[currentNoteIndex];
        if (note === expectedNote.midi) {
          setCurrentNoteIndex(prev => prev + 1);
          setPlaybackState('playing');
        }
      }
    } else if (command === 8 || (command === 9 && velocity === 0)) { // Note Off
      setActiveMidiNotes(prev => prev.filter(n => n !== note));
    }
  }, [playbackState, notes, currentNoteIndex]);

  useEffect(() => {
    onMidiMessage(handleMidi);
  }, [handleMidi, onMidiMessage]);

  const handlePlay = () => {
    if (alphaTabRef.current) {
      alphaTabRef.current.player?.play();
      alphaTabRef.current.player?.pause();
      setPlaybackState('playing');
    }
  };

  const pianoPosition = { top: 500, left: 0 };
  const nextNoteToPlay = notes.length > currentNoteIndex ? notes[currentNoteIndex] : null;

  return (
    <div>
      <div ref={rendererRef} style={{ height: '1px', overflow: 'hidden' }}></div>
      <button onClick={handlePlay} disabled={playbackState !== 'stopped'}>Bắt đầu</button>
      <p>Trạng thái: {playbackState}</p>
      {nextNoteToPlay && <p>Nốt tiếp theo: {nextNoteToPlay.midi}</p>}
      {/* React Piano */}
      <div style={{ position: 'relative', top: pianoPosition.top, left: pianoPosition.left }}>
        <Keyboard
          noteRange={{ first: MidiNumbers.fromNote('a0'), last: MidiNumbers.fromNote('c8') }}
          playNote={() => {}}
          stopNote={() => {}}
          width={pianoWidth}
          activeNotes={activeMidiNotes}
          keyWidthToHeightRatio={0.2}
          renderNoteLabel={({ midiNumber, isAccidental, isActive }) => {
            if (nextNoteToPlay && midiNumber === nextNoteToPlay.midi) {
              return (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(255, 255, 0, 0.5)',
                  zIndex: 3
                }} />
              );
            }
            return null;
          }}
        />
      </div>
    </div>
  );
};

export default PianoTutorial;