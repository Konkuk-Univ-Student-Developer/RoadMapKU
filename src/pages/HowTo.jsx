import React from 'react';
import styled from 'styled-components';
import competencydetail from '../img/competencydetail.png';
import detail from '../img/detail.png';
import jobchoice from '../img/jobchoice.png';
import myroadmap from '../img/myroadmap.png';
import majorchoice from '../img/majorchoice.png';
import Footer from '../components/Footer/Footer';

const Container = styled.div`
	background-color: white;
`;

const SubContainer = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white;
`;

const SubContainerWhite = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white;
`;

const LastContainer = styled.div`
	height: 80vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white;
`;

const HeaderContainer = styled.header`
	width: fit-content;
	align-self: flex-start;
	padding-top: 12vh;
	text-align: center;
	margin-bottom: 0px;
`;

const Title = styled.h1`
	font-size: 3.5rem;
	ont-family: 'Pretendard-regular';
	font-weight: bold;
	text-align: left;
	padding-left: 11vh;
	color: #056a3f;
`;
const Section = styled.div`
	background-color: white;
	text-align: center;
	justify-content: center;
`;

const Step = styled.h2`
	font-size: 4.44vh;
	font-weight: 800;
	margin-bottom: 2.22vh;
	color: black;
	line-height: 1.5;
`;

const StepTitle = styled.div`
	font-size: 3.33vh;
	font-weight: 500;
	margin-top: 0px;
	margin-bottom: 2.22vh;
	color: black;
	line-height: 1.5;
`;

const StepTitle2 = styled.h3`
	font-size: 2.78vh;
	font-weight: 500;
	margin-bottom: 1vh;
	margin-top: 1vh;
	color: black;
	line-height: 1.5;
`;

const StepTitle3 = styled.h3`
	font-size: 2.22vh;
	font-weight: 500;
	margin-bottom: 1.11vh;
	margin-top: 2.22vh;
	color: black;
	line-height: 1.5;
`;

const SubTitle = styled.div`
	font-size: 3.33vh;
	font-weight: 500;
	color: black;
	line-height: 1.5;
	margin-bottom: 0.8vh;
	background-color: rgba(0, 0, 0, 0.1);
	padding: 1.11vh 22.22vh;
	border-radius: 0.56vh;
	display: inline-block;
	margin-top: 2vh;
`;

const Illustration = styled.img`
	width: 100%;
	height: auto;
	max-width: 66.67vh;
	border-radius: 0.56vh;
`;

const FeaturesContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 11.11%;
	background-color: white;
	padding: 2.22vh;
	width: 100%;
	max-width: none;
	box-sizing: border-box;
`;

const FeatureItem = styled.div`
	width: 35%;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`;

function HowTo() {
	return (
		<>
			<Container>
				<SubContainer>
					<HeaderContainer>
						<Title>KUMAP 사용법</Title>
					</HeaderContainer>
					<Section>
						<Step>Step 1.</Step>
						<StepTitle>관심 있는 직군을 선택해보세요!</StepTitle>
						<FeaturesContainer>
							<FeatureItem>
								<Illustration src="/img/dummy.gif" alt="Animated illustration" />
							</FeatureItem>
							<FeatureItem>
								<Illustration src={jobchoice} alt="Dropdown illustration" />
							</FeatureItem>
						</FeaturesContainer>

						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '1.5vh' }}>
							<StepTitle3>
								💡 중요 Tip! 왼쪽 사이드바의 &quot;직군 선택하기&quot; 버튼을 클릭하면 직군을 바꿀 수 있답니다.
							</StepTitle3>
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

						<Illustration src={majorchoice} alt="FieldSearchBar illustration" />
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '1.5vh' }}>
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

						<Illustration src={myroadmap} alt="Roadmap illustration" />
						<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '1.5vh' }}>
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

				<SubContainerWhite>
					<LastContainer>
						<Section bgColor="#ffffff">
							<SubTitle>추가 기능</SubTitle>
							<FeaturesContainer>
								{/* 첫 번째 항목 */}
								<FeatureItem>
									<StepTitle2>상세정보 열람</StepTitle2>
									<Illustration src={competencydetail} alt="Competency Detail" />

									<StepTitle3>수업을 클릭하면 해당 수업 정보와 수강바구니 경쟁률을 확인할 수 있습니다.</StepTitle3>
								</FeatureItem>

								{/* 두 번째 항목 */}
								<FeatureItem>
									<StepTitle2>사진 저장과 공유</StepTitle2>
									<Illustration src={detail} alt="Detail" />
									<StepTitle3>
										하단 사진 버튼을 클릭해 내 로드맵을 사진으로 저장할 수 있으며, URL로 공유도 가능합니다.
									</StepTitle3>
								</FeatureItem>
							</FeaturesContainer>
						</Section>
					</LastContainer>
					<Footer />
				</SubContainerWhite>
			</Container>
		</>
	);
}

export default HowTo;
