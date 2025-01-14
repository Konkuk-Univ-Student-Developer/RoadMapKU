import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { totalRoadMapState } from '@recoils';
import { Modal } from '@Modal';
import { Color } from '@styles';
import { TotalRoadMapCell } from '@TotalRoadMap';
import { SemesterTable, parseCourseData } from '@Common/Utils';

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

function TotalRoadMapModal({ onClose, subjectName }) {
	const totalRoadMapData = useRecoilValue(totalRoadMapState);
	const [totalRoadMap, setTotalRoadMap] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// totalRoadMap을 가공하여 totalRoadMapData에 저장
	useEffect(() => {
		if (!Array.isArray(totalRoadMapData)) return;

		const loadData = async () => {
			if (totalRoadMapData) {
				try {
					setLoading(true);
					setError(null);
					setTotalRoadMap(parseCourseData(totalRoadMapData, null, 0));
				} catch (error) {
					console.error('Error fetching road map:', error);
					setError('Failed to fetch road map');
				} finally {
					setLoading(false);
				}
			}
		};
		loadData();
	}, [totalRoadMapData]);

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
						{SemesterTable.map((row, rowIndex) => (
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
								{row.map((cellData) => (
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
