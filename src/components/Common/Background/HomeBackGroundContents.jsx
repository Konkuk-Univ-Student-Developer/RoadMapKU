import styled from 'styled-components';
import { CircleStyle, fadeIn } from '@styles';

const BackgroundContainer = styled.div`
	opacity: 0;
	animation: ${fadeIn} 0.5s ease-in-out forwards;
	z-index: 0;
`;

function HomeBackgroundContents() {
	return (
		<BackgroundContainer>
			<CircleStyle color={'rgba(232, 247, 238, 0.7)'} size={'23vw'} top={'3vh'} left={'74vw'} time={'7'} zIndex={0} />
			<CircleStyle
				color={'rgba(214, 239, 224, 0.6)'}
				size={'90vw'}
				top={'65vh'}
				left={'-20vw'}
				time={'10'}
				zIndex={0}
			/>
		</BackgroundContainer>
	);
}

export default HomeBackgroundContents;
