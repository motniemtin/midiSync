import {Composition} from 'remotion';
import {AlphaTab} from './AlphaTab';

// Each <Composition> is an entry in the sidebar!
import Emitter from "./Proton/Emitter";
export const RemotionRoot = () => {
	return (
		<>
			<Composition
				// You can take the "id" to render a video:
				// npx remotion render src/index.jsx <id> out/video.mp4
				id="AlphaTab"
				component={AlphaTab}
				durationInFrames={900}
				fps={30}
				width={1920}
				height={1080}
				// You can override these props for each render:
				// https://www.remotion.dev/docs/parametrized-rendering
				defaultProps={{
					title: 'Welcome to Remotion',
					author: 'Remotion',
				}}
			/>
			
		</>
	);
};
