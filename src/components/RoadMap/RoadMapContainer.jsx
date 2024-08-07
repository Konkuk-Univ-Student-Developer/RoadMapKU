import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import useClient from '../../hooks/useClient';
import { competencyListInSubjectState } from '../../recoils/atoms';
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
	user-select: none;
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
	user-select: none;
	font-size: small;

	&:hover {
		background-color: #459423;
	}
`;

const RoadMapContainer = ({ show }) => {
	const competencyListInSubject = useRecoilValue(competencyListInSubjectState);
	const subjectName = competencyListInSubject.subjectName;
	const competencyList = competencyListInSubject.competencies;

	const { fetchCompetencyListInSubject } = useClient();

	const [roadMapTableData, setRoadMapTableData] = useState([
		[{ courseName: '2-1' }],
		[{ courseName: '2-2' }],
		[{ courseName: '3-1' }],
		[{ courseName: '3-2' }],
		[{ courseName: '4-1' }],
		[{ courseName: '4-2' }]
	]);
	const [myTableData, setMyTableData] = useState([
		[{ courseName: '2-1' }],
		[{ courseName: '2-2' }],
		[{ courseName: '3-1' }],
		[{ courseName: '3-2' }],
		[{ courseName: '4-1' }],
		[{ courseName: '4-2' }]
	]);
	const [myCompetencyList, setMyCompetencyList] = useState([]);

	useEffect(() => {
		fetchCompetencyListInSubject();
	}, []);

	useEffect(() => {
		if (!competencyListInSubject.subjectCode) {
			console.log('courseByCompetencyInSubject is empty');
		} else {
			const haksuIdToCompetencyMap = new Map();
			let delay = 0;
			const updatedRoadMapTableData = [...roadMapTableData];
			competencyList.forEach((competency) => {
				competency.courses.forEach((course) => {
					const { year, semester, haksuId, courseName } = course;
					const semesterIndex = semester === '1학기' ? 0 : 1;
					const index = (year - 2) * 2 + semesterIndex;
					if (!haksuIdToCompetencyMap.has(haksuId)) {
						haksuIdToCompetencyMap.set(haksuId, []);
					}
					haksuIdToCompetencyMap.get(haksuId).push(competency.competencyCode);
					setTimeout(() => {
						setRoadMapTableData((prevItems) => {
							const updatedRoadMapTableData = [...prevItems];
							const isDuplicate = updatedRoadMapTableData[index].some((item) => item.haksuId === haksuId);
							if (!isDuplicate) {
								updatedRoadMapTableData[index] = [
									...updatedRoadMapTableData[index],
									{
										haksuId: haksuId,
										courseName: courseName,
										competencyCodes: haksuIdToCompetencyMap.get(haksuId)
									}
								];
							}
							return updatedRoadMapTableData;
						});
					}, delay);
					delay += 50;
				});
			});
			setRoadMapTableData(updatedRoadMapTableData);
		}
	}, [competencyListInSubject]);

	useEffect(() => {
		const competencyArray = [];
		myTableData.forEach((row) => {
			row.forEach((cellData) => {
				if (Array.isArray(cellData.competencyCodes)) {
					competencyArray.push(...cellData.competencyCodes);
				}
			});
		});
		const uniqueCompetencyArray = competencyArray.filter((item, index, self) => self.indexOf(item) === index);
		const updatedMyCompetencyList = [...findCompetencyByCode(uniqueCompetencyArray)];
		setMyCompetencyList(updatedMyCompetencyList);
	}, [myTableData]);

	function findCompetencyByCode(competencyCodes) {
		// Find competencies for each code in the array
		const competencies = competencyCodes.map((code) => {
			return competencyList.find((item) => item.competencyCode === code);
		});
		return competencies;
	}

	const [unclickableCells, setUnclickableCells] = useState([]);
	const handleCellClick_add = (cellData, rowIndex) => {
		if (unclickableCells.some((cell) => cell.row === rowIndex && cell.cellData === cellData)) return;

		// Set cell as unclickable
		const updatedUnclickableCells = [...unclickableCells];
		updatedUnclickableCells.push({ cellData: cellData, row: rowIndex });
		setUnclickableCells(updatedUnclickableCells);

		// Update myTableData to add the clicked cell's data
		const updatedMyTableData = [...myTableData];
		updatedMyTableData[rowIndex].push(cellData);
		setMyTableData(updatedMyTableData);
	};
	const handleCellClick_remove = (cellData, rowIndex) => {
		// Remove cell from unclickableCells
		const updatedUnclickableCells = unclickableCells.filter(
			(cell) => !(cell.row === rowIndex && cell.cellData === cellData)
		);
		setUnclickableCells(updatedUnclickableCells);

		// Update myTableData to remove the clicked cell's data
		const updatedMyTableData = [...myTableData];
		const cellIndex = updatedMyTableData[rowIndex].indexOf(cellData);
		if (cellIndex !== -1) {
			updatedMyTableData[rowIndex].splice(cellIndex, 1);
		}
		setMyTableData(updatedMyTableData);
	};

	return (
		<Container className={`content ${show ? 'with-sidebar' : 'full-width'}`}>
			<TitleWrapper>
				<Title>학과 로드맵</Title>
				<Button>{subjectName} 로드맵 보기</Button>
			</TitleWrapper>
			<RoadMapTable
				competencyTableData={competencyList}
				roadMapTableData={roadMapTableData}
				onCellClick={handleCellClick_add}
				unclickableCells={unclickableCells}
			/>
			<TitleWrapper>
				<Title>내 로드맵</Title>
			</TitleWrapper>
			<RoadMapTable
				competencyTableData={myCompetencyList}
				roadMapTableData={myTableData}
				onCellClick={handleCellClick_remove}
				unclickableCells={[]}
			/>
		</Container>
	);
};

export default RoadMapContainer;
