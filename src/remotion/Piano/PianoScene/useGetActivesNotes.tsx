import { useCurrentFrame, useVideoConfig } from 'remotion';

const getActivesNotesAtFrame = (curentTime, typedMidiData) => {
    const activeNotes = {};
    Object.keys(typedMidiData).forEach((midiNumber) => {
        typedMidiData[midiNumber].map((_note, _id) => {
            if(curentTime >= _note.start && curentTime <= _note.stop  ){
                 activeNotes[midiNumber] = _note;
            }
        });
    });
    return activeNotes;
};

export const useGetActivesNotes = (data, delay) => {
    const frame = useCurrentFrame();
    const {fps} = useVideoConfig();
    return getActivesNotesAtFrame(frame/fps - delay, data);
};
