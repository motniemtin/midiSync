import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AlphaTabApi, Model } from '@coderline/alphatab';
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

const NOTE_SPEED_FACTOR = 0.2; // Điều chỉnh tốc độ rơi và chiều cao của nốt nhạc

const FallingNote: React.FC<FallingNoteProps> = ({ note, currentTick, pianoPosition, keyWidth, isNextNote }) => {
  const noteHeight = note.duration * NOTE_SPEED_FACTOR;
  const distanceInTicks = note.startTick - currentTick;
  const top = pianoPosition.top - noteHeight - (distanceInTicks * NOTE_SPEED_FACTOR);

  // Ánh xạ MIDI tới vị trí phím đàn (chính xác hơn)
  const getNotePosition = (midi: number) => {
    const noteIsAccidental = (note: number) => {
      const pitch = note % 12;
      return pitch === 1 || pitch === 3 || pitch === 6 || pitch === 8 || pitch === 10;
    };

    const getWhiteKeyNumber = (midi: number) => {
        const C0 = MidiNumbers.fromNote('c0');
        let whiteKeyNumber = 0;
        for (let i = C0; i < midi; i++) {
            if (!noteIsAccidental(i)) {
                whiteKeyNumber++;
            }
        }
        return whiteKeyNumber;
    };

    const isBlackKey = noteIsAccidental(midi);
    const whiteKeyIndex = getWhiteKeyNumber(midi);

    // Tính toán vị trí phím trắng
    const keyPosition = whiteKeyIndex * keyWidth;
    return { left: keyPosition, isBlack: isBlackKey };
  };

  const { left, isBlack } = getNotePosition(note.midi);

  if (top > pianoPosition.top + 20 || top < -noteHeight) {
    return null; // Không render nốt quá xa màn hình
  }

  const style: React.CSSProperties = {
    position: 'absolute',
    top: `${top}px`,
    left: `${pianoPosition.left + left}px`,
    width: `${isBlack ? keyWidth * 0.65 : keyWidth}px`,
    height: `${noteHeight}px`,
    backgroundColor: isNextNote ? 'yellow' : (isBlack ? 'black' : 'cyan'),
    border: '1px solid grey',
    borderRadius: '4px',
    zIndex: isBlack ? 3 : 2,
  };

  return <div style={style} />;
};

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
  const keyWidth = pianoWidth / 52; // 52 phím trắng trên đàn 88 phím
  console.log(file);  
  // Initialize AlphaTab
  useEffect(() => {
    if (rendererRef.current) {
      const api = new AlphaTabApi(rendererRef.current, {
        core: {
          // Cần thiết khi dùng Turbopack/Webpack để AlphaTab tìm đúng tài nguyên
          tex: true,
          fontDirectory: '/alphatab/font/'
        },
        player: {
          enablePlayer: true,
          soundFont: '/alphatab/soundfont/sonivox.sf2',
          scrollElement: rendererRef.current.parentElement,
          enableCursor: false, // Tắt con trỏ mặc định
        },
      });
      alphaTabRef.current = api;
      // Lấy nốt nhạc từ score sau khi load xong
      api.scoreLoaded.on((score: Model.Score) => {
        
        const extractedNotes: Note[] = [];
        console.log(score)
        score.tracks.forEach(track => {
          // // Chỉ lấy nốt từ các track dành cho piano
          // if (track.isPercussion || !track.staves.some(s => s.isPiano)) {
          //   console.log('Skipping non-piano track');
          //   return;
          // }

          track.staves.forEach(stave => {
            stave.bars.forEach(bar => {
              bar.voices.forEach(voice => {
                voice.beats.forEach(beat => {
                  beat.notes.forEach(note => {
                    if (note.isRest) return;
                    extractedNotes.push({
                      midi: note.realValue,
                      startTick: beat.start,
                      duration: note.duration * (score.division / 4), // Quy đổi duration của nốt ra tick
                    });
                  });
                });
              });
            });
          });
        });
        extractedNotes.sort((a, b) => a.startTick - b.startTick);
        setNotes(extractedNotes);
        console.log(extractedNotes)
      });

      // Đồng bộ tick với animation
      if (api.player) {
        api.player.tickPositionChanged.on(({ tick }) => {
          setCurrentTick(tick);
        });
      }

      api.load(file);

      return () => {
        api.destroy();
      };
    }
  }, [file]);

  // Logic "chờ nốt đúng"
  useEffect(() => {
    if (playbackState === 'playing' && notes.length > currentNoteIndex) {
      const nextNote = notes[currentNoteIndex];
      if (currentTick >= nextNote.startTick) {
        alphaTabRef.current?.player.pause();
        setPlaybackState('waiting');
      }
    }
  }, [currentTick, playbackState, notes, currentNoteIndex]);

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
          alphaTabRef.current?.player.play();
          setPlaybackState('playing'); // Tiếp tục chơi
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
      alphaTabRef.current.player.play();
      setPlaybackState('playing');
    }
  };

  const pianoPosition = { top: 500, left: 0 };
  
  // Xác định các nốt nhạc cần chuẩn bị bấm
  const PREPARE_WINDOW = 960 * 2; // Chuẩn bị trước 2 nhịp
  const upcomingNotes = notes.filter(note => 
    note.startTick > currentTick && 
    note.startTick <= currentTick + PREPARE_WINDOW
  );
  const upcomingMidiNotes = Array.from(new Set(upcomingNotes.map(note => note.midi)));
  const nextNoteToPlay = notes[currentNoteIndex];

  return (
    <div>
      <div ref={rendererRef} style={{ height: '100px', width: `${pianoWidth}px`, overflow: 'hidden', visibility: 'hidden' }}></div>
      <button onClick={handlePlay} disabled={playbackState !== 'stopped'}>Bắt đầu</button>
      <p>Trạng thái: {playbackState}</p>
      {nextNoteToPlay && <p>Nốt tiếp theo: {nextNoteToPlay.midi}</p>}

      {/* Khu vực nốt rơi */}
      <div style={{ position: 'relative', height: `${pianoPosition.top}px`, width: `${pianoWidth}px`, overflow: 'hidden', backgroundColor: '#f0f0f0', border: '1px solid #ccc' }}>
        {notes.map((note, index) => (
          <FallingNote
            key={`${note.startTick}-${note.midi}-${index}`}
            note={note}
            currentTick={currentTick}
            pianoPosition={pianoPosition}
            keyWidth={keyWidth}
            isNextNote={index === currentNoteIndex}
          />
        ))}
      </div>

      {/* Đàn piano ảo */}
      <div style={{ position: 'relative', left: pianoPosition.left, zIndex: 1 }}>
        <Keyboard
          noteRange={{ first: MidiNumbers.fromNote('a0'), last: MidiNumbers.fromNote('c8') }}
          onPlayNoteInput={() => {}}
          onStopNoteInput={() => {}}
          width={pianoWidth}
          activeNotes={activeMidiNotes}
          keyWidthToHeightRatio={0.2}
          // Đánh dấu phím tiếp theo cần bấm
          renderNoteLabel={({ midiNumber, isAccidental, isActive }) => {
            const isNextNote = nextNoteToPlay && midiNumber === nextNoteToPlay.midi;
            const isUpcomingNote = upcomingMidiNotes.includes(midiNumber);

            if (isNextNote) {
              // Nốt chính xác tiếp theo, màu vàng đậm
              return (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 255, 234, 0.5)',
                  zIndex: 4
                }} />
              );
            }
            if (isUpcomingNote) {
              // Các nốt sắp tới, màu xanh nhạt
              return (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(173, 216, 230, 0.5)', // Light blue
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