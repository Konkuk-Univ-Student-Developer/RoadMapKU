import styled from 'styled-components';
import { Color } from '../../style/Color';

const TitleContainer = styled.div`
	flex: 1;
	height: fit-content;
	width: 80%;
	height: 10%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin: 40px 0;
	gap: 5px;
`;

const HeaderTitle = styled.div`
	font-size: 20px;
	font-weight: 800;
	color: ${Color.GREEN};
`;

const Title = styled.div`
	font-size: 20px;
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
