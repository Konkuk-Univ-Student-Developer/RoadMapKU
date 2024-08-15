import styled from 'styled-components';

const TextContainer = styled.div`
	gap: 15px;
	padding-left: 5rem;
	display: flex;
	width: 50%;
	flex-direction: column;
	align-items: flex-start;
`;

const Text = styled.div`
	font-size: 50px;
	font-weight: 600;
`;

const TextContents = () => {
	return (
		<TextContainer>
			<Text>내 꿈을 위한 로드맵</Text>
			<Text style={{ fontSize: '85px', color: '#036B3F' }}>KUMAP</Text>
			<Text>진로를 탐색하고,</Text>
			<Text>나만의 로드맵을 만들어 보세요!</Text>
		</TextContainer>
	);
};

export default TextContents;
