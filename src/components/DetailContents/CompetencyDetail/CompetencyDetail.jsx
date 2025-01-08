import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Color } from '../../../style/Color';
import Modal from '../../Modal/Modal';

const ScrollContainer = styled.div`
	width: 100%;
	background-color: transparent;
	padding: 0rem;
	border-radius: 8px;
	max-height: 80vh;
	overflow-y: auto;
	overflow-x: hidden;
`;

const Title = styled.h1`
	background-color: ${Color.GREEN};
	padding: 1rem;
	border-radius: 8px;
	color: white;
	margin: 0;
	font-size: 2rem;
	text-align: center;
`;

const Subtitle = styled.h2`
	color: ${Color.GREEN};
	font-size: 1.5rem;
	margin: 0.5rem 20px;
	padding-top: 2rem;
`;

const ModalContent = styled.div`
	font-size: 1rem;
	margin: 10px 20px;
`;

function CourseDetail({ onClose, competencyData }) {
	const [competencyDetail, setCompetencyDetail] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadData = async () => {
			if (competencyData) {
				try {
					setLoading(true);
					setError(null);
					setCompetencyDetail(competencyData);
				} catch (error) {
					console.error('Error fetching competency details:', error);
					setError('Failed to fetch competency details');
				} finally {
					setLoading(false);
				}
			}
		};
		loadData();
	}, [competencyData]);

	if (loading) {
		return (
			<Modal width="50%" onClose={onClose}>
				<div>Loading...</div>
			</Modal>
		);
	}

	//오류 처리
	if (error) {
		return (
			<Modal width="50%" onClose={onClose}>
				<div>{error}</div>
			</Modal>
		);
	}

	return (
		<Modal width="50%" onClose={onClose}>
			<ScrollContainer>
				<Title>{competencyDetail.competencyName}</Title>
				<Subtitle>설명</Subtitle>
				<ModalContent>{competencyDetail.competencyDescription}</ModalContent>
			</ScrollContainer>
		</Modal>
	);
}

export default CourseDetail;
