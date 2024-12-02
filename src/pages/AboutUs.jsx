import styled from 'styled-components';
import MainContainer from '../components/MainContainer';
import AboutUsContents from '../components/AboutUsContents/AboutUsContens';
import LogoContents from '../components/AboutUsContents/LogoContents';
import IntroductionContents from '../components/AboutUsContents/IntroductionContents';
import BackgroundContents from '../components/AboutUsContents/BackgroundContents';

const Container = styled.div`
	position: relative;
	width: 100%;
	overflow: hidden;
`;

const ContentsContainer = styled.div`
	width: 100%;
`;

const AboutUs = () => {
	return (
		<MainContainer>
			<Container>
				<BackgroundContents />
				<ContentsContainer>
					<LogoContents />
					<AboutUsContents />
					<IntroductionContents />
				</ContentsContainer>
			</Container>
		</MainContainer>
	);
};

export default AboutUs;
