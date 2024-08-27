import styled from 'styled-components';

const Container = styled.div`
	width: 80%;
	height: 10rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const SubContainer = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const Description = styled.div`
	width: 90%;
	text-align: center;
	font-size: 30px;
	font-weight: 500;
`;

const ConclusionContents = () => {
	return (
		<Container>
			<SubContainer>
				<Description>전공역량을 기반으로 한 수업을 들을수록,</Description>
				<Description>나의 진로에 한걸음 더 가까워질 수 있습니다.</Description>
				<Description></Description>
				<Description>KUMAP과 함께 나만의 로드맵을 만들어 보세요!</Description>
			</SubContainer>
		</Container>
	);
};

export default ConclusionContents;
