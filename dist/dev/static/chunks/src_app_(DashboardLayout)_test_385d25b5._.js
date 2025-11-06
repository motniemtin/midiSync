(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(DashboardLayout)/test/AlphaTabViewer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlphaTabViewer",
    ()=>AlphaTabViewer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coderline$2f$alphatab$2f$dist$2f$alphaTab$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@coderline/alphatab/dist/alphaTab.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coderline$2f$alphatab$2f$dist$2f$alphaTab$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@coderline/alphatab/dist/alphaTab.core.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript) <export default as Box>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const AlphaTabViewer = ({ xmlPath, onScoreLoaded, onPlayerPositionChanged, layoutMode = 'horizontal' })=>{
    _s();
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const apiRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AlphaTabViewer.useEffect": ()=>{
            if (!elementRef.current || !xmlPath) return;
            const baseUrl = window.location.origin;
            const settings = {
                core: {
                    fontDirectory: `${baseUrl}/alphaTab/font/`,
                    scriptFile: `${baseUrl}/alphaTab/alphaTab.js`
                },
                player: {
                    enablePlayer: true,
                    enableCursor: true,
                    soundFont: `${baseUrl}/alphaTab/soundfont/sonivox.sf2`
                }
            };
            const api = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coderline$2f$alphatab$2f$dist$2f$alphaTab$2e$core$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlphaTabApi"](elementRef.current, settings);
            apiRef.current = api;
            if (onScoreLoaded) {
                apiRef.current.scoreLoaded.on(onScoreLoaded);
            }
            if (onPlayerPositionChanged) {
                apiRef.current.playerPositionChanged.on(onPlayerPositionChanged);
            }
            // Sử dụng prop xmlPath để load file nhạc
            apiRef.current.load(xmlPath);
            return ({
                "AlphaTabViewer.useEffect": ()=>{
                    if (apiRef.current) {
                        apiRef.current?.destroy();
                    }
                }
            })["AlphaTabViewer.useEffect"];
        }
    }["AlphaTabViewer.useEffect"], [
        xmlPath,
        onScoreLoaded,
        onPlayerPositionChanged
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
        sx: {
            width: '100%',
            position: 'relative',
            paddingTop: '56.25%'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
            sx: {
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'lightblue'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: elementRef,
                    style: {
                        width: '100%',
                        height: '100%'
                    }
                }, void 0, false, {
                    fileName: "[project]/src/app/(DashboardLayout)/test/AlphaTabViewer.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                ";"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(DashboardLayout)/test/AlphaTabViewer.tsx",
            lineNumber: 56,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/app/(DashboardLayout)/test/AlphaTabViewer.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AlphaTabViewer, "GO8RrAbJBoAlq3o1OIVK5pbzFZs=");
_c = AlphaTabViewer;
var _c;
__turbopack_context__.k.register(_c, "AlphaTabViewer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(DashboardLayout)/test/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Test
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-i18next/dist/es/useTranslation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$DashboardLayout$292f$test$2f$AlphaTabViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(DashboardLayout)/test/AlphaTabViewer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/Box/Box.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Test() {
    _s();
    const { t } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"])();
    const [score, setScore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [notesJson, setNotesJson] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Thay thế bằng đường dẫn thực tế đến file xml của bạn
    const xmlPath = "/windy_hill.musicxml";
    const handleScoreLoaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Test.useCallback[handleScoreLoaded]": (loadedScore)=>{
            setScore(loadedScore);
            try {
                const _notesJson = {};
                const track = loadedScore.tracks[0];
                let _tempo = 120;
                let _currentTime = 0;
                track.staves.forEach({
                    "Test.useCallback[handleScoreLoaded]": (stave)=>{
                        stave.bars.forEach({
                            "Test.useCallback[handleScoreLoaded]": (bar)=>{
                                if (loadedScore.masterBars[bar.index].tempoAutomation) {
                                    _tempo = loadedScore.masterBars[bar.index].tempoAutomation.value;
                                }
                                bar.voices.forEach({
                                    "Test.useCallback[handleScoreLoaded]": (voice)=>{
                                        voice.beats.forEach({
                                            "Test.useCallback[handleScoreLoaded]": (beat)=>{
                                                const _duration = (beat.playbackDuration * (60000.0 / (_tempo * 960)) | 0) / 1000;
                                                beat.notes.forEach({
                                                    "Test.useCallback[handleScoreLoaded]": (note)=>{
                                                        if (typeof _notesJson[note.displayValue] === "undefined") {
                                                            _notesJson[note.displayValue] = [];
                                                        }
                                                        _notesJson[note.displayValue].push({
                                                            start: _currentTime,
                                                            stop: _currentTime + _duration,
                                                            fret: note.fret,
                                                            string: note.string
                                                        });
                                                    }
                                                }["Test.useCallback[handleScoreLoaded]"]);
                                                _currentTime += _duration;
                                            }
                                        }["Test.useCallback[handleScoreLoaded]"]);
                                    }
                                }["Test.useCallback[handleScoreLoaded]"]);
                            }
                        }["Test.useCallback[handleScoreLoaded]"]);
                    }
                }["Test.useCallback[handleScoreLoaded]"]);
                setNotesJson(_notesJson);
                console.log("Notes JSON created:", _notesJson);
            } catch (e) {
                console.error("Error processing score:", e);
            }
        }
    }["Test.useCallback[handleScoreLoaded]"], []);
    const handlePlayerPositionChanged = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Test.useCallback[handlePlayerPositionChanged]": (e)=>{
        // Xử lý khi vị trí player thay đổi, ví dụ: console.log(e.currentTime);
        }
    }["Test.useCallback[handlePlayerPositionChanged]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$DashboardLayout$292f$test$2f$AlphaTabViewer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AlphaTabViewer"], {
            xmlPath: xmlPath,
            onScoreLoaded: handleScoreLoaded,
            onPlayerPositionChanged: handlePlayerPositionChanged,
            layoutMode: "horizontal"
        }, void 0, false, {
            fileName: "[project]/src/app/(DashboardLayout)/test/page.tsx",
            lineNumber: 59,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/(DashboardLayout)/test/page.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, this);
}
_s(Test, "on38tUX1HxLQvfBLH2nzkOjgmR4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$i18next$2f$dist$2f$es$2f$useTranslation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTranslation"]
    ];
});
_c = Test;
var _c;
__turbopack_context__.k.register(_c, "Test");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_%28DashboardLayout%29_test_385d25b5._.js.map