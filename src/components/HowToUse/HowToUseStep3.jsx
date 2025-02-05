import React from 'react';
import styled from 'styled-components';
import { Video4, KUBook } from '@img';

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: auto;
	z-index: 1;
`;

const SubContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Section = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	flex-grow: 1;
	background-color: aqua;
`;

const Step = styled.h2`
	font-size: 2rem;
	font-weight: 800;
	margin-bottom: 1rem;
	color: black;
	line-height: 1.5;
`;

const StepTitle = styled.div`
	font-size: 1.5rem;
	font-weight: 500;
	margin-top: 0px;
	margin-bottom: 1rem;
	color: black;
	line-height: 1.5;
`;

const StepTitle3 = styled.h3`
	font-size: 1.2rem;
	font-weight: 500;
	margin-bottom: 1rem;
	margin-top: 1rem;
	color: black;
	line-height: 1.5;
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
			<SubContainer>
				<Section>
					<Step>Step 3.</Step>
					<StepTitle>관심 있는 교과목을 선택하고 내 로드맵에 추가해보세요!</StepTitle>

					<FeatureItem>
						<IllustrationVideo src={Video4} alt="소개 영상 4" />
					</FeatureItem>

					<StepContainer>
						<StepTitle3>
							각 수업 옆 버튼을 누르면 수업 상세정보를 볼 수 있고,
							<br />
							해당 교과목을 내 로드맵에 추가할 수 있습니다.
						</StepTitle3>
						<KuImage src={KUBook} alt="책 든 쿠" style={{ width: '100px', margin: '5px' }} />
					</StepContainer>
				</Section>
			</SubContainer>
		</Container>
	);
}

export default HowToUseContents;
