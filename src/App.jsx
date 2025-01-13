import { Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { Home, RoadMap, HowToUse, AboutUs, AboutKumap } from '@pages';
import { GlobalStyle } from '@styles';
import '@font/font.css';

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
