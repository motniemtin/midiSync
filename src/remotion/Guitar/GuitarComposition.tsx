import './guitar.css';
import { FunctionComponent } from 'react';
import { AbsoluteFill, useVideoConfig, Sequence, useCurrentFrame } from 'remotion';

export const GuitarComposition = ({data, introTime, guitarLocation}) => {
    const { width } = useVideoConfig();
    const { fps } = useVideoConfig();
    guitarLocation.position = 'absolute';
    return (
      <div className="GuitarComposition" style={guitarLocation}>
          <div className="guitar">
            <div className="head">
              <div className="peg-left">
                <div className="pegs peg-1" />
                <div className="pegs peg-2" />
                <div className="pegs peg-3" />
              </div>
              <div className="peg-right">
                <div className="pegs peg-4" />
                <div className="pegs peg-5" />
                <div className="pegs peg-6" />
              </div>
            </div>
            <div className="neck">
              <div className="fret  fret-1">
                 <div className="dot-1">Am</div>
                 <div className="dot-2">Am</div>
                 <div className="dot-3">Am</div>
                 <div className="dot-4">Am</div>
                 <div className="dot-5">Am</div>
                 <div className="dot-6">Am</div>
              </div>
              <div className="fret  fret-2" />
              <div className="fret  fret-3  marker" />
              <div className="fret  fret-4" />
              <div className="fret  fret-5  marker" />
              <div className="fret  fret-6" />
              <div className="fret  fret-7  marker" />
              <div className="fret  fret-8" />
              <div className="fret  fret-9  marker" />
              <div className="fret  fret-10" />
              <div className="fret  fret-11" />
              <div className="fret  fret-12  double-marker" />
              <div className="fret  fret-13" />
              <div className="fret  fret-14" />
              <div className="fret  fret-15  marker" />
              <div className="fret  fret-16" />
              <div className="fret  fret-17  marker" />
              <div className="fret  fret-18" />
              <div className="fret  fret-19  marker" />
              <div className="fret  fret-20" />
            </div>
            <div className="body">
              <div className="sound-hole" />
              <div className="pick-guard" />
              <div className="sadle">
                <div className="bridge" />
              </div>
            </div>
            <div className="strings">
              <div className="string string-1" />
              <div className="string string-2" />
              <div className="string string-3" />
              <div className="string string-4" />
              <div className="string string-5" />
              <div className="string string-6" />
            </div>
          </div>
        </div>
    );
};