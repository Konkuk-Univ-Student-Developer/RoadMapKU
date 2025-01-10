import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RoadMap from './pages/RoadMap';
import { RecoilRoot } from 'recoil';
import HowToUse from './pages/HowToUse';
import AboutUs from './pages/AboutUs';
import AboutKumap from './pages/AboutKumap';
import GlobalStyle from './style/GlobalStyle';
import '../src/font/font.css';

function App() {
	return (
		<RecoilRoot>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/road-map" element={<RoadMap />} />
				<Route path="/road-map/:key" element={<RoadMap />} />
				<Route path="/how-to-use" element={<HowToUse />} />
				<Route path="/about-us" element={<AboutUs />} />
				<Route path="/manual" element={<AboutKumap />} />
			</Routes>
		</RecoilRoot>
	);
}

export default App;
