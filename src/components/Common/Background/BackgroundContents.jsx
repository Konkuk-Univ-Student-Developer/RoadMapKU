import styled from 'styled-components';
import { fadeIn } from '../../../style/Frames';
import CircleStyle from '../../../style/CircleStyle';

const BackgroundContainer = styled.div`
	opacity: 0;
	animation: ${fadeIn} 0.5s ease-in-out forwards;
	z-index: -1;
`;

function BackgroundContents() {
	return (
		<BackgroundContainer>
			<CircleStyle
				color={'rgba(234, 247, 239, 0.8)'}
				size={'50rem'}
				top={'-21rem'}
				left={'-18%'}
				time={'8'}
				zIndex={-1}
			/>
			<CircleStyle
				color={'rgba(237, 248, 241, 0.7)'}
				size={'16rem'}
				top={'18rem'}
				left={'12%'}
				time={'6'}
				zIndex={-1}
			/>
			<CircleStyle
				color={'rgba(214, 239, 224, 0.6)'}
				size={'10rem'}
				top={'15rem'}
				left={'23%'}
				time={'5'}
				zIndex={-1}
			/>
			<CircleStyle color={'rgba(221, 242, 229, 0.8)'} size={'6rem'} top={'16rem'} left={'70%'} time={'4'} zIndex={-1} />
			<CircleStyle color={'rgba(232, 247, 238, 0.7)'} size={'25rem'} top={'3rem'} left={'74%'} time={'7'} zIndex={-1} />
		</BackgroundContainer>
	);
}

export default BackgroundContents;
