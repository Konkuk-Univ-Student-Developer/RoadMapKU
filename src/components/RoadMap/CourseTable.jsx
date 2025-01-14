import React, { useRef } from 'react';
import styled from 'styled-components';
import Cell from './RoadMap/RoadMapCell';
import CourseCell from './CourseCell';
import { SemesterTable } from '../Common/Utils';

const TableContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	overflow: hidden;
`;

const SemesterContainer = styled.div`
	height: 33px;
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	margin-right: 14px;
`;

const SemesterColumn = styled.div`
	min-width: 0;
	height: fit-content;
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
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
	position: relative;
	min-width: 0;
	height: fit-content;
	margin-bottom: 70px;
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding-bottom: 0.5rem;
`;

const CourseTable = ({ courseTableData }) => {
	const containerRef = useRef(null);

	const handleCellClickSendRef = (cellElement) => {
		if (!containerRef.current || !cellElement) return;

		const cellBottom = cellElement.offsetTop + cellElement.offsetHeight + 80;
		const container = containerRef.current;
		const containerBottom = container.scrollTop + container.offsetHeight;

		if (cellBottom > containerBottom) {
			setTimeout(() => {
				container.scrollBy({
					top: cellBottom - containerBottom,
					behavior: 'smooth'
				});
			}, 10);
		}
	};

	console.log(courseTableData);

	return (
		<TableContainer>
			<SemesterContainer>
				{SemesterTable.map((row, rowIndex) => (
					<SemesterColumn key={rowIndex}>
						{row.map((cellData) => (
							<Cell key={cellData.haksuId} cellData={cellData} rowIndex={rowIndex} unclickable={true} />
						))}
					</SemesterColumn>
				))}
			</SemesterContainer>
			<CourseContainer ref={containerRef}>
				{courseTableData.map((row, rowIndex) => (
					<CourseColumn key={rowIndex}>
						{row.map((cellData, cellIndex) => (
							<CourseCell
								key={cellIndex}
								cellData={cellData}
								rowIndex={rowIndex}
								onClickSendRef={handleCellClickSendRef}
							/>
						))}
					</CourseColumn>
				))}
			</CourseContainer>
		</TableContainer>
	);
};

export default CourseTable;
