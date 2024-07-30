import HeroSection from './HeroSection';
import Header from '../components/Header';
import useClient from '../hooks/useClient';
import { useEffect } from 'react';
function Home() {
	const { fetchLargeField } = useClient();
	useEffect(() => {
		fetchLargeField();
	});

	return (
		<>
			<Header />
			<HeroSection />
		</>
	);
}

export default Home;
