import styled from 'styled-components';
import Header from '../components/Header';
import HeroSection from './HeroSection';

const HomeContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

function Home() {
	return (
		<HomeContainer>
			<Header />
			<HeroSection>
				<div>hi</div>
			</HeroSection>
		</HomeContainer>
	);
}

export default Home;
