import styled from 'styled-components';

const Container = styled.div`
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
	padding-top: 100px;
	text-align: center;
	margin-bottom: 0;
`;

const Title = styled.h1`
	: 'Pretendard-bold', sans-serif;
	font-size: 4em;
	font-weight: bold;
	text-align: left;
	padding-left: 100px;
	color: #056a3f;
`;

const MainTitle = styled.div`
	: 'Pretendard-bold', sans-serif;
	font-size: 40px;
	font-weight: 800;
	color: #056a3f;
`;

const MainTitle_impact = styled.div`
	: 'Pretendard-bold', sans-serif;
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

const AboutKumapContents = () => {
	return (
		<>
			<HeaderContainer>
				<Title>KUMAP 이란?</Title>
			</HeaderContainer>
			<Container>
				<MainTitle>원하는 직업과 관련된 수업을 찾아 만드는</MainTitle>
				<MainTitle_impact>나만의 로드맵</MainTitle_impact>
				<Gap></Gap>
				<SubContainer>
					<Description>KUMAP을 통해 꿈을 이루기 위한 수업을 찾을 수 있어요!</Description>
					<Description></Description>
					<Description>희망 직업이 요구하는 전공역량을 알아보고,</Description>
					<Description>필요한 전공역량을 배울 수 있는 수업을 찾아보아요.</Description>
				</SubContainer>
			</Container>
		</>
	);
};

export default AboutKumapContents;
