import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import {
  useCurrentFrame,
  useVideoConfig,
  Audio,
  AbsoluteFill,
} from "remotion";
import { Ellipse } from "@remotion/shapes";
import React from "react";
export const Visualization = React.memo(({audioData}) => {
    const frame = useCurrentFrame();
    const { durationInFrames, fps } = useVideoConfig();
    const numberOfSamples = 128;
    const location = {top: 750, left: 0, width: 1920, height: 150, position: 'absolute'}
    const barWidth = parseInt(location.width/numberOfSamples)/2;
    if (!audioData) {
        return null;
    }
    const frequencyData  = visualizeAudio({
        fps,
        frame,
        audioData,
        numberOfSamples: numberOfSamples,
    });
    // default scaling factors from the W3C spec for getByteFrequencyData
    const minDb = -100;
    const maxDb = -30;
     
    const amplitudes = frequencyData.map((value) => {
          // convert to decibels (will be in the range `-Infinity` to `0`)
          const db = 20 * Math.log10(value);
          const scaled = (db - minDb) / (maxDb - minDb);
          return scaled;
    });
    return (
        <div className="Visualization" style={{top: 0, left: 0, position: 'absolute', width: '100%', height: '100%'}}>
          <AbsoluteFill key="v1">
              {amplitudes && 
                <div style={{width: '100%', height: '100%', background: 'radial-gradient(circle, rgba(58,106,180, 1) 0%, rgba(149,29,253,1) 70%, rgba(252,69,186,1) 100%)', zIndex: -1}}>
                </div>
              }
          </AbsoluteFill>
          <AbsoluteFill  style={location}  key="v2">
              {amplitudes.map((v, index) => {
                return (
                  <div key={'iv-' + index}
                    style={{left: index*barWidth, display: 'inline-block', position: 'absolute', width: barWidth-1, height: v*70, backgroundColor: "#fb8c00bd", bottom: 0, borderRadius: 10}}
                  />
                );
              })}
              {amplitudes.reverse().map((v, index) => {
                return (
                  <div key={'iv-' + index}
                    style={{left: index*barWidth + location.width/2, display: 'inline-block', position: 'absolute', width: barWidth-1, height: v*70, backgroundColor: "#fb8c00bd", bottom: 0, borderRadius: 10}}
                  />
                );
              })}
          </AbsoluteFill>
        </div>
    );
});