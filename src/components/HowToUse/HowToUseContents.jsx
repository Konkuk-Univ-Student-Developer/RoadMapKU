import React from 'react';
import styled from 'styled-components';
import Footer from '../Common/Footer';
import video1 from '../../img/video1.mp4';
import video2 from '../../img/video2.mp4';
import video3 from '../../img/video3.mp4';
import video4 from '../../img/video4.mp4';
import kuBook from '../../img/KUBook.png';
import kuSearch2 from '../../img/KUSearch2.png';
import picImage1 from '../../img/Pic1.png';
import picImage2 from '../../img/Pic2.png';
import { Color } from '../../style/Color';

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: auto;
	z-index: 1;
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
	color: ${Color.GREEN};
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
	margin-top: 5%;
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
	border-radius: 0.4rem;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
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
				<HeaderContainer>
					<Title>KUMAP 사용법</Title>
				</HeaderContainer>
				<Section>
					<Step>Step 1.</Step>
					<StepTitle>관심 있는 직군을 선택해보세요!</StepTitle>
					<FeaturesContainer>
						<FeatureItems>
							<IllustrationVideo src={video1} alt="소개 영상 1" />
						</FeatureItems>
						<FeatureItems>
							<IllustrationVideo src={video2} alt="소개 영상 2" />
						</FeatureItems>
					</FeaturesContainer>

					<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0rem' }}>
						<StepTitle3>💡 중요 Tip! 직군은 언제든지 바꿀 수 있답니다.</StepTitle3>
						<KuImage src={kuBook} alt="책을 든 쿠" />
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
						<IllustrationVideo src={video3} alt="소개 영상 3" />
					</FeatureItem>

					<StepContainer>
						<KuImage src={kuSearch2} alt="돋보기 쿠" />
						<StepTitle3>
							각 전공 역량을 클릭하면 해당
							<br /> 전공 역량을 포함한 수업을 확인할 수 있습니다.
						</StepTitle3>
					</StepContainer>
				</Section>
			</SubContainer>

			<SubContainer>
				<Section>
					<Step>Step 3.</Step>
					<StepTitle>관심 있는 교과목을 선택하고 내 로드맵에 추가해보세요!</StepTitle>

					<FeatureItem>
						<IllustrationVideo src={video4} alt="소개 영상 4" />
					</FeatureItem>

					<StepContainer>
						<StepTitle3>
							각 수업 옆 버튼을 누르면 수업 상세정보를 볼 수 있고,
							<br />
							해당 교과목을 내 로드맵에 추가할 수 있습니다.
						</StepTitle3>
						<KuImage src={kuBook} alt="책 든 쿠" style={{ width: '100px', margin: '5px' }} />
					</StepContainer>
				</Section>
			</SubContainer>

			<SubContainer>
				<LastContainer>
					<Section>
						<SubTitle>추가 기능</SubTitle>
						<FeaturesPictureContainer>
							<FeaturePicture>
								<StepTitle2>상세정보 열람</StepTitle2>
								<Illustration src={picImage1} alt="상세정보 소개" />

								<StepTitle3>수업을 클릭하면 해당 수업 정보와 수강바구니 경쟁률을 확인할 수 있습니다.</StepTitle3>
							</FeaturePicture>

							<FeaturePicture>
								<StepTitle2>사진 저장과 공유</StepTitle2>
								<Illustration src={picImage2} alt="공유기능 소개" />
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
