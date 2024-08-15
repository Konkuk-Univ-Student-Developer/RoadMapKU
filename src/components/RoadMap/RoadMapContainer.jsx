import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { courseByCompetencyInSubjectState, selectedSubjectState } from '../../recoils/atoms';
import RoadMapTable from './RoadMapTable';
import useField from '../../hooks/useField';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	transition: width 500ms ease-in-out;
	width: 100%;

	&.full-width {
		width: 100%;
	}
`;

const TitleWrapper = styled.div`
	padding-left: 1rem;
	padding-right: 2rem;
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
	width: 25rem;
	background-color: #036b3f;
	color: white;
	border: none;
	border-radius: 0.2rem;
	padding: 0.5rem 1rem;
	cursor: pointer;
	user-select: none;
	font-size: small;

	&:hover {
		background-color: #02472a;
	}
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

const RoadMapContainer = ({ show }) => {
	const courseByCompetencyInSubject = useRecoilValue(courseByCompetencyInSubjectState);
	const { subjectName, subjectCode } = useRecoilValue(selectedSubjectState);
	const { fetchCoursesInSubject } = useField();

	const [roadMapTableData, setRoadMapTableData] = useState(defaultTable);
	const [myTableData, setMyTableData] = useState(defaultTable);
	const [myCompetencyList, setMyCompetencyList] = useState([]);
	const [competencyTable, setCompetencyTable] = useState([]);

	// 다른 전공을 클릭했을 때 테이블 초기화
	useEffect(() => {
		setRoadMapTableData([
			[{ haksuId: '0', courseName: '1 - 1' }],
			[{ haksuId: '0', courseName: '1 - 2' }],
			[{ haksuId: '0', courseName: '2 - 1' }],
			[{ haksuId: '0', courseName: '2 - 2' }],
			[{ haksuId: '0', courseName: '3 - 1' }],
			[{ haksuId: '0', courseName: '3 - 2' }],
			[{ haksuId: '0', courseName: '4 - 1' }],
			[{ haksuId: '0', courseName: '4 - 2' }]
		]);
	}, [subjectCode]);

	useEffect(() => {
		if (!courseByCompetencyInSubject[0]) {
			console.log('courseByCompetencyInSubject is empty');
		} else {
			// haksuIdToCompetencyMap: 과목이 가지는 전공역량들을 배열로 저장
			const haksuIdToCompetencyMap = new Map();

			// 데이터 가공
			const updatedRoadMapTableData = [...roadMapTableData];
			courseByCompetencyInSubject.forEach((competency) => {
				const { competencyCode } = competency;
				setCompetencyTable((prev) => {
					const updatedCompetencyTable = [...prev];
					if (!updatedCompetencyTable.find((item) => item.competencyCode === competencyCode)) {
						updatedCompetencyTable.push(competency);
					}
					return updatedCompetencyTable;
				});
				competency.courseGetResponseList.forEach((course) => {
					const { openingYear, openingSemester, haksuId, name } = course;
					const semesterIndex = openingSemester === '1학기' ? 0 : 1;
					const index = (openingYear - 1) * 2 + semesterIndex;
					if (!haksuIdToCompetencyMap.has(haksuId)) {
						haksuIdToCompetencyMap.set(haksuId, []);
					}
					haksuIdToCompetencyMap.get(haksuId).push(competency.competencyCode);

					updatedRoadMapTableData[index] = [
						...updatedRoadMapTableData[index],
						{
							haksuId: haksuId,
							courseName: name,
							competencyCodes: haksuIdToCompetencyMap.get(haksuId)
						}
					];
					if (openingSemester === '1,2학기') {
						updatedRoadMapTableData[index - 1] = [
							...updatedRoadMapTableData[index - 1],
							{
								haksuId: haksuId,
								courseName: name,
								competencyCodes: haksuIdToCompetencyMap.get(haksuId)
							}
						];
					}
				});
			});

			// 애니메이션이 적용되도록 배열에 내용을 시간차로 insert
			let delay = 200;
			updatedRoadMapTableData.forEach((innerArray, index) => {
				innerArray.forEach((item) => {
					setTimeout(() => {
						setRoadMapTableData((prev) => {
							const sortedTableData = [...prev];
							sortedTableData[index].push(item);
							return sortedTableData;
						});
					}, delay);
					delay += 5;
				});
			});
		}
	}, [courseByCompetencyInSubject]);

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
		const competencies = competencyCodes.map((code) => {
			return competencyTable.find((item) => item.competencyCode === code);
		});
		return competencies;
	}

	const [isHighlighted, setIsHighlighted] = useState(false);
	const [competencyCode, setCompetencyCode] = useState('');
	const handleCellClick_highlight = (competencyCode) => {
		if (isHighlighted) {
			console.log('isHighlighted: ', false);
			setIsHighlighted(false);
		} else {
			setIsHighlighted(true);
			console.log('isHighlighted: ', true);
		}
		setCompetencyCode(competencyCode);
	};

	// Cell Click 이벤트
	const [unclickableCells, setUnclickableCells] = useState([]);
	const handleCellClick_add = (cellData, rowIndex) => {
		if (unclickableCells.some((cell) => cell.cellData.haksuId === cellData.haksuId)) return;

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
		const updatedUnclickableCells = unclickableCells.filter((cell) => !(cell.cellData.haksuId === cellData.haksuId));
		setUnclickableCells(updatedUnclickableCells);

		// Update myTableData to remove the clicked cell's data
		const updatedMyTableData = [...myTableData];
		const cellIndex = updatedMyTableData[rowIndex].indexOf(cellData);
		if (cellIndex !== -1) {
			updatedMyTableData[rowIndex].splice(cellIndex, 1);
		}
		setMyTableData(updatedMyTableData);
	};

	const showRoadMapHandler = () => {
		fetchCoursesInSubject(subjectCode);
	};

	return (
		<Container className={`content ${show ? 'with-sidebar' : 'full-width'}`}>
			<TitleWrapper>
				<Title>학과 로드맵</Title>
				{subjectCode > 0 && <Button onClick={showRoadMapHandler}>{subjectName} 로드맵 보기</Button>}
			</TitleWrapper>
			<RoadMapTable
				competencyTableData={courseByCompetencyInSubject}
				roadMapTableData={roadMapTableData}
				onCellClick={handleCellClick_add}
				unclickableCells={unclickableCells}
				onCompetencyClick={handleCellClick_highlight}
				isHighlighted={isHighlighted}
				competencyCode={competencyCode}
			/>
			<TitleWrapper>
				<Title>내 로드맵</Title>
			</TitleWrapper>
			<RoadMapTable
				competencyTableData={myCompetencyList}
				roadMapTableData={myTableData}
				onCellClick={handleCellClick_remove}
				unclickableCells={[]}
				onCompetencyClick={handleCellClick_highlight}
				isHighlighted={isHighlighted}
				competencyCode={competencyCode}
			/>
		</Container>
	);
};

export default RoadMapContainer;
