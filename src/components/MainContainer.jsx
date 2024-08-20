import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
	min-width: 1200px;
	width: 100%;
	min-height: 100vh;
	overflow: hidden;
`;

const MainContainer = ({ children }) => {
	return (
		<Container>
			<Header />
			{children}
		</Container>
	);
};

export default MainContainer;
