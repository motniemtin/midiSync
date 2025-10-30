import { FunctionComponent } from 'react';
import { AbsoluteFill, useVideoConfig, Sequence, useCurrentFrame } from 'remotion';
import styled from 'styled-components';
import { useTitleInfo } from './useTitleInfo';
import { useTranslate } from './useTranslate';

import * as Lato from "@remotion/google-fonts/Lato";
Lato.loadFont();
export const LogoScene = () => {
    const { width } = useVideoConfig();
    const { fps } = useVideoConfig();
    const marginBottom = width * 0.1;
    const frame = useCurrentFrame();    
    const translateX = useTranslate({ from: 0, to: 0, startAtFrame: fps });
    const translateY = useTranslate({ from: 620, to: 800, startAtFrame: fps });
    const scale = useTranslate({ from: 1, to: 0.6, startAtFrame: fps * 0.95 });
    const opacity = useTranslate({ from: 1, to: 0, startAtFrame: fps});
    const opacity2 = useTranslate({ from: 1, to: 0.1, startAtFrame: fps});
    return (
        <Container $marginBottom={marginBottom} $scale={scale}>
            <TextContainer $translateX={translateX} $translateY={translateY}>
                <Title as="h1" $opacity={opacity2}>https://guitarsheetmusic.org/</Title>
                <Author as="h2" $opacity={opacity}>free sheet music sharing flatform</Author>
            </TextContainer>
        </Container>
    );
};

const Container = styled(AbsoluteFill)`
    padding-bottom: ${({ $marginBottom }) => $marginBottom}px;
    transform: ${({ $scale }) => `scale(${$scale})`};
`;

const TextContainer = styled.div`
    position: absolute;
    left: ${({ $translateX }) => $translateX}px;
    top: ${({ $translateY }) => $translateY}px;
    width: 100%;
    height: 100%;
    z-index: -1;
    font-family: Lato;
`;

const BaseText = styled.span`
    color: red;
    font-size: 10px;
    text-align: center;
`;

const Title = styled(BaseText)`
	 color: #4290f5;
     font-size: calc(0.4em + 6vw);
     font-weight: 700;
     text-shadow: -0.0075em 0.0075em 0 #3ac8da;
     text-align: center;
     margin: 5px;
     opacity: ${({ $opacity }) => $opacity};
`;
const Author = styled(BaseText)`
	 color: #4290f5;
	 font-size: calc(0.4em + 2vw);
	 font-weight: 500;
	 text-shadow: -0.0075em 0.0075em 0 #3ac8da;
	 opacity: ${({ $opacity }) => $opacity};
	 margin: 2px;
`;
