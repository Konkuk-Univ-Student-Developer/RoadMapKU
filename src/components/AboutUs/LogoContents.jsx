import styled from 'styled-components';
import { KusdLogo } from '@img';
import { Color } from '@styles';

const LogoContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const SubTitle = styled.p`
	font-size: 30px;
	font-weight: 700;
	color: ${Color.GREEN};
`;

const KusdLogoImage = styled.img.attrs({ src: KusdLogo, alt: '학생개발팀 로고' })`
	width: 300px;
	height: 300px;
`;

const LogoContents = () => {
	return (
		<LogoContainer>
			<KusdLogoImage />
			<SubTitle>학생들을 위해 학생들이 뜁니다!</SubTitle>
		</LogoContainer>
	);
};

export default LogoContents;
