import React from 'react';
import styled from 'styled-components';

import { Footer } from '@Common';
import { Pic1, Pic2 } from '@img';

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

const LastContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
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

const StepTitle2 = styled.h3`
	font-size: 1.2rem;
	font-weight: 600;
	margin-bottom: 1rem;
	margin-top: 1rem;
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

const Illustration = styled.img`
	width: 100%;
	height: auto;
	max-width: 60%;
	margin-bottom: 1rem;
	border-radius: 0.4rem;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const FeaturesPictureContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	padding: 1rem;
	width: 100%;
	max-width: none;
	box-sizing: border-box;
`;

const FeaturePicture = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

function HowToUseContents() {
	return (
		<Container>
			<SubContainer>
				<LastContainer>
					<Section>
						<Step>추가 기능</Step>
						<FeaturesPictureContainer>
							<FeaturePicture>
								<StepTitle2>상세정보 열람</StepTitle2>
								<Illustration src={Pic1} alt="상세정보 소개" />

								<StepTitle3>수업을 클릭하면 해당 수업 정보와 수강바구니 경쟁률을 확인할 수 있습니다.</StepTitle3>
							</FeaturePicture>

							<FeaturePicture>
								<StepTitle2>사진 저장과 공유</StepTitle2>
								<Illustration src={Pic2} alt="공유기능 소개" />
								<StepTitle3>
									하단 사진 버튼을 클릭해 내 로드맵을 사진으로 저장할 수 있으며, URL로 공유도 가능합니다.
								</StepTitle3>
							</FeaturePicture>
						</FeaturesPictureContainer>
					</Section>
				</LastContainer>
				<Footer />
			</SubContainer>
		</Container>
	);
}

export default HowToUseContents;
