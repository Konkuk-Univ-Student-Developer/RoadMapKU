import styled from 'styled-components';
import { MainContainer } from '@Common';
import { BackgroundContents } from '@Background';
import { LogoContents, IntroductionContents, AboutUsContents } from '@AboutUs';

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
