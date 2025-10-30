import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import { staticFile } from "remotion";
// import {trackColors} from "./trackColors.jsx";
import React, { useEffect, useMemo, useRef, useState, Suspense, useCallback } from "react";

const trackColors = [
    {
        0: 'linear-gradient(-90deg, rgb(255, 68, 68), rgb(235, 17, 17) 49%, rgb(230, 84, 84)), blue', 
        1: 'linear-gradient(-90deg, rgb(75 168 242), #2196f3 49%, rgb(91 161 216)), blue', 
        2: 'linear-gradient(-90deg, #fadf8e, #ffc107 49%, #ffe085), blue', 
        3: 'linear-gradient(-90deg, #a072f1, #673ab7 49%, #a67ded), blue', 
        4: 'linear-gradient(-90deg, rgb(96 200 247), #2196f3 49%, rgb(66 184 237)), blue'
    },
    {
        0: 'linear-gradient(-90deg, rgb(255, 68, 68), rgb(235, 17, 17) 39%, rgb(230, 84, 84)), blue', 
        1: 'linear-gradient(-90deg, rgb(75 168 242), #2196f3 39%, rgb(91 161 216)), blue', 
        2: 'linear-gradient(-90deg, #fadf8e, #ffc107 39%, #ffe085), blue', 
        3: 'linear-gradient(-90deg, #a072f1, #673ab7 39%, #a67ded), blue', 
        4: 'linear-gradient(-90deg, rgb(96 200 247), #2196f3 39%, rgb(66 184 237)), blue'
    }
]

export const Note = React.memo((props) => {
    const frame = useCurrentFrame();
    const {fps} = useVideoConfig();
    const pianoWhiteKeyStyle = {
        position: 'absolute',
        height: "98%",
        width: '1.9%',
        top: 0,
        left: 0,
        border: "1px solid #bbb",
        borderRadius: "10px 10px 10px 10px",
        background: (!props.activeNote) ? "white" : trackColors[props.activeNote.slave][props.activeNote.track % 4],
        zIndex: -1
    }
    const pianoBlackKeyStyle = {
        position: 'absolute',
        height: "60%",
        width: '1.1%',
        top: 0,
        left: 0,
        //border: "1px solid #000",
        borderRadius: "5px 5px 5px 5px",
        background: (!props.activeNote) ? "#5c5c5c" : trackColors[props.activeNote.slave][props.activeNote.track % 4],
        zIndex: 3,
        boxShadow: '-1px -1px 2px rgba(255,255,255,0.2) inset, 0 -5px 2px 3px rgba(0,0,0,0.6) inset, 0 2px 4px rgba(0,0,0,0.5)'
    };
    const pos = {21: 0, 23: 1.92, 24: 3.85, 26: 5.77, 28: 7.69, 29: 9.62, 31: 11.54, 33: 13.46, 35: 15.38, 36: 17.31, 38: 19.23, 40: 21.15, 41: 23.08, 43: 25, 45: 26.92, 47: 28.85, 48: 30.77, 50: 32.69, 52: 34.62, 53: 36.54, 55: 38.46, 57: 40.38, 59: 42.31, 60: 44.23, 62: 46.15, 64: 48.08, 65: 50, 67: 51.92, 69: 53.85, 71: 55.77, 72: 57.69, 74: 59.62, 76: 61.54, 77: 63.46, 79: 65.38, 81: 67.31, 83: 69.23, 84: 71.15, 86: 73.08, 88: 75, 89: 76.92, 91: 78.85, 93: 80.77, 95: 82.69, 96: 84.62, 98: 86.54, 100: 88.46, 101: 90.38, 103: 92.31, 105: 94.23, 107: 96.15, 108: 98.08, 22: 0.96, 25: 4.81, 27: 6.73, 30: 10.58, 32: 12.5, 34: 14.42, 37: 18.27, 39: 20.19, 42: 24.04, 44: 25.96, 46: 27.88, 49: 31.73, 51: 33.65, 54: 37.5, 56: 39.42, 58: 41.35, 61: 45.19, 63: 47.12, 66: 50.96, 68: 52.88, 70: 54.81, 73: 58.65, 75: 60.58, 78: 64.42, 80: 66.35, 82: 68.27, 85: 72.12, 87: 74.04, 90: 77.88, 92: 79.81, 94: 81.73, 97: 85.58, 99: 87.5, 102: 91.35, 104: 93.27, 106: 95.19};
    
    const notes = [
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
        57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
        75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
        93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
    ];
    const black_notes = [
        22, 25, 27, 30, 32, 34, 37, 39, 42, 44, 46, 49, 51, 54, 56, 58, 61, 63,
        66, 68, 70, 73, 75, 78, 80, 82, 85, 87, 90, 92, 94, 97, 99, 102, 104,
        106,
    ];

    if(!black_notes.includes(parseInt(props.pitch))){
        pianoWhiteKeyStyle.left = pos[props.pitch] + '%'
        return (
            <div
                style={pianoWhiteKeyStyle}
            >
            </div>)
    }else{
        pianoBlackKeyStyle.left = pos[props.pitch] + 0.4 + '%'
        return (
            <div
                style={pianoBlackKeyStyle}
            >
            </div>)
    }
});