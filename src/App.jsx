import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import RoadMap from './pages/RoadMap';
// import { Sidebar } from './components/SideBar';
// import { MainContent } from './components/MainContent';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/road-map" element={<RoadMap />} />
		</Routes>
	);
}

export default App;
