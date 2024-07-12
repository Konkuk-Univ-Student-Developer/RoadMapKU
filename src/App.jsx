import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import RoadMap from './components/RoadMap';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/road-map" element={<RoadMap />} />
		</Routes>
	);
}

export default App;
