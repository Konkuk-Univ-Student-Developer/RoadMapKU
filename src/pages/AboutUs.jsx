import styled from 'styled-components';
import MainContainer from '../components/Common/MainContainer';
import LogoContents from '../components/AboutUs/LogoContents';
import IntroductionContents from '../components/AboutUs/IntroductionContents';
import BackgroundContents from '../components/Common/Background/BackgroundContents';
import AboutUsContents from '../components/AboutUs/AboutUsContents';

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
