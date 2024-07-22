import { useNavigate } from 'react-router-dom';
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
