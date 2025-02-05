import React from 'react';
import styled from 'styled-components';
import { Video3, KUSearch2 } from '@img';

const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const ContentsContainer = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-self: center;
	align-items: center;
	flex-grow: 1;
`;

const Step = styled.h2`
	font-size: 2rem;
	font-weight: 800;
	margin-bottom: 1rem;
	color: black;
`;

const StepTitle = styled.div`
	font-size: 1.3rem;
	font-weight: 500;
	margin-top: 0px;
	margin-bottom: 1rem;
	color: black;
	text-align: center;
`;

const StepContent = styled.h3`
	font-size: 1.2rem;
	font-weight: 500;
	margin-bottom: 1rem;
	margin-top: 1rem;
	color: black;
	line-height: 1.5;
	text-align: center;
`;

const IllustrationVideo = styled.video.attrs({
	autoPlay: true,
	loop: true,
	muted: true
})`
	width: 100%;
	height: auto;
	border-radius: 0.4rem;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const FeatureItem = styled.div`
	width: 40%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const KuImage = styled.img`
	width: 100px;
	margin: 5px;
	margin-right: 10px;
`;

const StepContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

function HowToUseContents() {
	return (
		<Container>
			<ContentsContainer>
				<Step>Step 2.</Step>
				<StepTitle>검색 창에서 직군을 확인하고 관련 학과 중 관심 있는 학과를 클릭해보세요!</StepTitle>

				<FeatureItem>
					<IllustrationVideo src={Video3} alt="소개 영상 3" />
				</FeatureItem>

				<StepContainer>
					<KuImage src={KUSearch2} alt="돋보기 쿠" />
					<StepContent>
						각 전공 역량을 클릭하면 해당
						<br /> 전공 역량을 포함한 수업을 확인할 수 있습니다.
					</StepContent>
				</StepContainer>
			</ContentsContainer>
		</Container>
	);
}

export default HowToUseContents;
