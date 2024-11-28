import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MainContainer from '../components/MainContainer';
import logo_url from '../img/kumap_logo.png';
import character_url from './../img/KU_character.png';
import road_url from './../img/road.png';
import LinkContents from '../components/HomeContents/LinkContents';
import BackgroundContents from '../components/HomeContents/BackgroundContents';
import ImmergeBackgroundContents from '../components/HomeContents/ImmergeBackgroundContents';
import { fadeIn, fadeInRoad } from '../style/Frames';
import TutorialModal from '../components/Tutorial/TutorialModal';

const PageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
`;

const TitleContainer = styled.div`
	padding-top: 20rem;
	display: flex;
	justify-content: center;
	align-items: center;
	user-select: none;
	z-index: 2;
	opacity: 0;
	animation: ${fadeIn} 1s ease-in-out forwards;
	animation-delay: 0.3s;
`;

const SubTitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: 'Pretendard-semiBold';
	font-size: 1.5rem;
	user-select: none;
	gap: 0.5rem;
	animation-delay: 0.5s;
	z-index: 2;
	opacity: 0;
	animation: ${fadeIn} 1s ease-in-out forwards;
	animation-delay: 0.6s;
`;

const RoadContainer = styled.div`
	transform: translate(-25rem, -18rem);
	display: flex;
	justify-content: center;
	align-items: center;
	animation-delay: 1s;
	z-index: 1;
	opacity: 0;
	animation: ${fadeInRoad} 1s ease-in-out forwards;
	animation-delay: 0.9s;
`;

function NewHome() {
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		const dismissedUntil = localStorage.getItem('dismissedUntil');
		const today = new Date();

		if (!dismissedUntil) {
			setShowModal(true);
			return;
		}

		const storedDate = new Date(dismissedUntil);
		if (storedDate < today) {
			setShowModal(true);
		} else {
			setShowModal(false);
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

	return (
		<MainContainer>
			{showModal && <TutorialModal onClose={handleCloseModal} onDismissForAWeek={handleDismissForAWeek} />}
			<PageContainer>
				<BackgroundContents />
				<TitleContainer>
					<img alt="Kumap Logo" src={logo_url} style={{ width: '30rem', height: '10rem' }} />
					<img alt="Kumap Character" src={character_url} style={{ width: '8rem', height: '9rem' }} />
				</TitleContainer>
				<SubTitleContainer>
					<div>진로를 탐색하고 추가하여</div>
					<div>나만의 로드맵을 만들어 보세요!</div>
				</SubTitleContainer>
				<LinkContents />
				<RoadContainer>
					<img alt="Road Image" src={road_url} style={{ width: '120rem', height: '20rem' }} />
				</RoadContainer>
				<ImmergeBackgroundContents />
			</PageContainer>
		</MainContainer>
	);
}

export default NewHome;
