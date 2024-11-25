import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Cell from './RoadMapCell';
import Cell2 from './RoadMapCell2/RoadMapCell2';

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
	const [containerScrollTopPosition, setContainerScrollTopPosition] = useState(null);

	useEffect(() => {
		const container = containerRef.current;

		if (container) {
			container.addEventListener('scroll', handleScroll);
			handleScroll();

			return () => container.removeEventListener('scroll', handleScroll);
		}
	}, []);

	const handleScroll = () => {
		if (containerRef.current) {
			const container = containerRef.current;

			// 현재 컨테이너의 뷰포트 기준 바닥(top)의 위치 계산
			const containerOffsetTop = container.scrollTop;
			setContainerScrollTopPosition(containerOffsetTop);
		}
	};

	const handleCellClickSendRef = (top) => {
		if (top - 816 > containerScrollTopPosition + 320) {
			if (containerRef.current) {
				setTimeout(() => {
					containerRef.current.scrollBy({
						top: 100,
						behavior: 'smooth' // 부드러운 스크롤
					});
				}, 10);
			}
		}
	};

	return (
		<TableContainer>
			<SemesterContainer>
				{defaultTable.map((row, rowIndex) => (
					<SemesterColumn key={rowIndex}>
						{row.map((cellData) => (
							<Cell key={cellData.haksuId} cellData={cellData} rowIndex={rowIndex} unclickable={true} />
						))}
					</SemesterColumn>
				))}
			</SemesterContainer>
			<CourseContainer ref={containerRef}>
				{roadMapTableData.map((row, rowIndex) => (
					<CourseColumn key={rowIndex}>
						{row.slice(1).map((cellData, cellIndex) => (
							<Cell2
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
