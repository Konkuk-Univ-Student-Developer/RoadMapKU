import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Cell from './RoadMapCell';
import Cell2 from './RoadMapCell2';

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

const RoadMapTable = ({ roadMapTableData, onCellClick, unclickableCells, highlightedCompetency }) => {
	const refs = useRef(roadMapTableData.map((row) => row.slice(1).map(() => React.createRef()))).current;

	const [openDropdownIndex, setOpenDropdownIndex] = useState({ rowIndex: null, cellIndex: null });

	// 현재 열려 있는 드롭다운을 클릭한 경우 닫기
	const handleDropdownToggle = (rowIndex, cellIndex) => {
		if (openDropdownIndex.rowIndex === rowIndex && openDropdownIndex.cellIndex === cellIndex) {
			setOpenDropdownIndex({ rowIndex: null, cellIndex: null });
		} else {
			setOpenDropdownIndex({ rowIndex, cellIndex });
		}
	};

	return (
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
						{row.slice(1).map((cellData, cellIndex) => (
							<CSSTransition
								key={cellData.haksuId}
								timeout={animationTiming}
								classNames="Bounce"
								nodeRef={refs[rowIndex][cellIndex]}
							>
								<Cell2
									ref={refs[rowIndex][cellIndex]}
									cellData={cellData}
									rowIndex={rowIndex}
									onClick={onCellClick}
									unclickable={unclickableCells.some((cell) => cell.haksuId === cellData.haksuId)}
									highlightedCompetency={highlightedCompetency}
									isDropdownOpen={openDropdownIndex.rowIndex === rowIndex && openDropdownIndex.cellIndex === cellIndex} // 현재 드롭다운이 열려 있는지 확인
									onDropdownToggle={() => handleDropdownToggle(rowIndex, cellIndex)} // 열고 닫는 함수 전달
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
