import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import competencydetail from '../img/competencydetail.png';
import detail from '../img/detail.png';
import jobchoice from '../img/jobchoice.png';
import myroadmap from '../img/myroadmap.png';
import majorchoice from '../img/majorchoice.png';
import Footer from '../components/Footer/Footer';
import { Color } from '../style/Color';

const Container = styled.div`
	background-color: ${Color.GREEN};
`;

const HeaderContainer = styled.header`
	align-self: flex-start;
	padding-top: 100px;
	text-align: center;
	color: white;
`;

const SubContainerTitle = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
`;

const SubContainer = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
	height: 85vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white;
`;

const Title = styled.h1`
	font-size: 4em;
	font-weight: bold;
	text-align: left;
	padding-left: 100px;
`;

const Section = styled.section`
	background-color: ${(props) => props.bgColor || '#ffffff'};
	text-align: center;
`;

const Step = styled.h2`
	font-size: 40px;
	font-weight: 800;
	margin-bottom: 20px;
	color: ${(props) => props.color || '#ffffff'};
	line-height: 1.5;
`;

const StepTitle = styled.h3`
	font-size: 30px;
	font-weight: 500;
	margin-bottom: 20px;
	color: ${(props) => props.color || '#ffffff'};
	line-height: 1.5;
`;

const StepTitle2 = styled.h3`
	font-size: 25px;
	font-weight: 500;
	margin-bottom: 20px;
	margin-top: 30px;
	color: ${(props) => props.color || '#ffffff'};
	line-height: 1.5;
`;

const StepTitle3 = styled.h3`
	font-size: 15px;
	font-weight: 500;
	margin-bottom: 10px;
	margin-top: 10px;
	color: ${(props) => props.color || '#ffffff'};
	line-height: 1.5;
`;

const SubTitle = styled.h3`
	font-size: 30px;
	font-weight: 500;
	color: ${Color.BLACK};
	line-height: 1.5;
	background-color: rgba(3, 107, 63, 0.1); /* 배경색을 텍스트 색상의 10% 투명도로 설정 */
	padding: 10px 200px; /* 텍스트와 배경색 간의 간격을 위해 패딩 추가 */
	border-radius: 5px; /* 모서리를 둥글게 */
	display: inline-block;
	margin-top: 5rem;
`;
const Illustration = styled.img`
	width: auto; // 원본 비율 유지
	height: auto; //원본 비율 유지
	max-width: 600px;
	border-radius: 0.5rem;
`;

const FeaturesContainer = styled.section`
	//padding: 40px;
	background-color: #ffffff;
	display: flex;
	justify-content: center; /* 가로 정렬 */
	align-items: flex-start; /* 상단 정렬 */
`;

const FeatureItem = styled.div`
	//margin-bottom: 10px;
	display: flex;
	flex-direction: column;
	margin-left: 10px;
	margin-right: 10px;
`;

const LinkContainer = styled.div`
	gap: 25px;
	padding-top: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const LinkButton = styled.button`
	width: 400px;
	height: 100px;
	padding: 10px 20px;
	font-size: 30px;
	color: ${(props) => (props.option === 'white' ? Color.GREEN : 'white')};
	background-color: ${(props) => (props.option === 'white' ? '#eeeeee' : Color.GREEN)};
	border: none;
	border-radius: 20px;
	cursor: pointer;
	transition: 0.1s ease-in;
	&:hover {
		background-color: ${(props) => (props.option === 'white' ? '#d3d3d3' : '#02472a')};
	}
`;

function HowTo() {
	const navigate = useNavigate();
	return (
		<>
			<Container>
				<SubContainerTitle>
					<HeaderContainer>
						<Title>KUMAP 사용법</Title>
					</HeaderContainer>
					<Section bgColor={Color.GREEN}>
						<Step>Step 1.</Step>
						<StepTitle>관심 있는 직군을 선택해보세요!</StepTitle>
						<StepTitle3>
							💡 중요 Tip! 왼쪽 사이드바의 &quot;직군 선택하기&quot; 버튼을 클릭하면 직군을 바꿀 수 있답니다.
						</StepTitle3>
						<Illustration src={jobchoice} alt="Dropdown illustration" />
					</Section>
				</SubContainerTitle>

				<SubContainer>
					<Section bgColor={Color.GREEN}>
						<Step>Step 2.</Step>
						<StepTitle>
							왼쪽에 있는 사이드 바에서 직군을 확인하고
							<br /> 관련 학과 중 관심 있는 학과를 클릭해보세요!
						</StepTitle>
						<StepTitle3>
							💡 중요 Tip! 각 전공역량 옆 화살표를 클릭하면 해당 전공역량을 기를 수 있는 교과목을 확인할 수 있답니다.
						</StepTitle3>

						<Illustration src={majorchoice} alt="FieldSearchBar illustration" />
					</Section>
				</SubContainer>

				<SubContainer>
					<Section bgColor={Color.GREEN}>
						<Step>Step 3.</Step>
						<StepTitle>관심 있는 교과목을 선택하고 내 로드맵에 추가해보세요!</StepTitle>
						<StepTitle3>
							💡 중요 Tip! 각 교과목 옆 화살표를 클릭하면 해당 교과목을 내 로드맵에 담을 수 있답니다.
						</StepTitle3>

						<Illustration src={myroadmap} alt="Roadmap illustration" />
						<br />
						<br />
						<br />
						<StepTitle>🌟 나만의 로드맵을 완성시키고 공유해보세요! 🌟</StepTitle>
					</Section>
				</SubContainer>

				<SubContainerWhite>
					<LastContainer>
						<Section bgColor="#ffffff">
							<SubTitle>상세 정보 열람</SubTitle>
							<FeaturesContainer>
								<FeatureItem>
									<Illustration src={competencydetail} alt="" />
								</FeatureItem>
								<FeatureItem>
									<Illustration src={detail} alt="" />
								</FeatureItem>
							</FeaturesContainer>
							<StepTitle2 color="black">
								+ 궁금한 전공역량 / 교과목이 있다면 클릭해보세요! <br />
								해당 전공역량 / 교과목의 상세정보를 확인할 수 있답니다.
							</StepTitle2>
							<LinkContainer>
								<LinkButton onClick={() => navigate('/road-map')} option={'green'}>
									KUMAP 바로가기
								</LinkButton>
							</LinkContainer>
						</Section>
					</LastContainer>
					<Footer />
				</SubContainerWhite>
			</Container>
		</>
	);
}

export default HowTo;
