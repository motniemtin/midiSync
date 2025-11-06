(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(DashboardLayout)/piano/PianoTutorial.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
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
const FallingNote = ({ note, currentTick, ticksPerPixel, pianoPosition, keyWidth, isNextNote })=>{
    const noteHeight = note.duration / ticksPerPixel;
    const distance = (note.startTick - currentTick) / ticksPerScreen;
    const top = pianoPosition.top - noteHeight - distance;
    // Simple mapping of MIDI to key position (this is a simplification)
    const getNotePosition = (midi)=>{
        const octave = Math.floor(midi / 12) - 1;
        const noteInOctave = midi % 12;
        const whiteKeyMap = [
            0,
            0.5,
            1,
            1.5,
            2,
            3,
            3.5,
            4,
            4.5,
            5,
            5.5,
            6
        ];
        const isBlack = [
            1,
            3,
            6,
            8,
            10
        ].includes(noteInOctave);
        let keyIndex = octave * 7 + whiteKeyMap[noteInOctave];
        // This is a rough approximation and needs a proper mapping function
        // based on the exact layout of react-piano keys.
        // For now, let's use a simpler multiplier.
        const keyPosition = (midi - 21) * (keyWidth * 0.7); // A0 is 21
        return {
            left: keyPosition,
            isBlack
        };
    };
    const { left, isBlack } = getNotePosition(note.midi);
    if (top > pianoPosition.top || top < -noteHeight) {
        return null; // Don't render notes far off-screen
    }
    const style = {
        position: 'absolute',
        top: `${top}px`,
        left: `${pianoPosition.left + left}px`,
        width: `${isBlack ? keyWidth * 0.6 : keyWidth}px`,
        height: `${noteHeight}px`,
        backgroundColor: isNextNote ? 'yellow' : isBlack ? 'black' : 'cyan',
        border: '1px solid grey',
        borderRadius: '4px',
        zIndex: isBlack ? 2 : 1
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: style
    }, void 0, false, {
        fileName: "[project]/src/app/(DashboardLayout)/piano/PianoTutorial.tsx",
        lineNumber: 59,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c = FallingNote;
const ticksPerScreen = 4 * 960; // Show 4 quarter notes on screen
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
    const keyWidth = pianoWidth / 52; // Approx 52 white keys on 88-key piano
    // Initialize AlphaTab
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PianoTutorial.useEffect": ()=>{
            if (rendererRef.current) {
                const api = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coderline$2f$alphatab$2f$dist$2f$alphaTab$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlphaTabApi"](rendererRef.current, {
                    player: {
                        enablePlayer: true,
                        soundFont: 'https://cdn.jsdelivr.net/npm/@coderline/alphatab@latest/dist/soundfont/sonivox.sf2',
                        scrollElement: rendererRef.current.parentElement
                    }
                });
                alphaTabRef.current = api;
                api.midiLoaded.on({
                    "PianoTutorial.useEffect": (midi)=>{
                        const extractedNotes = [];
                        midi.tracks.forEach({
                            "PianoTutorial.useEffect": (track)=>{
                                track.events.forEach({
                                    "PianoTutorial.useEffect": (event)=>{
                                        if (event.type === 144) {
                                            const noteOffEvent = track.events.find({
                                                "PianoTutorial.useEffect.noteOffEvent": (e)=>e.type === 128 && e.noteKey === event.noteKey && e.tick > event.tick
                                            }["PianoTutorial.useEffect.noteOffEvent"]);
                                            if (noteOffEvent) {
                                                extractedNotes.push({
                                                    midi: event.noteKey,
                                                    startTick: event.tick,
                                                    duration: noteOffEvent.tick - event.tick
                                                });
                                            }
                                        }
                                    }
                                }["PianoTutorial.useEffect"]);
                            }
                        }["PianoTutorial.useEffect"]);
                        extractedNotes.sort({
                            "PianoTutorial.useEffect": (a, b)=>a.startTick - b.startTick
                        }["PianoTutorial.useEffect"]);
                        setNotes(extractedNotes);
                    }
                }["PianoTutorial.useEffect"]);
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
    // Animation Loop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PianoTutorial.useEffect": ()=>{
            let animationFrameId;
            const animate = {
                "PianoTutorial.useEffect.animate": ()=>{
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
                }
            }["PianoTutorial.useEffect.animate"];
            if (playbackState === 'playing') {
                animationFrameId = requestAnimationFrame(animate);
            }
            return ({
                "PianoTutorial.useEffect": ()=>{
                    cancelAnimationFrame(animationFrameId);
                }
            })["PianoTutorial.useEffect"];
        }
    }["PianoTutorial.useEffect"], [
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
                        setPlaybackState('playing');
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
            alphaTabRef.current.player?.play();
            alphaTabRef.current.player?.pause();
            setPlaybackState('playing');
        }
    };
    const pianoPosition = {
        top: 500,
        left: 0
    };
    const nextNoteToPlay = notes.length > currentNoteIndex ? notes[currentNoteIndex] : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: rendererRef,
                style: {
                    height: '1px',
                    overflow: 'hidden'
                }
            }, void 0, false, {
                fileName: "[project]/src/app/(DashboardLayout)/piano/PianoTutorial.tsx",
                lineNumber: 187,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handlePlay,
                disabled: playbackState !== 'stopped',
                children: "Bắt đầu"
            }, void 0, false, {
                fileName: "[project]/src/app/(DashboardLayout)/piano/PianoTutorial.tsx",
                lineNumber: 188,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Trạng thái: ",
                    playbackState
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(DashboardLayout)/piano/PianoTutorial.tsx",
                lineNumber: 189,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            nextNoteToPlay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: [
                    "Nốt tiếp theo: ",
                    nextNoteToPlay.midi
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(DashboardLayout)/piano/PianoTutorial.tsx",
                lineNumber: 190,
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
                        ticksPerPixel: ticksPerScreen / pianoPosition.top,
                        pianoPosition: pianoPosition,
                        keyWidth: keyWidth,
                        isNextNote: index === currentNoteIndex
                    }, `${note.startTick}-${note.midi}`, false, {
                        fileName: "[project]/src/app/(DashboardLayout)/piano/PianoTutorial.tsx",
                        lineNumber: 195,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/app/(DashboardLayout)/piano/PianoTutorial.tsx",
                lineNumber: 193,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    position: 'relative',
                    top: pianoPosition.top,
                    left: pianoPosition.left
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$piano$2f$dist$2f$react$2d$piano$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Keyboard"], {
                    noteRange: {
                        first: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$piano$2f$dist$2f$react$2d$piano$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MidiNumbers"].fromNote('a0'),
                        last: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$piano$2f$dist$2f$react$2d$piano$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MidiNumbers"].fromNote('c8')
                    },
                    playNote: ()=>{},
                    stopNote: ()=>{},
                    width: pianoWidth,
                    activeNotes: activeMidiNotes,
                    keyWidthToHeightRatio: 0.2,
                    renderNoteLabel: ({ midiNumber, isAccidental, isActive })=>{
                        if (nextNoteToPlay && midiNumber === nextNoteToPlay.midi) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(255, 255, 0, 0.5)',
                                    zIndex: 3
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/(DashboardLayout)/piano/PianoTutorial.tsx",
                                lineNumber: 219,
                                columnNumber: 17
                            }, void 0);
                        }
                        return null;
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/(DashboardLayout)/piano/PianoTutorial.tsx",
                    lineNumber: 209,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/(DashboardLayout)/piano/PianoTutorial.tsx",
                lineNumber: 208,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(DashboardLayout)/piano/PianoTutorial.tsx",
        lineNumber: 186,
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
"[project]/src/app/(DashboardLayout)/piano/PianoTutorial.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(DashboardLayout)/piano/PianoTutorial.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_app_%28DashboardLayout%29_piano_PianoTutorial_tsx_19c1d06c._.js.map