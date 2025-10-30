import { FunctionComponent } from 'react';
import { Piano } from 'react-piano';
import { useVideoConfig } from 'remotion';
import styled from 'styled-components';
import { useGetActivesNotes } from './useGetActivesNotes';
import { Note } from "./Note";
import React from "react";

const FIRST_NOTE = 21;
const LAST_NOTE = 108;


export const PianoScene = React.memo(({data, delay}) => {
    const { width } = useVideoConfig();
    const activeNotes = useGetActivesNotes(data, delay);
    const location = {top: 900, left: 0, width: 1920, height: 185};
    const notes = [
        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
        39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
        57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74,
        75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92,
        93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
    ];
    return (
        <PianoContainer className="piano"
            style={{
                zIndex: 2,
                width: location.width,
                height: location.height,
                top: location.top,
                left: 0,
                position: "absolute",
            }}>
            {notes && notes.map((pitch, index) => {
                return (<Note key ={index} pitch = {pitch} activeNote={(pitch in activeNotes) ? activeNotes[pitch]:null} />);
            })}
        </PianoContainer>
    );
});

const PianoContainer = styled.div`
    position: absolute;
    bottom: 0;
    background-color: 'black';
`;
