import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FieldSearchBar from './FieldSearchBar/FieldSearchBar';
import RoadMapContainer from './RoadMap/RoadMapContainer';
import TutorialModal from './Tutorial/TutorialModal';
const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Content = styled.div`
	padding-top: 30px;
	width: 100%;
	display: flex;
	justify-content: center;
`;

const Main = () => {
	const [showFieldSearchBar, setShowFieldSearchBar] = useState(true);

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

	const toggleFieldSearchBar = () => {
		setShowFieldSearchBar((prevShowFieldSearchBar) => !prevShowFieldSearchBar);
	};

	return (
		<>
			<Container>
				{showModal && <TutorialModal onClose={handleCloseModal} onDismissForAWeek={handleDismissForAWeek} />}
				<FieldSearchBar show={showFieldSearchBar} toggleFieldSearchBar={toggleFieldSearchBar} />
				<Content>
					<RoadMapContainer />
				</Content>
			</Container>
		</>
	);
};

export default Main;
