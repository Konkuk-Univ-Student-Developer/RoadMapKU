import styled from 'styled-components';
import Header from '../components/Header';
import HowTo from './HowTo';

// const Container = styled.a``;

const Container = styled.div`
	height: calc(100vh - 60px); /* 전체 화면에서 헤더 높이를 뺀 나머지 공간 */
	margin-top: 60px;
	overflow-y: auto; /* 세로 스크롤 */
`;

function HowToPage() {
	return (
		<>
			<Header />
			<Container>
				<HowTo />
			</Container>
		</>
	);
}

export default HowToPage;
