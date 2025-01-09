import React from 'react';
import styled from 'styled-components';
import MainContainer from '../components/Common/MainContainer';
import AboutKumapContents from '../components/AboutKumap/AboutKumapContents';
import AboutCompetencyContents from '../components/AboutKumap/AboutCompetencyContents';
import ConclusionContents from '../components/AboutKumap/ConclusionContents';
import LinkContents from '../components/Common/LinkContents';
import BackgroundContents from '../components/Common/Background/BackgroundContents';
import Footer from '../components/Common/Footer';

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
