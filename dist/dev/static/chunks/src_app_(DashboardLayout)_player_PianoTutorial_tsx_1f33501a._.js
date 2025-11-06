(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(DashboardLayout)/player/PianoTutorial.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PianoTutorial",
    ()=>PianoTutorial,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coderline$2f$alphatab$2f$dist$2f$alphaTab$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@coderline/alphatab/dist/alphaTab.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coderline$2f$alphatab$2f$dist$2f$alphaTab$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@coderline/alphatab/dist/alphaTab.core.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$piano$2f$dist$2f$react$2d$piano$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-piano/dist/react-piano.esm.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const NOTE_SPEED_FACTOR = 0.2; // Điều chỉnh tốc độ rơi và chiều cao của nốt nhạc
const FallingNote = ({ note, currentTick, pianoPosition, keyWidth, isNextNote })=>{
    const noteHeight = note.duration * NOTE_SPEED_FACTOR;
    const distanceInTicks = note.startTick - currentTick;
    const top = pianoPosition.top - noteHeight - distanceInTicks * NOTE_SPEED_FACTOR;
    // Ánh xạ MIDI tới vị trí phím đàn (chính xác hơn)
    const getNotePosition = (midi)=>{
        const noteIsAccidental = (note)=>{
            const pitch = note % 12;
            return pitch === 1 || pitch === 3 || pitch === 6 || pitch === 8 || pitch === 10;
        };
        const getWhiteKeyNumber = (midi)=>{
            const C0 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$piano$2f$dist$2f$react$2d$piano$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MidiNumbers"].fromNote('c0');
            let whiteKeyNumber = 0;
            for(let i = C0; i < midi; i++){
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
        return {
            left: keyPosition,
            isBlack: isBlackKey
        };
    };
    const { left, isBlack } = getNotePosition(note.midi);
    if (top > pianoPosition.top + 20 || top < -noteHeight) {
        return null; // Không render nốt quá xa màn hình
    }
    const style = {
        position: 'absolute',
        top: `${top}px`,
        left: `${pianoPosition.left + left}px`,
        width: `${isBlack ? keyWidth * 0.65 : keyWidth}px`,
        height: `${noteHeight}px`,
        backgroundColor: isNextNote ? 'yellow' : isBlack ? 'black' : 'cyan',
        border: '1px solid grey',
        borderRadius: '4px',
        zIndex: isBlack ? 3 : 2
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: style
    }, void 0, false, {
        fileName: "[project]/src/app/(DashboardLayout)/player/PianoTutorial.tsx",
        lineNumber: 72,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FallingNote;
const PianoTutorial = ({ file, onMidiMessage })=>{
    _s();
    const alphaTabRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rendererRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [currentTick, setCurrentTick] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [currentNoteIndex, setCurrentNoteIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [playbackState, setPlaybackState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('stopped');
    const [activeMidiNotes, setActiveMidiNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const pianoWidth = 1000;
    const keyWidth = pianoWidth / 52; // 52 phím trắng trên đàn 88 phím
    console.log(file);
    // Initialize AlphaTab
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PianoTutorial.useEffect": ()=>{
            if (rendererRef.current) {
                const api = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coderline$2f$alphatab$2f$dist$2f$alphaTab$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlphaTabApi"](rendererRef.current, {
                    core: {
                        // Cần thiết khi dùng Turbopack/Webpack để AlphaTab tìm đúng tài nguyên
                        tex: true,
                        fontDirectory: '/alphatab/font/'
                    },
                    player: {
                        enablePlayer: true,
                        soundFont: '/alphatab/soundfont/sonivox.sf2',
                        scrollElement: rendererRef.current.parentElement,
                        enableCursor: false
                    }
                });
                alphaTabRef.current = api;
                // Lấy nốt nhạc từ score sau khi load xong
                api.scoreLoaded.on({
                    "PianoTutorial.useEffect": (score)=>{
                        const extractedNotes = [];
                        console.log(score);
                        score.tracks.forEach({
                            "PianoTutorial.useEffect": (track)=>{
                                // // Chỉ lấy nốt từ các track dành cho piano
                                // if (track.isPercussion || !track.staves.some(s => s.isPiano)) {
                                //   console.log('Skipping non-piano track');
                                //   return;
                                // }
                                track.staves.forEach({
                                    "PianoTutorial.useEffect": (stave)=>{
                                        stave.bars.forEach({
                                            "PianoTutorial.useEffect": (bar)=>{
                                                bar.voices.forEach({
                                                    "PianoTutorial.useEffect": (voice)=>{
                                                        voice.beats.forEach({
                                                            "PianoTutorial.useEffect": (beat)=>{
                                                                beat.notes.forEach({
                                                                    "PianoTutorial.useEffect": (note)=>{
                                                                        if (note.isRest) return;
                                                                        extractedNotes.push({
                                                                            midi: note.realValue,
                                                                            startTick: beat.start,
                                                                            duration: note.duration * (score.division / 4)
                                                                        });
                                                                    }
                                                                }["PianoTutorial.useEffect"]);
                                                            }
                                                        }["PianoTutorial.useEffect"]);
                                                    }
                                                }["PianoTutorial.useEffect"]);
                                            }
                                        }["PianoTutorial.useEffect"]);
                                    }
                                }["PianoTutorial.useEffect"]);
                            }
                        }["PianoTutorial.useEffect"]);
                        extractedNotes.sort({
                            "PianoTutorial.useEffect": (a, b)=>a.startTick - b.startTick
                        }["PianoTutorial.useEffect"]);
                        setNotes(extractedNotes);
                        console.log(extractedNotes);
                    }
                }["PianoTutorial.useEffect"]);
                // Đồng bộ tick với animation
                if (api.player) {
                    api.player.tickPositionChanged.on({
                        "PianoTutorial.useEffect": ({ tick })=>{
                            setCurrentTick(tick);
                        }
                    }["PianoTutorial.useEffect"]);
                }
                api.load(file);
                return ({
                    "PianoTutorial.useEffect": ()=>{
                        api.destroy();
                    }
                })["PianoTutorial.useEffect"];
            }
        }
    }["PianoTutorial.useEffect"], [
        file
    ]);
    // Logic "chờ nốt đúng"
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PianoTutorial.useEffect": ()=>{
            if (playbackState === 'playing' && notes.length > currentNoteIndex) {
                const nextNote = notes[currentNoteIndex];
                if (currentTick >= nextNote.startTick) {
                    alphaTabRef.current?.player.pause();
                    setPlaybackState('waiting');
                }
            }
        }
    }["PianoTutorial.useEffect"], [
        currentTick,
        playbackState,
        notes,
        currentNoteIndex
    ]);
    // MIDI Message Handler
    const handleMidi = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PianoTutorial.useCallback[handleMidi]": (data)=>{
            const command = data[0] >> 4;
            const note = data[1];
            const velocity = data.length > 2 ? data[2] : 0;
            if (command === 9 && velocity > 0) {
                setActiveMidiNotes({
                    "PianoTutorial.useCallback[handleMidi]": (prev)=>[
                            ...prev,
                            note
                        ]
                }["PianoTutorial.useCallback[handleMidi]"]);
                if (playbackState === 'waiting' && notes.length > currentNoteIndex) {
                    const expectedNote = notes[currentNoteIndex];
                    if (note === expectedNote.midi) {
                        setCurrentNoteIndex({
                            "PianoTutorial.useCallback[handleMidi]": (prev)=>prev + 1
                        }["PianoTutorial.useCallback[handleMidi]"]);
                        alphaTabRef.current?.player.play();
                        setPlaybackState('playing'); // Tiếp tục chơi
                    }
                }
            } else if (command === 8 || command === 9 && velocity === 0) {
                setActiveMidiNotes({
                    "PianoTutorial.useCallback[handleMidi]": (prev)=>prev.filter({
                            "PianoTutorial.useCallback[handleMidi]": (n)=>n !== note
                        }["PianoTutorial.useCallback[handleMidi]"])
                }["PianoTutorial.useCallback[handleMidi]"]);
            }
        }
    }["PianoTutorial.useCallback[handleMidi]"], [
        playbackState,
        notes,
        currentNoteIndex
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PianoTutorial.useEffect": ()=>{
            onMidiMessage(handleMidi);
        }
    }["PianoTutorial.useEffect"], [
        handleMidi,
        onMidiMessage
    ]);
    const handlePlay = ()=>{
        if (alphaTabRef.current) {
            alphaTabRef.current.player.play();
            setPlaybackState('playing');
        }
    };
    const pianoPosition = {
        top: 500,
        left: 0
    };
    // Xác định các nốt nhạc cần chuẩn bị bấm
    const PREPARE_WINDOW = 960 * 2; // Chuẩn bị trước 2 nhịp
    const upcomingNotes = notes.filter((note)=>note.startTick > currentTick && note.startTick <= currentTick + PREPARE_WINDOW);
    const upcomingMidiNotes = Array.from(new Set(upcomingNotes.map((note)=>note.midi)));
    const nextNoteToPlay = notes[currentNoteIndex];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: rendererRef,
                style: {
                    height: '100px',
                    width: `${pianoWidth}px`,
                    overflow: 'hidden',
                    visibility: 'hidden'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(DashboardLayout)/player/PianoTutorial.tsx",
                lineNumber: 214,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handlePlay,
                disabled: playbackState !== 'stopped',
                children: "Bắt đầu"
            }, void 0, false, {
                fileName: "[project]/src/app/(DashboardLayout)/player/PianoTutorial.tsx",
                lineNumber: 215,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Trạng thái: ",
                    playbackState
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(DashboardLayout)/player/PianoTutorial.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            nextNoteToPlay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Nốt tiếp theo: ",
                    nextNoteToPlay.midi
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(DashboardLayout)/player/PianoTutorial.tsx",
                lineNumber: 217,
                columnNumber: 26
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    height: `${pianoPosition.top}px`,
                    width: `${pianoWidth}px`,
                    overflow: 'hidden',
                    backgroundColor: '#f0f0f0',
                    border: '1px solid #ccc'
                },
                children: notes.map((note, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FallingNote, {
                        note: note,
                        currentTick: currentTick,
                        pianoPosition: pianoPosition,
                        keyWidth: keyWidth,
                        isNextNote: index === currentNoteIndex
                    }, `${note.startTick}-${note.midi}-${index}`, false, {
                        fileName: "[project]/src/app/(DashboardLayout)/player/PianoTutorial.tsx",
                        lineNumber: 222,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/(DashboardLayout)/player/PianoTutorial.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    left: pianoPosition.left,
                    zIndex: 1
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$piano$2f$dist$2f$react$2d$piano$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keyboard"], {
                    noteRange: {
                        first: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$piano$2f$dist$2f$react$2d$piano$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MidiNumbers"].fromNote('a0'),
                        last: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$piano$2f$dist$2f$react$2d$piano$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MidiNumbers"].fromNote('c8')
                    },
                    onPlayNoteInput: ()=>{},
                    onStopNoteInput: ()=>{},
                    width: pianoWidth,
                    activeNotes: activeMidiNotes,
                    keyWidthToHeightRatio: 0.2,
                    // Đánh dấu phím tiếp theo cần bấm
                    renderNoteLabel: ({ midiNumber, isAccidental, isActive })=>{
                        const isNextNote = nextNoteToPlay && midiNumber === nextNoteToPlay.midi;
                        const isUpcomingNote = upcomingMidiNotes.includes(midiNumber);
                        if (isNextNote) {
                            // Nốt chính xác tiếp theo, màu vàng đậm
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 255, 234, 0.5)',
                                    zIndex: 4
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/(DashboardLayout)/player/PianoTutorial.tsx",
                                lineNumber: 250,
                                columnNumber: 17
                            }, void 0);
                        }
                        if (isUpcomingNote) {
                            // Các nốt sắp tới, màu xanh nhạt
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(173, 216, 230, 0.5)',
                                    zIndex: 3
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/(DashboardLayout)/player/PianoTutorial.tsx",
                                lineNumber: 264,
                                columnNumber: 17
                            }, void 0);
                        }
                        return null;
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/(DashboardLayout)/player/PianoTutorial.tsx",
                    lineNumber: 235,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(DashboardLayout)/player/PianoTutorial.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(DashboardLayout)/player/PianoTutorial.tsx",
        lineNumber: 213,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PianoTutorial, "GKfzGWFXvahFdQ+jaJZ1p3KNoqM=");
_c1 = PianoTutorial;
const __TURBOPACK__default__export__ = PianoTutorial;
var _c, _c1;
__turbopack_context__.k.register(_c, "FallingNote");
__turbopack_context__.k.register(_c1, "PianoTutorial");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(DashboardLayout)/player/PianoTutorial.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(DashboardLayout)/player/PianoTutorial.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_app_%28DashboardLayout%29_player_PianoTutorial_tsx_1f33501a._.js.map