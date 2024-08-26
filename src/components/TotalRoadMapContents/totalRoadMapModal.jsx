import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from '../Modal/Modal';
import Cell from './totalRoadMapCell';

export const ScrollContainer = styled.div`
	width: 100%;
	background-color: transparent;
	padding: 0rem;
	border-radius: 8px;
	max-height: 80vh;
	overflow-y: auto;
	overflow-x: hidden;
`;

export const Title = styled.h1`
	background-color: #036b3f;
	padding: 1rem;
	border-radius: 8px;
	color: white;
	margin: 0;
	font-size: 2rem;
`;

export const SubjectContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 0rem;
`;

export const Subject = styled.h1`
	justify-content: center;
	border-radius: 8px;
	color: black;
	margin: 0;
	font-size: 1.7rem;
	padding: 0rem;
`;

export const Subtitle = styled.h2`
	color: #036b3f;
	font-size: 1.5rem;
	margin: 0.5rem 20px;
	padding-top: 2rem;
`;

export const ModalContent = styled.div`
	font-family: Arial;
	font-size: 1rem;
	margin: 10px 20px;
`;

export const TableContent = styled.div`
	font-family: Arial;
	margin: 10px 0;
`;

const TableContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	overflow: hidden;
`;

const SemesterContainer = styled.div`
	height: 2.1rem;
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	overflow-y: scroll;
	overflow-x: hidden;
`;

const CourseContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	overflow-y: scroll;
	overflow-x: hidden;
`;

const CourseColumn = styled.div`
	min-width: 0;
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const defaultTable = [
	[{ haksuId: '0', courseName: '1 - 1' }],
	[{ haksuId: '0', courseName: '1 - 2' }],
	[{ haksuId: '0', courseName: '2 - 1' }],
	[{ haksuId: '0', courseName: '2 - 2' }],
	[{ haksuId: '0', courseName: '3 - 1' }],
	[{ haksuId: '0', courseName: '3 - 2' }],
	[{ haksuId: '0', courseName: '4 - 1' }],
	[{ haksuId: '0', courseName: '4 - 2' }]
];

function TotalRoadMapModal({ onClose, roadMapData, subjectName }) {
	const [totalRoadMap, setTotalRoadMap] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const loadData = async () => {
			if (roadMapData) {
				try {
					setLoading(true);
					setError(null);
					setTotalRoadMap(roadMapData);
				} catch (error) {
					console.error('Error fetching road map:', error);
					setError('Failed to fetch road map');
				} finally {
					setLoading(false);
				}
			}
		};
		loadData();
	}, [roadMapData]);

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
				<Title>{subjectName} 전체 로드맵</Title>
				<TableContainer>
					<SemesterContainer>
						{defaultTable.map((row, rowIndex) => (
							<CourseColumn key={rowIndex}>
								{row.map((cellData) => (
									<Cell key={cellData.haksuId} cellData={cellData} rowIndex={rowIndex} unclickable={true} />
								))}
							</CourseColumn>
						))}
					</SemesterContainer>
					<CourseContainer>
						{totalRoadMap.map((row, rowIndex) => (
							<CourseColumn key={rowIndex}>
								{row.slice(1).map((cellData) => (
									<Cell
										key={cellData.haksuId}
										cellData={cellData}
										rowIndex={rowIndex}
										onClick={() => {}}
										unclickable={false}
										highlightedCompetency={'total_roadMap'}
									/>
								))}
							</CourseColumn>
						))}
					</CourseContainer>
				</TableContainer>
			</ScrollContainer>
		</Modal>
	);
}

export default TotalRoadMapModal;
