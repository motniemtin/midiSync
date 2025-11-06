(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
(()=>{
    const e = new Error("Cannot find module '@/components/AlphaTabViewer'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                children: t('Test Page')
            }, void 0, false, {
                fileName: "[project]/src/app/(DashboardLayout)/test/page.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AlphaTabViewer, {
                xmlPath: xmlPath,
                onScoreLoaded: handleScoreLoaded,
                onPlayerPositionChanged: handlePlayerPositionChanged
            }, void 0, false, {
                fileName: "[project]/src/app/(DashboardLayout)/test/page.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            notesJson && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                children: JSON.stringify(notesJson, null, 2)
            }, void 0, false, {
                fileName: "[project]/src/app/(DashboardLayout)/test/page.tsx",
                lineNumber: 62,
                columnNumber: 27
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(DashboardLayout)/test/page.tsx",
        lineNumber: 54,
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

//# sourceMappingURL=src_app_%28DashboardLayout%29_test_page_tsx_c66e7a2f._.js.map