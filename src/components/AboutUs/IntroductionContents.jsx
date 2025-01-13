import styled from 'styled-components';
import { IntroductionTitleContent, IntroductionProfileContents } from '@AboutUs';
import { Footer } from '@Common';

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
