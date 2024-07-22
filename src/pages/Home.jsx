//import { useNavigate } from 'react-router-dom';
import HeroSection from './HeroSection';
import Header from '../components/Header';
function Home() {
	// const navigate = useNavigate();

	// const onClickHandler = () => {
	// 	navigate('/road-map');
	// };

	return (
		<>
			{/* <h1>hi</h1>
			<button onClick={onClickHandler}>start</button> */}
			<Header />
			<HeroSection />

			{/* <AppContainer>
				<Sidebar />
				<MainContent />
			</AppContainer> */}
		</>
	);
}

export default Home;
