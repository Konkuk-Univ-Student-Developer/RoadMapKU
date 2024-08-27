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

const MainTitle = styled.div`
	font-size: 40px;
	font-weight: 800;
	color: #056a3f;
`;

const MainTitle_impact = styled.div`
	font-size: 50px;
	font-weight: 800;
	color: #056a3f;
`;

const Description = styled.div`
	text-align: center;
	font-size: 30px;
	font-weight: 500;
`;

const Gap = styled.div`
	height: 5rem;
`;

const AboutCompetencyContents = () => {
	return (
		<Container>
			<MainTitle>특정 직군에 종사하기 위해 갖추어야 할</MainTitle>
			<MainTitle_impact>핵심 능력</MainTitle_impact>
			<Gap></Gap>
			<SubContainer>
				<Description>현재 건국대학교 내 모든 학과의 수업은</Description>
				<Description>진출 분야(직군)를 위해 필요한 전공역량을 바탕으로 구성되어 있어요.</Description>
			</SubContainer>
		</Container>
	);
};

export default AboutCompetencyContents;
