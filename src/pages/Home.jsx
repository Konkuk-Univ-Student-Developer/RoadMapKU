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

const MainContainer = styled.div`
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: row;
	jusify-content: center;
	align-items: center;
`;

const TextContainer = styled.div`
	padding-left: 5rem;
	display: flex;
	width: 50%;
	flex-direction: column;
	align-items: flex-start;
`;

const Text = styled.div`
	font-size: 50px;
	font-weight: 600;
`;

function Home() {
	return (
		<HomeContainer>
			<Header />
			<HeroSection>
				<MainContainer>
					<TextContainer>
						<Text>내 꿈을 위한 로드맵</Text>
						<Text style={{ fontSize: '85px', color: '#036B3F' }}>KUMAP</Text>
						<Text>진로를 탐색하고,</Text>
						<Text>나만의 로드맵을 만들어 보세요!</Text>
					</TextContainer>
				</MainContainer>
			</HeroSection>
		</HomeContainer>
	);
}

export default Home;
