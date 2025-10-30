import React, { FunctionComponent } from 'react';
import { AbsoluteFill, Audio, Sequence } from 'remotion';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { DELAY_BEFORE_FIRST_NOTE, DELAY_BEFORE_MUSIC_START, TITLE_DURATION } from '../constant';
import { DropNotes } from './DropNotes';
import { PianoScene } from './PianoScene/PianoScene';


export const PianoComposition = ({data, introTime, style}) => {
    return (
        <ThemeProvider theme={theme}>
            <Sequence from={introTime} durationInFrames={Infinity} name="Notes">
                <DropNotes delay={introTime} data = {data}/>
            </Sequence>
            <Sequence from={0} durationInFrames={Infinity} name="Piano">
                <PianoScene delay={introTime} data = {data} delay = {introTime}/>
            </Sequence>
        </ThemeProvider>
    );
};

