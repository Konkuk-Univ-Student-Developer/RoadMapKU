import React from 'react';
import styled from 'styled-components';
import { MainContainer, LinkContents, Footer } from '@Common';
import { BackgroundContents } from '@Background';
import { AboutKumapContents, AboutCompetencyContents, ConclusionContents } from '@AboutKumap';

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
