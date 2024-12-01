import React, { useEffect } from 'react';
import styled from 'styled-components';
import AboutKumapContents from '../components/AboutKumapContents/AboutKumapContents';
import AboutCompetencyContents from '../components/AboutKumapContents/AboutCompetencyContents';
import ConclusionContents from '../components/AboutKumapContents/ConclusionContents';
import LinkContents from '../components/AboutKumapContents/LinkContents';
import Footer from '../components/Footer/Footer';
import { Header, SectionsContainer } from 'react-fullpage';
import HeaderBar from '../components/HeaderBar';
import { fullPageOptions } from './AboutUs';

const SubContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: stretch;
`;

const LastContainer = styled.div`
	height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white;
`;

const AboutKumap = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<Header>
				<HeaderBar />
			</Header>
			<SectionsContainer {...fullPageOptions}>
				<SubContainer>
					<AboutKumapContents />
				</SubContainer>
				<SubContainer>
					<AboutCompetencyContents />
				</SubContainer>
				<SubContainer>
					<LastContainer>
						<ConclusionContents />
						<LinkContents />
					</LastContainer>
					<Footer />
				</SubContainer>
			</SectionsContainer>
		</>
	);
};

export default AboutKumap;
