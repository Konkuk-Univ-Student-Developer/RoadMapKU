import React from 'react';
import styled from 'styled-components';
import MajorCompetencyTable from './MajorCompetencyTable';
import Cell from './RoadMapCell';

const TableContainer = styled.div`
	height: 25rem;
	display: flex;
	flex-direction: row;
	padding: 1rem;
	gap: 0.5rem;
`;

const ColumnSemester = styled.div`
	width: 12%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const RoadMapTable = ({ tableData, onCellClick, unclickableCells }) => {
	return (
		<TableContainer>
			<MajorCompetencyTable />
			{tableData.map((row, rowIndex) => (
				<ColumnSemester key={rowIndex}>
					{row.map((cellData, colIndex) => (
						<Cell
							key={cellData}
							cellData={cellData}
							rowIndex={rowIndex}
							onClick={onCellClick}
							unclickable={
								unclickableCells.some((cell) => cell.row === rowIndex && cell.cellData === cellData) || colIndex === 0
							}
						/>
					))}
				</ColumnSemester>
			))}
		</TableContainer>
	);
};

export default RoadMapTable;
