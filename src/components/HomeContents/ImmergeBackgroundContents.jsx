import styled from 'styled-components';
import { fadeIn } from '../../style/Frames';
import CircleStyle from '../../style/CircleStyle';

const BackgroundContainer = styled.div`
	opacity: 0;
	animation: ${fadeIn} 0.5s ease-in-out forwards;
	z-index: 1;
`;

function ImmergeBackgroundContents() {
	return (
		<BackgroundContainer>
			<CircleStyle color={'rgba(234, 247, 239, 0.8)'} size={'50rem'} top={'-30%'} left={'-15%'} time={'8'} zIndex={2} />
			<CircleStyle color={'rgba(237, 248, 241, 0.7)'} size={'16rem'} top={'22%'} left={'25%'} time={'6'} zIndex={1} />
			<CircleStyle color={'rgba(214, 239, 224, 0.6)'} size={'10rem'} top={'30%'} left={'32%'} time={'5'} zIndex={1} />
			<CircleStyle color={'rgba(221, 242, 229, 0.8)'} size={'6rem'} top={'25%'} left={'70%'} time={'4'} zIndex={1} />
		</BackgroundContainer>
	);
}

export default ImmergeBackgroundContents;
