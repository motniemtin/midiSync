import { useAudioData,  visualizeAudio } from "@remotion/media-utils";
import {
  useCurrentFrame, useVideoConfig, interpolateColors
} from "remotion";

export const Background = () => {
    const frame = useCurrentFrame();
    const { durationInFrames, fps } = useVideoConfig();
    
    const color = interpolateColors(
      frame,
      [0, durationInFrames],
      ["rgba(101,0,94,1)", "rgb(255, 255, 0)"]
    );
    const color1 = interpolateColors(
      frame,
      [0, durationInFrames],
      ["rgb(255, 255, 0)", "rgb(255, 0, 0)"]
    );
    return (
        <div style={{width: '100%', height: '100%', background: 'linear-gradient(129deg, rgba(58,106,180,1) 0%, rgba(149,29,253,1) 50%, rgba(252,69,186,1) 100%)'}}>
        </div>
    );
};