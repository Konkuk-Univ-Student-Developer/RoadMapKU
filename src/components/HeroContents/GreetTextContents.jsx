import styled from 'styled-components';

const TextContainer = styled.div`
	padding-left: 5rem;
	display: flex;
	width: 100%;
	height: 500px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background-color: rgba(255, 255, 255, 0.8);
`;

const Text = styled.div`
	font-size: 50px;
	font-weight: 600;
`;

const GreetTextContents = () => {
	return (
		<TextContainer>
			<Text>2025 학년도</Text>
			<Text style={{ fontSize: '85px', color: '#036B3F' }}>건국대학교</Text>
			<Text>에 입학한 것을 환영합니다!</Text>
		</TextContainer>
	);
};

export default GreetTextContents;
