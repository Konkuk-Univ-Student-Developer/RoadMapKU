import styled from 'styled-components';
import { CircleStyle, fadeIn } from '@styles';

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
				size={'40vw'}
				top={'-34vh'}
				left={'-15vw'}
				time={'8'}
				zIndex={2}
			/>
			<CircleStyle color={'rgba(237, 248, 241, 0.7)'} size={'15vw'} top={'30vh'} left={'12%'} time={'6'} zIndex={-1} />
			<CircleStyle color={'rgba(214, 239, 224, 0.6)'} size={'9vw'} top={'25vh'} left={'23%'} time={'5'} zIndex={-1} />
			<CircleStyle color={'rgba(221, 242, 229, 0.8)'} size={'6vw'} top={'28vh'} left={'70vw'} time={'4'} zIndex={1} />
			<CircleStyle color={'rgba(232, 247, 238, 0.7)'} size={'23vw'} top={'3vh'} left={'74vw'} time={'7'} zIndex={0} />
		</BackgroundContainer>
	);
}

export default BackgroundContents;
