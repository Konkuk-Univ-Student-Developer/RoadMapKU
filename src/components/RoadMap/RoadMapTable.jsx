import React from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CompetencyTable from './CompetencyTable';
import Cell from './RoadMapCell';

const TableContainer = styled.div`
	height: 27rem;
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	padding: 1rem;
`;

const CourseContainer = styled.div`
	width: 85%;
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	margin: 0;
	overflow-y: scroll;
`;

const ColumnSemester = styled.div`
	width: 12.5%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const animationTiming = {
	enter: 400,
	exit: 400
};

const RoadMapTable = ({
	competencyTableData,
	roadMapTableData,
	onCellClick,
	unclickableCells,
	onCompetencyClick,
	isHighlighted,
	competencyCode
}) => {
	return (
		<TableContainer>
			<CompetencyTable competencyTableData={competencyTableData} onClick={onCompetencyClick} />
			<CourseContainer>
				{roadMapTableData.map((row, rowIndex) => (
					<TransitionGroup component={ColumnSemester} key={rowIndex}>
						{row.map((cellData) => (
							<CSSTransition key={cellData.haksuId + rowIndex} timeout={animationTiming} classNames="Bounce">
								<Cell
									cellData={cellData}
									rowIndex={rowIndex}
									onClick={onCellClick}
									unclickable={unclickableCells.some((cell) => cell.cellData.haksuId === cellData.haksuId)}
									isHighlighted={isHighlighted}
									competencyCode={competencyCode}
								/>
							</CSSTransition>
						))}
					</TransitionGroup>
				))}
			</CourseContainer>
		</TableContainer>
	);
};

export default RoadMapTable;
