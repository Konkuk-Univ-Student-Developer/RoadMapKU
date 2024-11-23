import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RoadMap from './pages/RoadMap';
import { RecoilRoot } from 'recoil';
import HowToPage from './pages/HowToPage';
import AboutUs from './pages/AboutUs';
import AboutKumap from './pages/AboutKumap';
import GlobalStyle from './components/GlobalStyle';
import '../src/font/font.css';

function App() {
	return (
		<RecoilRoot>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/road-map" element={<RoadMap />} />
				<Route path="/road-map/:key" element={<RoadMap />} />
				<Route path="/howtopage" element={<HowToPage />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/manual" element={<AboutKumap />} />
			</Routes>
		</RecoilRoot>
	);
}

export default App;
