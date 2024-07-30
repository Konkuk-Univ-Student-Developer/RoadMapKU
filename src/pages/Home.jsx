import HeroSection from './HeroSection';
import Header from '../components/Header';
import useClient from '../hooks/useClient';
import { useEffect } from 'react';
function Home() {
	const { fetchLargeField, fetchMiddleField } = useClient();
	useEffect(() => {
		fetchLargeField();
		fetchMiddleField({
			largeFieldCode: '01000000',
			largeField: '경영·사무·금융·보험직'
		});
	});

	return (
		<>
			<Header />
			<HeroSection />
		</>
	);
}

export default Home;
