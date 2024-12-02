import styled from 'styled-components';
import IntroductionTitleContent from './IntroductionTitleContent';
import IntroductionProfileContents from './IntroductionProfileContents';
import Footer from '../Footer/Footer';

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const LastContainer = styled.div`
	height: 85vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 3;
`;

const IntroductionContents = () => {
	return (
		<Container>
			<LastContainer>
				<IntroductionTitleContent />
				<IntroductionProfileContents />
			</LastContainer>
			<Footer />
		</Container>
	);
};

export default IntroductionContents;
