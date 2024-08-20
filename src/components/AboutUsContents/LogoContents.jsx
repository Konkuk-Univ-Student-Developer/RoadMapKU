import styled from 'styled-components';

const LogoContainer = styled.div`
	width: 100%;
	height: 300px;
	display: flex;
	justify-content: center;
	align-itmes: center;
`;

const LogoContents = () => {
	return (
		<LogoContainer>
			<img width={'300px'} height={'300px'} src="./../img/KusdLogo.svg" alt="학생개발팀 로고" />
		</LogoContainer>
	);
};

export default LogoContents;
