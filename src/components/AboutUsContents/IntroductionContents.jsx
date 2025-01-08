import styled from 'styled-components';
import IntroductionTitleContent from './IntroductionTitleContent';
import IntroductionProfileContents from './IntroductionProfileContents';
import Footer from '../Common/Footer';

const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const IntroductionContents = () => {
	return (
		<Container>
			<IntroductionTitleContent />
			<IntroductionProfileContents />
			<Footer />
		</Container>
	);
};

export default IntroductionContents;
