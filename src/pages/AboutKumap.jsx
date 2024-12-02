import React, { useEffect } from 'react';
import styled from 'styled-components';
import MainContainer from '../components/MainContainer';
import AboutKumapContents from '../components/AboutKumapContents/AboutKumapContents';
import AboutCompetencyContents from '../components/AboutKumapContents/AboutCompetencyContents';
import ConclusionContents from '../components/AboutKumapContents/ConclusionContents';
import LinkContents from '../components/AboutKumapContents/LinkContents';
import BackgroundContents from '../components/HomeContents/BackgroundContents';
import ImmergeBackgroundContents from '../components/HomeContents/ImmergeBackgroundContents';
import Footer from '../components/Footer/Footer';

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	overflow: hidden;
`;

const ContentsContainer = styled.div`
	width: 100%;
	height: 100vh;
	overflow-y: auto;
`;

const SubContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const LastContainer = styled.div`
	width: 100%;
	height: 85vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 3;
`;

const AboutKumap = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<MainContainer>
			<Container>
				<BackgroundContents />
				<ImmergeBackgroundContents />
				<ContentsContainer>
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
				</ContentsContainer>
			</Container>
		</MainContainer>
	);
};

export default AboutKumap;
