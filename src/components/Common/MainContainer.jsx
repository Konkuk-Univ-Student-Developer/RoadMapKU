import styled from 'styled-components';
import { HeaderBar } from '@Common';

const Container = styled.div`
	min-width: 1200px;
	width: 100%;
	min-height: 100vh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

const ContentsContainer = styled.div`
	min-width: 1200px;
	width: 100%;
	height: calc(100vh - 70px);
	overflow: hidden;
`;

const MainContainer = ({ children }) => {
	return (
		<Container>
			<HeaderBar />
			<ContentsContainer>{children}</ContentsContainer>
		</Container>
	);
};

export default MainContainer;
