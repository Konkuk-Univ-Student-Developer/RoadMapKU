import styled from 'styled-components';
import AboutUsContents from '../components/AboutUsContents/AboutUsContens';
import LogoContents from '../components/AboutUsContents/LogoContents';
import MainContainer from '../components/MainContainer';
import IntroductionContents from '../components/AboutUsContents/IntroductionContents';

const SubContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 70px;
	gap: 30px;
`;

const AboutUs = () => {
	return (
		<MainContainer>
			<SubContainer>
				<LogoContents />
				<AboutUsContents />
				<IntroductionContents />
			</SubContainer>
		</MainContainer>
	);
};

export default AboutUs;
