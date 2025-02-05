import React from 'react';
import styled from 'styled-components';
import { Color } from '@styles';
import { Video1, Video2, KUBook } from '@img';

const Container = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const HeaderContainer = styled.header`
	height: 6rem;
	width: 85%;
	align-self: center;
`;

const Title = styled.h1`
	font-size: 4em;
	font-weight: bold;
	text-align: left;
	color: ${Color.GREEN};
`;
const ContentsContainer = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-self: center;
	align-items: center;
	flex-grow: 1;
	padding-bottom: 10rem;
`;

const Step = styled.h2`
	font-size: 2rem;
	font-weight: 800;
	margin-bottom: 1rem;
	color: ${Color.TEXT_BLACK};
`;

const StepTitle = styled.div`
	font-size: 1.3rem;
	font-weight: 500;
	margin-top: 0px;
	margin-bottom: 1rem;
	color: ${Color.TEXT_BLACK};
	text-align: center;
`;

const StepContent = styled.h3`
	font-size: 1.2rem;
	font-weight: 500;
	margin-bottom: 1rem;
	margin-top: 1rem;
	color: ${Color.TEXT_BLACK};
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

const FeaturesContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	padding: 1rem;
	width: 70%;
	max-width: none;
	box-sizing: border-box;
`;

const FeatureItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const KuImage = styled.img`
	width: 80px;
	margin: 5px;
	margin-right: 10px;
`;

function HowToUseContents() {
	return (
		<Container>
			<HeaderContainer>
				<Title>KUMAP 사용법</Title>
			</HeaderContainer>
			<ContentsContainer>
				<Step>Step 1.</Step>
				<StepTitle>관심 있는 직군을 선택해보세요!</StepTitle>
				<FeaturesContainer>
					<FeatureItems>
						<IllustrationVideo src={Video1} alt="소개 영상 1" />
					</FeatureItems>
					<FeatureItems>
						<IllustrationVideo src={Video2} alt="소개 영상 2" />
					</FeatureItems>
				</FeaturesContainer>

				<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0rem' }}>
					<StepContent>💡 중요 Tip! 직군은 언제든지 바꿀 수 있답니다.</StepContent>
					<KuImage src={KUBook} alt="책을 든 쿠" />
				</div>
			</ContentsContainer>
		</Container>
	);
}

export default HowToUseContents;
