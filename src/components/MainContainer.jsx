import styled from 'styled-components';
import HeaderBar from './HeaderBar';

const Container = styled.div`
	min-width: 1200px;
	width: 100%;
	min-height: 100vh;
	overflow: hidden;
`;

const MainContainer = ({ children }) => {
	return (
		<Container>
			<HeaderBar />
			{children}
		</Container>
	);
};

export default MainContainer;
