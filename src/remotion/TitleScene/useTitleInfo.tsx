import musicData from '../api/input.json';

export const useTitleInfo = () => {
    return {
        title: musicData.title,
        author: musicData.author,
        midiCreator: musicData.midiCreator,
    };
};
