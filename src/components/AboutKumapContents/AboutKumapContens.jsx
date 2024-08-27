import styled from 'styled-components';

const Container = styled.div`
	width: 90%;
	height: 30rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
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
	padding-bottom: 5rem;
`;

const Description = styled.div`
	text-align: center;
	font-size: 30px;
	font-weight: 500;
`;

const AboutKumapContents = () => {
	return (
		<Container>
			<MainTitle>KUMAP 이란?</MainTitle>
			<SubContainer>
				<Description>KUMAP은 내가 희망하는 직업과 관련된 학과의 수업을 찾아</Description>
				<Description>나만의 수업 로드맵을 만들 수 있는 서비스 입니다.</Description>
				<Description></Description>
				<Description>KUMAP을 통해 희망하는 직업에 필요한 전공 역량을 포함한 수업을 찾을 수 있습니다.</Description>
			</SubContainer>
		</Container>
	);
};

export default AboutKumapContents;
