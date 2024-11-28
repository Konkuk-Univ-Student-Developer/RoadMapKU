import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import HeroSection from './HeroSection';
import TextContents from '../components/HeroContents/TextContents';
import LinkContents from '../components/HeroContents/LinkContents';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GreetTextContents from '../components/HeroContents/GreetTextContents';
import MainContainer from '../components/MainContainer';
import TutorialModal from '../components/Tutorial/TutorialModal';

const SubContainer = styled.div`
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

function Home() {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		const dismissedUntil = localStorage.getItem('dismissedUntil');
		const today = new Date();

		if (!dismissedUntil) {
			setShowModal(true);
		} else {
			const storedDate = new Date(dismissedUntil);
			if (storedDate < today) {
				setShowModal(true);
			} else {
				setShowModal(false);
			}
		}
	}, []);

	// 팝업 닫기
	const handleCloseModal = () => {
		setShowModal(false);
	};

	// 일주일 동안 보지 않기
	const handleDismissForAWeek = () => {
		const nextWeek = new Date();
		nextWeek.setDate(nextWeek.getDate() + 7); // 오늘 날짜 + 7일
		localStorage.setItem('dismissedUntil', nextWeek.toISOString()); // 로컬 스토리지에 저장
		setShowModal(false);
	};

	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		cssEase: 'ease-out',
		useTransform: false
	};

	return (
		<MainContainer>
			{showModal && <TutorialModal onClose={handleCloseModal} onDismissForAWeek={handleDismissForAWeek} />}
			<Slider {...settings}>
				<HeroSection imageUrl={'./img/HomePicture.png'}>
					<SubContainer>
						<TextContents />
						<LinkContents />
					</SubContainer>
				</HeroSection>

				<HeroSection imageUrl={'./img/HomePicture2.png'}>
					<SubContainer>
						<GreetTextContents />
					</SubContainer>
				</HeroSection>
			</Slider>
		</MainContainer>
	);
}

export default Home;
