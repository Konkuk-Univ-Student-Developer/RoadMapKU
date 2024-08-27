import AboutUsContents from '../components/AboutUsContents/AboutUsContens';
import LogoContents from '../components/AboutUsContents/LogoContents';
import IntroductionContents from '../components/AboutUsContents/IntroductionContents';
import { SectionsContainer, Header } from 'react-fullpage';
import HeaderBar from '../components/HeaderBar';

export const fullPageOptions = {
	sectionClassName: 'section',
	anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
	scrollBar: false,
	navigation: true,
	verticalAlign: false,
	sectionPaddingTop: '50px',
	sectionPaddingBottom: '50px',
	arrowNavigation: true
};

const AboutUs = () => {
	return (
		<>
			<Header>
				<HeaderBar />
			</Header>
			<SectionsContainer {...fullPageOptions}>
				<LogoContents />
				<AboutUsContents />
				<IntroductionContents />
			</SectionsContainer>
		</>
	);
};

export default AboutUs;
