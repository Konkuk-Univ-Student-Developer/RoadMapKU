import styled from 'styled-components';
import { fadeIn } from '../../../style/Frames';
import CircleStyle from '../../../style/CircleStyle';

const BackgroundContainer = styled.div`
	opacity: 0;
	animation: ${fadeIn} 0.5s ease-in-out forwards;
	z-index: 0;
`;

function HomeBackgroundContents() {
	return (
		<BackgroundContainer>
			<CircleStyle color={'rgba(232, 247, 238, 0.7)'} size={'25rem'} top={'3rem'} left={'74%'} time={'7'} zIndex={0} />
			<CircleStyle
				color={'rgba(214, 239, 224, 0.6)'}
				size={'100rem'}
				top={'35rem'}
				left={'-20%'}
				time={'10'}
				zIndex={0}
			/>
		</BackgroundContainer>
	);
}

export default HomeBackgroundContents;
