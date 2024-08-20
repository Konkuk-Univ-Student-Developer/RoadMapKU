import styled from 'styled-components';
import AboutUsContents from '../components/AboutUsContents/AboutUsContens';
import LogoContents from '../components/AboutUsContents/LogoContents';
import MainContainer from '../components/MainContainer';

const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 70px;
`;

const AboutUs = () => {
	return (
		<MainContainer>
			<SubContainer>
				<LogoContents />
				<AboutUsContents />
			</SubContainer>
		</MainContainer>
	);
};

export default AboutUs;
