// import styled from 'styled-components';
import HeaderBar from '../components/HeaderBar';
import HowTo from './HowTo';
import { Header, SectionsContainer } from 'react-fullpage';

// const Container = styled.a``;

// const Container = styled.div`
// 	height: calc(100vh - 60px); /* 전체 화면에서 헤더 높이를 뺀 나머지 공간 */
// 	margin-top: 60px;
// 	overflow-y: auto; /* 세로 스크롤 */
// `;

const fullPageOptions = {
	sectionClassName: 'section',
	anchors: ['sectionOne', 'sectionTwo', 'sectionThree', 'sectionFour'],
	scrollBar: false,
	navigation: true,
	verticalAlign: false,
	sectionPaddingTop: '50px',
	sectionPaddingBottom: '50px',
	arrowNavigation: true
};

function HowToPage() {
	return (
		<>
			<Header>
				<HeaderBar />
			</Header>
			<SectionsContainer {...fullPageOptions}>
				<HowTo />
			</SectionsContainer>
		</>
	);
}

export default HowToPage;
