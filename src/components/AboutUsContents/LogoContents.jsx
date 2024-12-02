import styled from 'styled-components';
import { SubTitle } from './AboutUsContens';

const LogoContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 3;
`;

const LogoContents = () => {
	return (
		<LogoContainer>
			<img width={'300px'} height={'300px'} src="./../img/KusdLogo.svg" alt="학생개발팀 로고" />
			<SubTitle>학생들을 위해 학생들이 뜁니다!</SubTitle>
		</LogoContainer>
	);
};

export default LogoContents;
