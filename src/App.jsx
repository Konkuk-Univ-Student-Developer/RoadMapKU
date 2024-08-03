import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RoadMap from './pages/RoadMap';
import { RecoilRoot } from 'recoil';

function App() {
	return (
		<RecoilRoot>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/road-map" element={<RoadMap />} />
			</Routes>
		</RecoilRoot>
	);
}

export default App;
