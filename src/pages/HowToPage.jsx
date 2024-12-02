import styled from 'styled-components';
import MainContainer from '../components/MainContainer';
import HowTo from '../components/HowToPageContents/HowTo';
import BackgroundContents from '../components/HowToPageContents/BackgroundContents';

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

function HowToPage() {
	return (
		<MainContainer>
			<Container>
				<BackgroundContents />
				<HowTo />
			</Container>
		</MainContainer>
	);
}

export default HowToPage;
