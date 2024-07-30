import HeroSection from './HeroSection';
import Header from '../components/Header';
import useClient from '../hooks/useClient';
import { useEffect } from 'react';
function Home() {
	const { fetchTest } = useClient();
	useEffect(() => {
		fetchTest();
		console.log(process.env.REACT_APP_API);
	});

	return (
		<>
			<Header />
			<HeroSection />
		</>
	);
}

export default Home;
