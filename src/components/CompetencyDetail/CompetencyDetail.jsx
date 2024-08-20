import React, { useEffect, useState } from 'react';
import { Title, Subtitle, ModalContent, Subject, SubjectContainer, ScrollContainer } from './CompetencyDetailStyle';
import Modal from '../Modal/Modal';

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
			<Modal onClose={onClose}>
				<div>Loading...</div>
			</Modal>
		);
	}

	//오류 처리
	if (error) {
		return (
			<Modal onClose={onClose}>
				<div>{error}</div>
			</Modal>
		);
	}

	return (
		<Modal onClose={onClose}>
			<ScrollContainer>
				<Title>Competency Information</Title>

				<SubjectContainer>
					<Subject>{competencyDetail.competencyName}</Subject>
				</SubjectContainer>
				<Subtitle>설명</Subtitle>
				<ModalContent>{competencyDetail.competencyDescription}</ModalContent>
			</ScrollContainer>
		</Modal>
	);
}

export default CourseDetail;
