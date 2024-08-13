import styled from 'styled-components';
import Header from '../components/Header';
import HeroSection from './HeroSection';
import TextContents from '../components/HeroContents/TextContens';
import LinkContents from '../components/HeroContents/LinkContents';

const HomeContainer = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MainContainer = styled.div`
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: row;
	jusify-content: center;
	align-items: center;
`;

function Home() {
	return (
		<HomeContainer>
			<Header />
			<HeroSection>
				<MainContainer>
					<TextContents />
					<LinkContents />
				</MainContainer>
			</HeroSection>
		</HomeContainer>
	);
}

export default Home;
