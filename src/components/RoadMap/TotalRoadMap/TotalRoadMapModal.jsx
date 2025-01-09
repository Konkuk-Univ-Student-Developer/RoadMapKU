import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Modal from '../../Common/Modal/Modal';
import { Color } from '../../../style/Color';
import TotalRoadMapCell from '../TotalRoadMap/TotalRoadMapCell';

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
`;

const TableContainer = styled.div`
	max-height: 60vh;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	overflow: hidden;
`;

const SemesterContainer = styled.div`
	height: 34px;
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	margin-right: 14px;
`;

const CourseContainer = styled.div`
	flex: 1;
	max-height: calc(60vh - 50px);
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
									<TotalRoadMapCell key={cellData.haksuId} cellData={cellData} rowIndex={rowIndex} unclickable={true} />
								))}
							</CourseColumn>
						))}
					</SemesterContainer>
					<CourseContainer>
						{totalRoadMap.map((row, rowIndex) => (
							<CourseColumn key={rowIndex}>
								{row.slice(1).map((cellData) => (
									<TotalRoadMapCell
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
