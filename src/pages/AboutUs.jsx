import styled from 'styled-components';
import MainContainer from '../components/Common/MainContainer';
import AboutUsContents from '../components/AboutUsContents/AboutUsContens';
import LogoContents from '../components/AboutUsContents/LogoContents';
import IntroductionContents from '../components/AboutUsContents/IntroductionContents';
import BackgroundContents from '../components/BackgroundContents/BackgroundContents';

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

const ContentsContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	z-index: 1;
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
