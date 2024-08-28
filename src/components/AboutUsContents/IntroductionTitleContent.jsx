import styled from 'styled-components';

const TitleContainer = styled.div`
	height: 20vh;
	width: 80%;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin-top: 50px;
	gap: 5px;
`;

const HeaderTitle = styled.div`
	font-size: 20px;
	font-weight: 800;
	color: #056a3f;
`;

const Title = styled.div`
	font-size: 30px;
	font-weight: 400;
`;

const BoldText = styled.span`
	font-weight: bold;
`;

const IntroductionTitleContent = () => {
	return (
		<TitleContainer>
			<HeaderTitle>TEAM INTRODUCTION</HeaderTitle>
			<Title>안녕하세요,</Title>
			<Title>
				<BoldText>KUSD</BoldText> 팀을 소개할게요!
			</Title>
		</TitleContainer>
	);
};

export default IntroductionTitleContent;
