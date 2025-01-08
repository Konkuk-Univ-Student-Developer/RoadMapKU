import React from 'react';
import styled from 'styled-components';
import MainContainer from '../components/Common/MainContainer';
import AboutKumapContents from '../components/AboutKumapContents/AboutKumapContents';
import AboutCompetencyContents from '../components/AboutKumapContents/AboutCompetencyContents';
import ConclusionContents from '../components/AboutKumapContents/ConclusionContents';
import LinkContents from '../components/Common/LinkContents';
import BackgroundContents from '../components/Common/BackgroundContents/BackgroundContents';
import Footer from '../components/Common/Footer';

const ContentsContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	z-index: 1;
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
`;

const AboutKumap = () => {
	return (
		<MainContainer>
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
		</MainContainer>
	);
};

export default AboutKumap;
