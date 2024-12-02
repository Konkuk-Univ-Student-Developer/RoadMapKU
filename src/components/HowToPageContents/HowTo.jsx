import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer/Footer';

const Container = styled.div`
	width: 100%;
	height: 100%;
	overflow: auto;
`;

const SubContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const LastContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const HeaderContainer = styled.header`
	width: fit-content;
	align-self: flex-start;
	padding-top: 50px;
	text-align: center;
`;

const Title = styled.h1`
	font-size: 4em;
	font-weight: bold;
	text-align: left;
	padding-left: 100px;
	color: #056a3f;
`;
const Section = styled.div`
	width: 80%;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
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

const SubTitle = styled.div`
	width: 20rem;
	margin-top: 10%;
	font-size: 2rem;
	font-weight: 600;
	color: black;
	line-height: 1.5;
	margin-bottom: 1rem;
	background-color: rgba(214, 239, 224, 0.6);
	padding: 1rem;
	border-radius: 0.5rem;
	display: inline-block;
`;

const Illustration = styled.img`
	width: 100%;
	height: auto;
	max-width: 60%;
	margin-bottom: 1rem;
	border-radius: 0.2rem;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
`;

const IllustrationVideo = styled.video.attrs({
	autoPlay: true,
	loop: true,
	muted: true
})`
	width: 100%;
	height: auto;
	border-radius: 0.2rem;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
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
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const FeatureItem = styled.div`
	width: 40%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
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

function HowTo() {
	return (
		<Container>
			<SubContainer>
				<HeaderContainer>
					<Title>KUMAP 사용법</Title>
				</HeaderContainer>
				<Section>
					<Step>Step 1.</Step>
					<StepTitle>관심 있는 직군을 선택해보세요!</StepTitle>
					<FeaturesContainer>
						<FeatureItems>
							<IllustrationVideo src="/img/video1.mp4" alt="Animated illustration" />
						</FeatureItems>
						<FeatureItems>
							<IllustrationVideo src="/img/video2.mp4" alt="Animated illustration" />
						</FeatureItems>
					</FeaturesContainer>

					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0rem' }}>
						<StepTitle3>💡 중요 Tip! 직군은 언제든지 바꿀 수 있답니다.</StepTitle3>
						<img src="./img/KU1.png" alt="황소" style={{ width: '100px', margin: '10px', marginLeft: '10px' }} />
					</div>
				</Section>
			</SubContainer>

			<SubContainer>
				<Section>
					<Step>Step 2.</Step>
					<StepTitle>
						검색 창에서 직군을 확인하고
						<br /> 관련 학과 중 관심 있는 학과를 클릭해보세요!
					</StepTitle>

					<FeatureItem>
						<IllustrationVideo src="/img/video3.mp4" alt="Animated illustration" />
					</FeatureItem>

					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0rem' }}>
						<img src="./img/KU2.png" alt="황소" style={{ width: '100px', margin: '5px', marginRight: '10px' }} />
						<StepTitle3>
							각 전공 역량을 클릭하면 해당
							<br /> 전공 역량을 포함한 수업을 확인할 수 있습니다.
						</StepTitle3>
					</div>
				</Section>
			</SubContainer>

			<SubContainer>
				<Section>
					<Step>Step 3.</Step>
					<StepTitle>관심 있는 교과목을 선택하고 내 로드맵에 추가해보세요!</StepTitle>

					<FeatureItem>
						<IllustrationVideo src="/img/video4.mp4" alt="Animated illustration" />
					</FeatureItem>

					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0rem' }}>
						<StepTitle3>
							각 수업 옆 버튼을 누르면 수업 상세정보를 볼 수 있고,
							<br />
							해당 교과목을 내 로드맵에 추가할 수 있습니다.
						</StepTitle3>
						<img src="./img/KU1.png" alt="황소" style={{ width: '100px', margin: '5px' }} />
					</div>
					<br />
					<br />
					<br />
				</Section>
			</SubContainer>

			<SubContainer>
				<LastContainer>
					<Section>
						<SubTitle>추가 기능</SubTitle>
						<FeaturesPictureContainer>
							{/* 첫 번째 항목 */}
							<FeaturePicture>
								<StepTitle2>상세정보 열람</StepTitle2>
								<Illustration src="/img/pic1.png" alt="Competency Detail" />

								<StepTitle3>수업을 클릭하면 해당 수업 정보와 수강바구니 경쟁률을 확인할 수 있습니다.</StepTitle3>
							</FeaturePicture>

							{/* 두 번째 항목 */}
							<FeaturePicture>
								<StepTitle2>사진 저장과 공유</StepTitle2>
								<Illustration src="/img/pic2.png" alt="Detail" />
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

export default HowTo;
