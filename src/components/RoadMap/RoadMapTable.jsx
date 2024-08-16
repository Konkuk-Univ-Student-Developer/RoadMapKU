import React from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CompetencyTable from './CompetencyTable';
import Cell from './RoadMapCell';

const RoadMapContainer = styled.div`
	height: 27rem;
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	padding-left: 1rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
`;

const TableContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	overflow: hidden;
`;

const SemesterContainer = styled.div`
	height: 2.2rem;
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	overflow-y: scroll;
	overflow-x: hidden;
`;

const CourseContainer = styled.div`
	height: 24.8rem;
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

const animationTiming = {
	enter: 400,
	exit: 400
};

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

const RoadMapTable = ({
	competencyTableData,
	roadMapTableData,
	onCellClick,
	unclickableCells,
	onCompetencyClick,
	highlightedCompetency
}) => {
	return (
		<RoadMapContainer>
			<CompetencyTable
				competencyTableData={competencyTableData}
				onClick={onCompetencyClick}
				highlightedCompetency={highlightedCompetency}
			/>
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
					{roadMapTableData.map((row, rowIndex) => (
						<TransitionGroup component={CourseColumn} key={rowIndex}>
							{row.slice(1).map((cellData) => (
								<CSSTransition key={cellData.haksuId + rowIndex} timeout={animationTiming} classNames="Bounce">
									<Cell
										cellData={cellData}
										rowIndex={rowIndex}
										onClick={onCellClick}
										unclickable={unclickableCells.some((cell) => cell.cellData.haksuId === cellData.haksuId)}
										highlightedCompetency={highlightedCompetency}
									/>
								</CSSTransition>
							))}
						</TransitionGroup>
					))}
				</CourseContainer>
			</TableContainer>
		</RoadMapContainer>
	);
};

export default RoadMapTable;
