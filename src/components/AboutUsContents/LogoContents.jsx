import styled from 'styled-components';
import { SubTitle } from './AboutUsContens';
import kusdLogo from '../../img/KusdLogo.svg';

const LogoContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const KusdLogo = styled.img.attrs({ src: kusdLogo, alt: '학생개발팀 로고' })`
	width: 300px;
	height: 300px;
`;

const LogoContents = () => {
	return (
		<LogoContainer>
			<KusdLogo />
			<SubTitle>학생들을 위해 학생들이 뜁니다!</SubTitle>
		</LogoContainer>
	);
};

export default LogoContents;
