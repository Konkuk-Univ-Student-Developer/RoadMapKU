import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import html2canvas from 'html2canvas';
import { courseByCompetencyInSubjectState, selectedSubjectState, totalRoadMapState } from '../../recoils/atoms';
import RoadMapTable from './RoadMapTable';
import TotalRoadMapModal from '../TotalRoadMapContents/totalRoadMapModal';
import useField from '../../hooks/useField';
import { Icon } from '@iconify/react';
import bxCamera from '@iconify-icons/bx/bx-camera';

const Container = styled.div`
	min-width: 50rem;
	display: flex;
	flex-direction: column;
`;

const Content = styled.div`
	padding-top: 10px;
`;
const TitleWrapper = styled.div`
	height: 4vh;
	padding-top: 0.5rem;
	padding-left: 1.5rem;
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
	width: 25rem;
	background-color: #036b3f;
	color: white;
	border: none;
	border-radius: 0.2rem;
	padding: 0.5rem;
	cursor: pointer;
	user-select: none;
	font-size: small;
	transition: background-color 0.3s ease-out;

	&:hover,
	&:active {
		background-color: #02472a;
	}
`;

const FloatingButton = styled.button`
	position: fixed;
	bottom: 20px;
	right: 20px;
	background-color: #036b3f;
	color: white;
	border: none;
	border-radius: 50%;
	width: 60px;
	height: 60px;
	font-size: 24px;
	cursor: pointer;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

	display: flex;
	justify-content: center;
	align-items: center;

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

const findCompetencyByCode = (competencyCodes, competencyTable) => {
	const competencies = competencyCodes.map((code) => {
		return competencyTable.find((item) => item.competencyCode === code);
	});
	return competencies;
};

const RoadMapContainer = () => {
	const courseByCompetencyInSubject = useRecoilValue(courseByCompetencyInSubjectState);
	const totalRoadMap = useRecoilValue(totalRoadMapState);
	const { subjectName, subjectCode } = useRecoilValue(selectedSubjectState);
	const { fetchCoursesInSubject } = useField();

	const [competencyList, setCompetencyList] = useState(courseByCompetencyInSubjectState);
	const [roadMapTableData, setRoadMapTableData] = useState(JSON.parse(JSON.stringify(defaultTable)));
	const [myTableData, setMyTableData] = useState(JSON.parse(JSON.stringify(defaultTable)));
	const [myCompetencyList, setMyCompetencyList] = useState([]);
	const [competencyTable, setCompetencyTable] = useState([]);
	const [totalRoadMapData, setTotalRoadMapData] = useState([]);
	const roadmapContentRef = useRef(null);

	// 다른 전공을 클릭했을 때 테이블 초기화
	useEffect(() => {
		setRoadMapTableData(JSON.parse(JSON.stringify(defaultTable)));
	}, [courseByCompetencyInSubject, subjectCode]);

	useEffect(() => {
		if (!Array.isArray(courseByCompetencyInSubject)) {
			console.log('courseByCompetencyInSubject is empty');
		} else {
			setCompetencyList(courseByCompetencyInSubject);

			// haksuIdToCompetencyMap: 과목이 가지는 전공역량들을 배열로 저장
			const haksuIdToCompetencyMap = new Map();
			let max_length = 0;

			// 데이터 가공
			const updatedRoadMapTableData = JSON.parse(JSON.stringify(defaultTable));
			courseByCompetencyInSubject.forEach((competency) => {
				const { competencyCode } = competency;
				// 조회했던 전공역량 모두 저장: 내 로드맵에서 전공역량을 조회해야하기 때문
				setCompetencyTable((prev) => {
					const updatedCompetencyTable = [...prev];
					if (!updatedCompetencyTable.find((item) => item.competencyCode === competencyCode)) {
						updatedCompetencyTable.push(competency);
					}
					return updatedCompetencyTable;
				});
				competency.courseGetResponseList.forEach((course) => {
					const { openingYear, openingSemester, haksuId, name } = course;
					const semesterIndex = openingSemester === '2학기' ? 1 : 0;
					const openingYear_include9 = openingYear > 4 ? 4 : openingYear;
					const index = (openingYear_include9 - 1) * 2 + semesterIndex;

					if (!haksuIdToCompetencyMap.has(haksuId)) {
						haksuIdToCompetencyMap.set(haksuId, []);
					}
					haksuIdToCompetencyMap.get(haksuId).push(competency.competencyCode);

					updatedRoadMapTableData[index] = [
						...updatedRoadMapTableData[index],
						{
							haksuId: haksuId,
							courseName: name,
							competencyCodes: haksuIdToCompetencyMap.get(haksuId),
							isMyTable: false
						}
					];
					if (openingSemester === '1,2학기') {
						updatedRoadMapTableData[index + 1] = [
							...updatedRoadMapTableData[index + 1],
							{
								haksuId: haksuId,
								courseName: name,
								competencyCodes: haksuIdToCompetencyMap.get(haksuId),
								isMyTable: false
							}
						];
					}

					// 가장 긴 배열 탐색
					if (updatedRoadMapTableData[index].length > max_length) {
						max_length = updatedRoadMapTableData[index].length;
					}
				});
			});

			// 애니메이션이 적용되도록 배열에 내용을 시간차로 insert
			let delay = 200;
			let animationTime = Math.floor(100 / max_length);
			updatedRoadMapTableData.forEach((courseRow, index) => {
				courseRow.slice(1).forEach((item) => {
					setTimeout(() => {
						setRoadMapTableData((prev) => {
							const sortedTableData = [...prev];
							sortedTableData[index].push(item);
							return sortedTableData;
						});
					}, delay);
					delay += animationTime;
				});
			});
		}
	}, [courseByCompetencyInSubject]);

	useEffect(() => {
		if (!Array.isArray(totalRoadMap)) {
			console.log('totalRoadMap is empty');
		} else {
			// 데이터 가공
			const updatedRoadMapTableData = JSON.parse(JSON.stringify(defaultTable));
			totalRoadMap.forEach((course) => {
				const { openingYear, openingSemester, haksuId, name } = course;
				const semesterIndex = openingSemester === '2학기' ? 1 : 0;
				const openingYear_include9 = openingYear > 4 ? 4 : openingYear;
				const index = (openingYear_include9 - 1) * 2 + semesterIndex;

				updatedRoadMapTableData[index] = [
					...updatedRoadMapTableData[index],
					{
						haksuId: haksuId,
						courseName: name,
						competencyCodes: [],
						isMyTable: false
					}
				];
				if (openingSemester === '1,2학기') {
					updatedRoadMapTableData[index + 1] = [
						...updatedRoadMapTableData[index + 1],
						{
							haksuId: haksuId,
							courseName: name,
							competencyCodes: [],
							isMyTable: false
						}
					];
				}
			});
			setTotalRoadMapData(updatedRoadMapTableData);
		}
	}, [totalRoadMap]);

	// 내 로드맵 변경 시 내 로드맵 과목들의 역량을 찾아 채우는 기능
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
		const updatedMyCompetencyList = [...findCompetencyByCode(uniqueCompetencyArray, competencyTable)];
		setMyCompetencyList(updatedMyCompetencyList);
	}, [myTableData, competencyTable]);

	// 역량에 해당하는 과목들 하이라이트하는 기능
	const [highlightedCompetencies, setHighlightedCompetencies] = useState({});
	const handleCellClick_highlight = (selectedCompetencyCode) => {
		setHighlightedCompetencies((prev) => {
			const updatedHighlightedCompetencies = {};
			for (let competencyCode in prev) {
				updatedHighlightedCompetencies[competencyCode] = false;
			}
			updatedHighlightedCompetencies[selectedCompetencyCode] = !prev[selectedCompetencyCode];
			return updatedHighlightedCompetencies;
		});
	};
	const [highlightedCompetency, setHighlightedCompetency] = useState('');
	useEffect(() => {
		const highlightedCode = Object.keys(highlightedCompetencies).find((code) => highlightedCompetencies[code] === true);
		if (highlightedCode) {
			setHighlightedCompetency(highlightedCode);
		} else {
			setHighlightedCompetency('no_highlight');
		}
	}, [highlightedCompetencies]);

	// 학과 로드맵 Cell Click 이벤트
	const [unclickableCells, setUnclickableCells] = useState([]);
	const handleCellClick_add = (cellData, rowIndex) => {
		const updatedUnclickableCells = [...unclickableCells];
		updatedUnclickableCells.push({ cellData: cellData, row: rowIndex });
		setUnclickableCells(updatedUnclickableCells);

		const updatedMyTableData = [...myTableData];
		const copiedCellData = { ...cellData, isMyTable: true };
		updatedMyTableData[rowIndex].push(copiedCellData);
		setMyTableData(updatedMyTableData);
	};
	// 내 로드맵 Cell Click 이벤트
	const handleCellClick_remove = (cellData, rowIndex) => {
		const updatedUnclickableCells = unclickableCells.filter((cell) => !(cell.cellData.haksuId === cellData.haksuId));
		setUnclickableCells(updatedUnclickableCells);

		const updatedMyTableData = [...myTableData];
		const cellIndex = updatedMyTableData[rowIndex].indexOf(cellData);
		if (cellIndex !== -1) {
			updatedMyTableData[rowIndex].splice(cellIndex, 1);
		}
		setMyTableData(updatedMyTableData);
	};

	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const showRoadMapHandler = () => {
		fetchCoursesInSubject(subjectCode);
		setIsDetailOpen(true);
	};

	const handleCaptureButtonClick = () => {
		if (roadmapContentRef.current) {
			html2canvas(roadmapContentRef.current)
				.then((canvas) => {
					const link = document.createElement('a');
					link.href = canvas.toDataURL('image/png');
					link.download = 'roadmap.png';
					link.click();
				})
				.catch((error) => {
					console.error('Error capturing the element:', error);
				});
		} else {
			console.error('Roadmap content is not available');
		}
	};

	return (
		<Container>
			<TitleWrapper>
				<Title>학과 로드맵</Title>
				{subjectCode > 0 && <Button onClick={showRoadMapHandler}>{subjectName} 전체 로드맵 보기</Button>}
				{isDetailOpen && (
					<TotalRoadMapModal
						onClose={() => {
							setIsDetailOpen(false);
						}}
						roadMapData={totalRoadMapData}
						subjectName={subjectName}
					/>
				)}
			</TitleWrapper>
			<RoadMapTable
				competencyTableData={competencyList}
				roadMapTableData={roadMapTableData}
				onCellClick={handleCellClick_add}
				unclickableCells={unclickableCells}
				onCompetencyClick={handleCellClick_highlight}
				highlightedCompetency={highlightedCompetency}
			/>
			<Content ref={roadmapContentRef} id="roadmap-content">
				<TitleWrapper>
					<Title>내 로드맵</Title>
				</TitleWrapper>
				<RoadMapTable
					competencyTableData={myCompetencyList}
					roadMapTableData={myTableData}
					onCellClick={handleCellClick_remove}
					unclickableCells={[]}
					onCompetencyClick={handleCellClick_highlight}
					highlightedCompetency={highlightedCompetency}
				/>
			</Content>

			<FloatingButton onClick={handleCaptureButtonClick}>
				<Icon icon={bxCamera} />
			</FloatingButton>
		</Container>
	);
};

export default RoadMapContainer;
