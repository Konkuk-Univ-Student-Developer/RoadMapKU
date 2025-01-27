import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	height: 100%
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-self: center;
	align-items: center;
	gap: 20px;
`;

const SubContainer = styled.div`
	padding-top: 10%;
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

const ConclusionContents = () => {
	return (
		<Container>
			<SubContainer>
				<Description>나의 꿈에 한 걸음 더 가까워질수 있게,</Description>
				<Description>전공역량별 교과목을 쉽고 편하게 찾을 수 있도록</Description>
				<Description>나만의 로드맵 만들기에 KUMAP이 함께할게요!</Description>
			</SubContainer>
		</Container>
	);
};

export default ConclusionContents;
