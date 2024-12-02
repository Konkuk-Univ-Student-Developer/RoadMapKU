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
	padding-top: 100px;
	text-align: center;
	margin-bottom: 0;
`;

const Title = styled.h1`
	font-family: 'Pretendard-bold';
	font-size: 4em;
	text-align: left;
	padding-left: 100px;
	color: #056a3f;
`;

const MainTitle = styled.div`
	font-size: 40px;
	color: #056a3f;
`;

const MainTitle_impact = styled.div`
	font-family: 'Pretendard-bold';
	font-size: 50px;
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
		<Container>
			<HeaderContainer>
				<Title>KUMAP 이란?</Title>
			</HeaderContainer>
			<ContentsContainer>
				<MainTitle>원하는 진로와 관련된 수업을 찾아 만드는</MainTitle>
				<MainTitle_impact>나만의 전공 로드맵</MainTitle_impact>
				<Gap></Gap>
				<SubContainer>
					<Description>KUMAP을 통해 꿈을 이루기 위한 수업을 찾을 수 있어요!</Description>
					<Description></Description>
					<Description>희망 진로로 나아가기 위해 필요한 전공역량을 알아보고,</Description>
					<Description>필요한 전공역량을 배울 수 있는 수업을 찾아보아요.</Description>
				</SubContainer>
			</ContentsContainer>
		</Container>
	);
};

export default AboutKumapContents;
