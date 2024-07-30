import HeroSection from './HeroSection';
import Header from '../components/Header';
import useClient from '../hooks/useClient';
import { useEffect } from 'react';
function Home() {
	const { fetchLargeField, fetchMiddleField, fetchSmallField, fetchDetailField } = useClient();
	useEffect(() => {
		fetchLargeField();
		fetchMiddleField({
			largeFieldCode: '01000000',
			largeField: '경영·사무·금융·보험직'
		});
		fetchSmallField({
			middleFieldCode: '01010000',
			middleField: '관리직(임원,부서장)'
		});
		fetchDetailField({
			smallFieldCode: '01010100',
			smallField: '의회의원·고위공무원 및 기업 고위임원'
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
