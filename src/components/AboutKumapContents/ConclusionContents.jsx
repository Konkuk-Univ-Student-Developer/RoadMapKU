import styled from 'styled-components';

const Container = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-self: center;
	align-items: center;
	gap: 20px;
`;

const SubContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const Description = styled.div`
	text-align: center;
	font-size: 25px;
	font-weight: 500;
`;

const Gap = styled.div`
	height: 10rem;
`;

const ConclusionContents = () => {
	return (
		<Container>
			<SubContainer>
				<Gap />
				<Description>전공역량을 기반으로 차곡차곡 수업을 들을수록,</Description>
				<Description>나의 꿈에 한걸음 더 가까워질 수 있어요.</Description>
				<Description></Description>
				<Description>KUMAP과 함께 나만의 로드맵을 만들어 보세요!</Description>
			</SubContainer>
		</Container>
	);
};

export default ConclusionContents;
