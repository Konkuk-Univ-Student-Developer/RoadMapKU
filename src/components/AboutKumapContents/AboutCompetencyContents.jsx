import styled from 'styled-components';

const Container = styled.div`
	width: 80%;
	height: 50vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const SubContainer = styled.div`
	width: 90%;
	height: 25vh;
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

const Description = styled.div`
	width: 90%;
	text-align: center;
	font-size: 30px;
	font-weight: 500;
`;

const AboutCompetencyContents = () => {
	return (
		<Container>
			<MainTitle>전공역량이란?</MainTitle>
			<SubContainer>
				<Description>전공역량이란, 특정 직군에 종사하기 위해 갖추어야 할 핵심 능력을 의미합니다.</Description>
				<Description></Description>
				<Description>현재 건국대학교 내 모든 학과의 수업은</Description>
				<Description>진출 분야(직군)를 위해 필요한 &apos;전공역량&apos;을 바탕으로 구성되어 있습니다.</Description>
			</SubContainer>
		</Container>
	);
};

export default AboutCompetencyContents;
