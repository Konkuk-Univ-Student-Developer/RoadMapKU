import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import competencydetail from '../img/competencydetail.png';
import detail from '../img/detail.png';
import jobchoice from '../img/jobchoice.png';
import myroadmap from '../img/myroadmap.png';
import majorchoice from '../img/majorchoice.png';
import Footer from '../components/Footer/Footer';

const Container = styled.div`
	font-family: 'Arial, sans-serif';
	//background-color: #e0f2f1;
	//color: #004d40;
`;

const HeaderContainer = styled.header`
	background-color: #036b3f;
	padding-top: 40px;
	padding-bottom: 10px; /* 패딩을 줄여 간격을 줄입니다 */
	text-align: center;
	color: white;
	margin-bottom: 0; /* 불필요한 마진을 제거 */
`;

const Title = styled.h1`
	font-size: 4em;
	font-weight: bold;
	text-align: left;
	padding-left: 100px;
`;

const Section = styled.section`
	padding: 30px;
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
const SubTitle = styled.h3`
	font-size: 30px;
	font-weight: 500;
	margin-bottom: 20px;
	color: black
	line-height: 1.5;
    background-color: rgba(3, 107, 63, 0.1); /* 배경색을 텍스트 색상의 10% 투명도로 설정 */
    padding: 10px 200px; /* 텍스트와 배경색 간의 간격을 위해 패딩 추가 */
    border-radius: 5px; /* 모서리를 둥글게 */
    display: inline-block;
`;
const Illustration = styled.img`
	width: auto; // 원본 비율 유지
	height: auto; //원본 비율 유지
	max-width: 600px;
	margin-top: 20px;
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
	display: flex;
	//margin-bottom: 10px;
	display: flex;
	flex-direction: column;
	margin-left: 10px;
	margin-right: 10px;
`;

const LinkContainer = styled.div`
	gap: 25px;
	height: 40vh;
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
	color: ${(props) => (props.option === 'white' ? '#036b3f' : 'white')};
	background-color: ${(props) => (props.option === 'white' ? '#eeeeee' : '#036b3f')};
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
				<HeaderContainer>
					<Title>How to Use?</Title>
				</HeaderContainer>

				<Section bgColor="#036B3F">
					<Step>Step 1.</Step>
					<StepTitle>관심 있는 직군을 선택해주세요</StepTitle>
					<Illustration src={jobchoice} alt="Dropdown illustration" />
				</Section>

				<Section bgColor="#036B3F">
					<Step>Step 2.</Step>
					<StepTitle>
						왼쪽에 있는 사이드 바에서 직군을 확인하고
						<br /> 관련 학과 중 관심 있는 학과를 클릭해주세요
					</StepTitle>

					<Illustration src={majorchoice} alt="Sidebar illustration" />
				</Section>

				<Section bgColor="#036B3F">
					<Step>Step 3.</Step>
					<StepTitle>관심 있는 과목을 클릭하여 내 로드맵에 추가해보세요!</StepTitle>

					<Illustration src={myroadmap} alt="Roadmap illustration" />
					<br />
					<br />
					<br />
					<br />
					<StepTitle>자신의 로드맵을 완성시키고 공유해보세요!</StepTitle>
				</Section>

				<Section bgColor="#ffffff">
					<SubTitle>💡 추가 기능 💡</SubTitle>
					<FeaturesContainer>
						<FeatureItem>
							<Illustration src={competencydetail} alt="" />
							<StepTitle2 color="black">
								+ 전공 역량 옆 돋보기를 선택하면 <br />
								해당 전공 역량의 상세 정보를 만나보실 수 있습니다!
							</StepTitle2>
						</FeatureItem>
						<FeatureItem>
							<Illustration src={detail} alt="" />
							<StepTitle2 color="black">
								+ 과목 누르면 과목 상세정보를 확인하실 수 있고, <br />
								오른쪽 화살표 를 눌러서 내 로드맵에 담을 수 있습니다!
							</StepTitle2>
						</FeatureItem>
					</FeaturesContainer>
				</Section>

				<LinkContainer>
					<LinkButton onClick={() => navigate('/about-us')} option={'white'}>
						About Us
					</LinkButton>
					<LinkButton onClick={() => navigate('/road-map')} option={'green'}>
						KUMAP 바로가기
					</LinkButton>
				</LinkContainer>
			</Container>
			<Footer />
		</>
	);
}

export default HowTo;
