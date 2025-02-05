import React, { useRef } from 'react';
import styled from 'styled-components';
import { RoadMapCell, DropDownCell } from '@components/RoadMap/old/RoadMap';

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

const RoadMapTable = ({ roadMapTableData, onCellClick, unclickableCells, highlightedCompetency }) => {
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

	return (
		<TableContainer>
			<SemesterContainer>
				{defaultTable.map((row, rowIndex) => (
					<SemesterColumn key={rowIndex}>
						{row.map((cellData) => (
							<RoadMapCell key={cellData.haksuId} cellData={cellData} rowIndex={rowIndex} unclickable={true} />
						))}
					</SemesterColumn>
				))}
			</SemesterContainer>
			<CourseContainer ref={containerRef}>
				{roadMapTableData.map((row, rowIndex) => (
					<CourseColumn key={rowIndex}>
						{row.slice(1).map((cellData, cellIndex) => (
							<DropDownCell
								key={cellIndex}
								cellData={cellData}
								rowIndex={rowIndex}
								onClick={onCellClick}
								unclickable={unclickableCells.some((cell) => cell.haksuId === cellData.haksuId)}
								highlightedCompetency={highlightedCompetency}
								onClickSendRef={handleCellClickSendRef}
							/>
						))}
					</CourseColumn>
				))}
			</CourseContainer>
		</TableContainer>
	);
};

export default RoadMapTable;
