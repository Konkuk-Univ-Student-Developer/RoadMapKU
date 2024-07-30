import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RoadMapTable from './RoadMapTable';

const Container = styled.div`
	margin-left: auto;
	display: flex;
	flex-direction: column;
	transition: width 500ms ease-in-out;

	&.with-sidebar {
		width: calc(100% - 20rem);
	}

	&.full-width {
		width: 100%;
	}
`;

const TitleWrapper = styled.div`
	padding-left: 1rem;
	padding-right: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.div`
	font-size: xx-large;
	font-weight: bolder;
	color: #036b3f;
`;

const Button = styled.button`
	height: 2rem;
	width: 23rem;
	background-color: #54ad2d;
	color: white;
	border: none;
	border-radius: 0.2rem;
	padding: 0.5rem 1rem;
	cursor: pointer;
	font-size: small;

	&:hover {
		background-color: #459423;
	}
`;

const RoadMapContainer = ({ show }) => {
	const [tableDataDefault, setTableDataDefault] = useState([['2-1'], ['2-2'], ['3-1'], ['3-2'], ['4-1'], ['4-2']]);
	const [tableDataWithData, setTableDataWithData] = useState([['2-1'], ['2-2'], ['3-1'], ['3-2'], ['4-1'], ['4-2']]);

	const courseData = [['A1', 'A2', 'A3'], ['B1', 'B2'], ['C1'], ['D1', 'D2', 'D3'], ['E1', 'E2'], ['F1']];

	useEffect(() => {
		let delay = 0;
		courseData.forEach((row, rowIndex) => {
			row.forEach((item) => {
				setTimeout(() => {
					setTableDataWithData((prevItems) => {
						const newItems = [...prevItems];
						newItems[rowIndex] = [...newItems[rowIndex], item];
						return newItems;
					});
				}, delay);
				delay += 50;
			});
		});
	}, []);

	const [unclickableCells, setUnclickableCells] = useState([]);

	const handleCellClick_add = (cellData, rowIndex) => {
		if (unclickableCells.some((cell) => cell.row === rowIndex && cell.cellData === cellData)) return;

		// Set cell as unclickable
		const updatedUnclickableCells = [...unclickableCells];
		updatedUnclickableCells.push({ cellData: cellData, row: rowIndex });
		setUnclickableCells(updatedUnclickableCells);

		// Update tableDataDefault to add the clicked cell's data
		const updatedTableDataDefault = [...tableDataDefault];
		updatedTableDataDefault[rowIndex].push(cellData);
		setTableDataDefault(updatedTableDataDefault);
	};

	const handleCellClick_remove = (cellData, rowIndex) => {
		// Remove cell from unclickableCells
		const updatedUnclickableCells = unclickableCells.filter(
			(cell) => !(cell.row === rowIndex && cell.cellData === cellData)
		);
		setUnclickableCells(updatedUnclickableCells);

		// Update tableDataDefault to remove the clicked cell's data
		const updatedTableDataDefault = [...tableDataDefault];
		const cellIndex = updatedTableDataDefault[rowIndex].indexOf(cellData);
		if (cellIndex !== -1) {
			updatedTableDataDefault[rowIndex].splice(cellIndex, 1);
		}
		setTableDataDefault(updatedTableDataDefault);
	};

	return (
		<Container className={`content ${show ? 'with-sidebar' : 'full-width'}`}>
			<TitleWrapper>
				<Title>학과 로드맵</Title>
				<Button>컴퓨터공학부 로드맵 보기</Button>
			</TitleWrapper>
			<RoadMapTable
				tableData={tableDataWithData}
				onCellClick={handleCellClick_add}
				unclickableCells={unclickableCells}
			/>
			<TitleWrapper>
				<Title>내 로드맵</Title>
			</TitleWrapper>
			<RoadMapTable tableData={tableDataDefault} onCellClick={handleCellClick_remove} unclickableCells={[]} />
		</Container>
	);
};

export default RoadMapContainer;
