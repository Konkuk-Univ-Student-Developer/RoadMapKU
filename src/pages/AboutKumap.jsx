import React from 'react';
import styled from 'styled-components';
import MainContainer from '../components/MainContainer';
import AboutKumapContents from '../components/AboutKumapContents/AboutKumapContents';
import AboutCompetencyContents from '../components/AboutKumapContents/AboutCompetencyContents';
import ConclusionContents from '../components/AboutKumapContents/ConclusionContents';
import LinkContents from '../components/AboutKumapContents/LinkContents';
import BackgroundContents from '../components/AboutKumapContents/BackgroundContents';
import Footer from '../components/Footer/Footer';

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

const ContentsContainer = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;
`;

const SubContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const LastContainer = styled.div`
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	z-index: 3;
`;

const AboutKumap = () => {
	return (
		<MainContainer>
			<Container>
				<BackgroundContents />
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
