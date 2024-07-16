// import { useNavigate } from 'react-router-dom';
// import { Sidebar } from '../components/SideBar';
// import { MainContent } from '../components/MainContent';
import styled from 'styled-components';
import HeroSection from './HeroSection';

const AppContainer = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	background-color: #f7f7f7;
`;

function Home() {
	// const navigate = useNavigate();

	// const onClickHandler = () => {
	// 	navigate('/road-map');
	// };

	return (
		<>
			{/* <h1>hi</h1>
			<button onClick={onClickHandler}>start</button> */}
			<AppContainer>
				<HeroSection></HeroSection>
			</AppContainer>

			{/* <AppContainer>
				<Sidebar />
				<MainContent />
			</AppContainer> */}
		</>
	);
}

export default Home;
