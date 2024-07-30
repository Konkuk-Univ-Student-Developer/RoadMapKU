import React from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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

const animationTiming = {
	enter: 400,
	exit: 0
};

const RoadMapTable = ({ tableData, onCellClick, unclickableCells }) => {
	return (
		<TableContainer>
			<MajorCompetencyTable />
			{tableData.map((row, rowIndex) => (
				<TransitionGroup component={ColumnSemester} key={rowIndex}>
					{row.map((cellData, colIndex) => (
						<CSSTransition key={cellData} timeout={animationTiming} classNames="Bounce">
							<Cell
								cellData={cellData}
								rowIndex={rowIndex}
								onClick={onCellClick}
								unclickable={
									unclickableCells.some((cell) => cell.row === rowIndex && cell.cellData === cellData) || colIndex === 0
								}
							/>
						</CSSTransition>
					))}
				</TransitionGroup>
			))}
		</TableContainer>
	);
};

export default RoadMapTable;
