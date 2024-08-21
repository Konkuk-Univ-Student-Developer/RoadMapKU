import styled from 'styled-components';

const Container = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const MainTitle = styled.div`
	font-size: 100px;
	font-weight: 800;
`;

export const SubTitle = styled.p`
	font-size: 50px;
	font-weight: 700;
	color: #056a3f;
`;

const Description = styled.div`
	text-align: center;
	word-wrap: break-word;
	font-size: 40px;
	font-weight: 500;
`;

const AboutUsContents = () => {
	return (
		<Container>
			<MainTitle>About Us</MainTitle>
			<SubTitle>학생들의 니즈를 100% 충족시키기 위해, 쿠스디가 뜁니다.</SubTitle>
			<Description>
				문제 제기부터 기획, 개발 및 사용자 테스트로 인한 서비스 분석까지 학생들이 직접 해보면 어떨까? 라는 궁금증과
				기대감으로 시작했습니다.
			</Description>
			<Description>
				학교에게는 학생들의 니즈와 인사이트를 전달, 학생들이 학교 생활에 불편함을 해소할 수 있도록 저희가 뛰겠습니다.
				앞으로도 저희 쿠스디의 행보에 많은 관심 부탁드립니다.
			</Description>
		</Container>
	);
};

export default AboutUsContents;
