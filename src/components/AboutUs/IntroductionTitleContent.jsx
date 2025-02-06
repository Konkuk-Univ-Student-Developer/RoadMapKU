import styled from 'styled-components';
import { Color } from '@styles';

const TitleContainer = styled.div`
	flex: 1;
	width: 80%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
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
	color: ${Color.TEXT_BLACK};
`;

const BoldText = styled.span`
	font-weight: bold;
	color: ${Color.TEXT_BLACK};
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
