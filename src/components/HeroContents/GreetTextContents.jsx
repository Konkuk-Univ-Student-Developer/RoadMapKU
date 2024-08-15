import styled from 'styled-components';

const TextContainer = styled.div`
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

const ContentsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

const GreetTextContents = () => {
	return (
		<TextContainer>
			<Text>2025학년도</Text>
			<ContentsContainer>
				<Text style={{ fontSize: '85px', color: '#036B3F' }}>건국대학교</Text>
				<Text>에</Text>
			</ContentsContainer>
			<Text>입학한 것을 환영합니다!</Text>
		</TextContainer>
	);
};

export default GreetTextContents;
