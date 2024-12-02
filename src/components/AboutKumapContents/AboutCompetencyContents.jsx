import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	z-index: 3;
`;

const ContentsContainer = styled.div`
	width: 90%;
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
	padding-top: 50px;
	text-align: center;
	margin-bottom: 0;
`;

const Title = styled.h1`
	font-size: 4em;
	font-weight: 800;
	text-align: left;
	padding-left: 100px;
	color: #056a3f;
`;

const MainTitle = styled.div`
	font-size: 40px;
	color: #056a3f;
`;

const MainTitle_impact = styled.div`
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
		<Container>
			<HeaderContainer>
				<Title>전공역량 이란?</Title>
			</HeaderContainer>
			<ContentsContainer>
				<MainTitle>전공 분야에서 필요한</MainTitle>
				<MainTitle_impact>핵심적인 역량</MainTitle_impact>
				<Gap></Gap>
				<SubContainer>
					<Description>건국대학교의 각 전공은 전공역량을 기반으로 개발되었어요.</Description>
					<Description>
						전공역량은 전공 분야에서 필요한 지식 뿐만 아니라 기술과 태도까지 모두 포함하는 개념이에요.
					</Description>
					<Description></Description>
					<Description>희망하는 진로 분야와 연관된 전공역량을 파악하고</Description>
					<Description>
						필요한 전공역량을 함양할 수 있는 교과목과 전공을 찾도록 돕는 것이 KUMAP의 큰 목표에요!
					</Description>
				</SubContainer>
			</ContentsContainer>
		</Container>
	);
};

export default AboutCompetencyContents;
