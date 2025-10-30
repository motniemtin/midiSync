import { spring } from "remotion";
import { useRef, useState, useEffect, useCallback } from "react";
import {
  AbsoluteFill,
  useCurrentFrame,
} from "remotion";

//import Particles from "./Particles";

export const Emitter = () => {
    const frame = useCurrentFrame();
    const { durationInFrames, fps } = useVideoConfig();
    
    return (
      <AbsoluteFill>
            
      </AbsoluteFill>
    );
};
