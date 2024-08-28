import styled from 'styled-components';

const Container = styled.div`
	width: 90%;
	height: 30rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-self: center;
	align-items: center;
	gap: 20px;
`;

const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const HeaderContainer = styled.header`
	width: fit-content;
	align-self: flex-start;
	padding-top: 100px;
	text-align: center;
	margin-bottom: 0;
`;

const Title = styled.h1`
	font-family: 'Pretendard-bold', sans-serif;
	font-size: 4em;
	font-weight: bold;
	text-align: left;
	padding-left: 100px;
	color: #056a3f;
`;

const MainTitle = styled.div`
	font-family: 'Pretendard-bold', sans-serif;
	font-size: 40px;
	font-weight: 800;
	color: #056a3f;
`;

const MainTitle_impact = styled.div`
	font-family: 'Pretendard-bold', sans-serif;
	font-size: 50px;
	font-weight: 800;
	color: #056a3f;
`;

const Description = styled.div`
	text-align: center;
	font-size: 25px;
	font-weight: 500;
`;

const Gap = styled.div`
	height: 5rem;
`;

const AboutCompetencyContents = () => {
	return (
		<>
			<HeaderContainer>
				<Title>KUMAP 이란?</Title>
			</HeaderContainer>
			<Container>
				<MainTitle>전공 분야와 관련된 학문적 지식을 활용함으로써 길러지는</MainTitle>
				<MainTitle_impact>핵심 능력</MainTitle_impact>
				<Gap></Gap>
				<SubContainer>
					<Description>건국대학교는 역량기반 교육과정을 운영하고 있어서,</Description>
					<Description>각 전공 교육과정은 전공역량을 기반으로 개발되었어요.</Description>
					<Description></Description>
					<Description>희망하는 진로 분야와 연관된 전공역량을 파악하고</Description>
					<Description>필요한 전공역량을 함양할 수 있는 교과목과 전공을 찾는 것이 KUMAP의 큰 목표에요!</Description>
				</SubContainer>
			</Container>
		</>
	);
};

export default AboutCompetencyContents;
