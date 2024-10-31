import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import pako from 'pako';
// import queryString from 'query-string';
import html2canvas from 'html2canvas';
import { courseByCompetencyInSubjectState, selectedSubjectState, totalRoadMapState } from '../../recoils/atoms';
import RoadMapContents from './RoadMapContents';
import CourseCreditTable from './CourseCreditTable';
import TotalRoadMapModal from '../TotalRoadMapContents/totalRoadMapModal';
import useField from '../../hooks/useField';
import SaveButton from './SaveButton';

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

const data = [
	[
		{ haksuId: '0', courseName: '1 - 1' },
		{
			haksuId: 'BBAB05021',
			courseName: '컴퓨터공학개론',
			courseCredit: '3',
			subjectName: '컴퓨터공학부',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742802' }],
			isMyTable: true
		},
		{
			haksuId: 'BBAB61097',
			courseName: '테크니컬영어발표',
			courseCredit: '3',
			subjectName: '컴퓨터공학부',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742802' }],
			isMyTable: true
		}
	],
	[
		{ haksuId: '0', courseName: '1 - 2' },
		{
			haksuId: 'BBAB61224',
			courseName: '테크니컬영어말하기',
			courseCredit: '3',
			subjectName: '컴퓨터공학부',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742802' }],
			isMyTable: true
		}
	],
	[
		{ haksuId: '0', courseName: '2 - 1' },
		{
			haksuId: 'BBAB11792',
			courseName: '객체지향프로그래밍',
			courseCredit: '3',
			subjectName: '컴퓨터공학부2',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742801' }],
			isMyTable: true
		},
		{
			haksuId: 'BBAB54724',
			courseName: '웹프로그래밍',
			courseCredit: '3',
			subjectName: '컴퓨터공학부2',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742801' }],
			isMyTable: true
		},
		{
			haksuId: 'BBAB62244',
			courseName: '전공기초프로젝트1(종합설계)',
			courseCredit: '3',
			subjectName: '컴퓨터공학부2',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742802' }],
			isMyTable: true
		},
		{
			haksuId: 'BBAB61096',
			courseName: '오픈소스SW입문',
			courseCredit: '3',
			subjectName: '컴퓨터공학부2',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742802' }],
			isMyTable: true
		}
	],
	[
		{ haksuId: '0', courseName: '2 - 2' },
		{
			haksuId: 'BBAB12016',
			courseName: '소프트웨어공학',
			courseCredit: '3',
			subjectName: '컴퓨터공학부2',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742801' }],
			isMyTable: true
		},
		{
			haksuId: 'BBAB12022',
			courseName: '시스템프로그래밍',
			courseCredit: '3',
			subjectName: '컴퓨터공학부2',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742801' }],
			isMyTable: true
		},
		{
			haksuId: 'BBAB62247',
			courseName: '전공기초프로젝트2(종합설계)',
			courseCredit: '3',
			subjectName: '컴퓨터공학부2',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742802' }],
			isMyTable: true
		},
		{
			haksuId: 'BBAB51983',
			courseName: '랜덤프로세스개론',
			courseCredit: '3',
			subjectName: '컴퓨터공학부2',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742802' }],
			isMyTable: true
		}
	],
	[
		{ haksuId: '0', courseName: '3 - 1' },
		{
			haksuId: 'BBAB62251',
			courseName: '객체지향개발방법론',
			courseCredit: '3',
			subjectName: '컴퓨터공학부3',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742801' }],
			isMyTable: true
		},
		{
			haksuId: 'BBAB12050',
			courseName: '컴파일러',
			courseCredit: '3',
			subjectName: '컴퓨터공학부3',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742801' }],
			isMyTable: true
		},
		{
			haksuId: 'BBAB12111',
			courseName: '프로그래밍언어론',
			courseCredit: '3',
			subjectName: '컴퓨터공학부3',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742801' }],
			isMyTable: true
		},
		{
			haksuId: 'BBAB12190',
			courseName: '운영체제',
			courseCredit: '3',
			subjectName: '컴퓨터공학부3',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742801' }],
			isMyTable: true
		}
	],
	[
		{ haksuId: '0', courseName: '3 - 2' },
		{
			haksuId: 'BBAB12017',
			courseName: '소프트웨어아키텍처',
			courseCredit: '3',
			subjectName: '컴퓨터공학부3',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742801' }],
			isMyTable: true
		},
		{
			haksuId: 'BBAB59068',
			courseName: '클라우드웹서비스',
			courseCredit: '3',
			subjectName: '컴퓨터공학부3',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742801' }],
			isMyTable: true
		},
		{
			haksuId: 'BBAB63052',
			courseName: '멀티미디어공학',
			courseCredit: '3',
			subjectName: '컴퓨터공학부3',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742802' }],
			isMyTable: true
		},
		{
			haksuId: 'BBAB55842',
			courseName: '산학협력프로젝트2(종합설계)',
			courseCredit: '3',
			subjectName: '컴퓨터공학부3',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742802' }],
			isMyTable: true
		}
	],
	[
		{ haksuId: '0', courseName: '4 - 1' },
		{
			haksuId: 'BBAB62249',
			courseName: '소프트웨어V&V',
			courseCredit: '3',
			subjectName: '컴퓨터공학부4',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742801' }],
			isMyTable: true
		},
		{
			haksuId: 'BBAB12012',
			courseName: '분산시스템및컴퓨팅',
			courseCredit: '3',
			subjectName: '컴퓨터공학부4',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742801' }],
			isMyTable: true
		},
		{
			haksuId: 'BBAB51992',
			courseName: '협동분산시스템',
			courseCredit: '3',
			subjectName: '컴퓨터공학부4',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742801' }],
			isMyTable: true
		},
		{
			haksuId: 'BBAB59069',
			courseName: '클라우드IOT서비스',
			courseCredit: '3',
			subjectName: '컴퓨터공학부4',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742801' }],
			isMyTable: true
		}
	],
	[
		{ haksuId: '0', courseName: '4 - 2' },
		{
			haksuId: 'BBAB54782',
			courseName: '웹기술및응용',
			courseCredit: '3',
			subjectName: '컴퓨터공학부4',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742801' }],
			isMyTable: true
		},
		{
			haksuId: 'BBAB54855',
			courseName: '차세대분산시스템',
			courseCredit: '3',
			subjectName: '컴퓨터공학부4',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742801' }],
			isMyTable: true
		},
		{
			haksuId: 'BBAB55840',
			courseName: '졸업프로젝트1(종합설계)',
			courseCredit: '3',
			subjectName: '컴퓨터공학부4',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742802' }],
			isMyTable: true
		},
		{
			haksuId: 'BBAB55841',
			courseName: '졸업프로젝트2(종합설계)',
			courseCredit: '3',
			subjectName: '컴퓨터공학부4',
			competencyCodes: [{ competencyName: '전공역량', competencyCode: '12742802' }],
			isMyTable: true
		}
	]
];

const RoadMapContainer = () => {
	// courseByCompetencyInSubject: 전공 내 전공역량과 전공역량을 포함하는 교과목
	const courseByCompetencyInSubject = useRecoilValue(courseByCompetencyInSubjectState);
	// totalRoadMap: 학과 전체 로드맵(교과목)
	const totalRoadMap = useRecoilValue(totalRoadMapState);

	const { subjectName, subjectCode } = useRecoilValue(selectedSubjectState);
	const { fetchCoursesInSubject } = useField();

	// competencyList: 학과 로드맵의 전공역량 목록
	const [competencyList, setCompetencyList] = useState(courseByCompetencyInSubjectState);
	// roadMapTableData: 학과 로드맵에 포함되는 교과목 정보
	const [roadMapTableData, setRoadMapTableData] = useState(JSON.parse(JSON.stringify(defaultTable)));

	// myCompetencyList: 내 로드맵의 전공역량 목록
	const [myCompetencyList, setMyCompetencyList] = useState([]);
	// myTableData: 내 로드맵에 포함되는 교과목 정보
	const [myTableData, setMyTableData] = useState(JSON.parse(JSON.stringify(defaultTable)));

	// totalRoadMapData: 학과 전체 로드맵에 표함되는 교과목 목록
	const [totalRoadMapData, setTotalRoadMapData] = useState([]);
	const roadmapContentRef = useRef(null);

	// courseCreditData: 내 로드맵의 학점 모음
	const [courseCreditData, setCourseCreditData] = useState([]);

	// Base64 인코딩 함수
	const toBase64 = (uint8Array) => btoa(String.fromCharCode(...uint8Array));
	// Base64 디코딩 함수
	const fromBase64 = (base64) => Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));

	// URL을 통한 접속
	const { key } = useParams();
	useEffect(() => {
		const myTableDataString = JSON.stringify(data);
		const compressed = pako.deflate(myTableDataString, { to: 'string' });
		const base64Compressed = toBase64(compressed);
		const utf8Encoded = encodeURIComponent(base64Compressed);
		console.log('url_data: ', utf8Encoded);

		if (key) {
			const utf8Decoded = decodeURIComponent(key);
			const compressedData = fromBase64(utf8Decoded);
			const decompressed = pako.inflate(compressedData, { to: 'string' });
			const loadedTableData = JSON.parse(decompressed);
			setMyTableData(loadedTableData);
		}
	}, [key]);

	// 다른 전공을 클릭했을 때 테이블 초기화
	useEffect(() => {
		setRoadMapTableData(JSON.parse(JSON.stringify(defaultTable)));
	}, [courseByCompetencyInSubject, subjectCode]);

	// courseByCompetencyInSubject을 가공하여 roadMapTableData의 데이터 (직군 또는 학과 변경으로 인한 courseByCompetencyInSubject 변동)
	useEffect(() => {
		if (!Array.isArray(courseByCompetencyInSubject)) {
			// console.log('courseByCompetencyInSubject is empty');
		} else {
			// setCompetencyList(courseByCompetencyInSubject);
			const competencyList = courseByCompetencyInSubject.map((competency) => ({
				competencyName: competency.competencyName,
				competencyCode: competency.competencyCode
			}));
			setCompetencyList(competencyList);

			// haksuIdToCompetencyMap: 하나의 교과목이 가지는 전공역량들을 Map으로 저장
			const haksuIdToCompetencyMap = new Map();
			let max_length = 0;

			// courseByCompetencyInSubject 데이터 가공
			const updatedRoadMapTableData = JSON.parse(JSON.stringify(defaultTable));
			courseByCompetencyInSubject.forEach((competency) => {
				competency.courseGetResponseList.forEach((course) => {
					const { openingYear, openingSemester, haksuId, name, courseCredit } = course;
					const semesterIndex = openingSemester === '2학기' ? 1 : 0;
					const openingYear_include9 = openingYear > 4 ? 4 : openingYear;
					const index = (openingYear_include9 - 1) * 2 + semesterIndex;

					// 여러개의 전공역량을 가지는 교과목에 대한 처리
					if (!haksuIdToCompetencyMap.has(haksuId)) {
						haksuIdToCompetencyMap.set(haksuId, []);
					}
					haksuIdToCompetencyMap.get(haksuId).push({
						competencyName: competency.competencyName,
						competencyCode: competency.competencyCode
					});

					updatedRoadMapTableData[index] = [
						...updatedRoadMapTableData[index],
						{
							haksuId: haksuId,
							courseName: name,
							courseCredit: courseCredit,
							subjectName: subjectName,
							competencyCodes: haksuIdToCompetencyMap.get(haksuId),
							isMyTable: false
						}
					];
					// '1,2학기'에 대한 처리
					if (openingSemester === '1,2학기') {
						updatedRoadMapTableData[index + 1] = [
							...updatedRoadMapTableData[index + 1],
							{
								haksuId: haksuId,
								courseName: name,
								courseCredit: courseCredit,
								subjectName: subjectName,
								competencyCodes: haksuIdToCompetencyMap.get(haksuId),
								isMyTable: false
							}
						];
					}

					// 가장 긴 배열 탐색 (animation time)
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

	// totalRoadMap을 가공하여 totalRoadMapData에 저장
	useEffect(() => {
		if (!Array.isArray(totalRoadMap)) {
			// console.log('totalRoadMap is empty');
		} else {
			// totalRoadMap 데이터 가공
			const updatedRoadMapTableData = JSON.parse(JSON.stringify(defaultTable));
			totalRoadMap.forEach((course) => {
				const { openingYear, openingSemester, haksuId, name, courseCredit } = course;
				const semesterIndex = openingSemester === '2학기' ? 1 : 0;
				const openingYear_include9 = openingYear > 4 ? 4 : openingYear;
				const index = (openingYear_include9 - 1) * 2 + semesterIndex;

				updatedRoadMapTableData[index] = [
					...updatedRoadMapTableData[index],
					{
						haksuId: haksuId,
						courseName: name,
						courseCredit: courseCredit,
						subjectName: subjectName,
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
							courseCredit: courseCredit,
							subjectName: subjectName,
							competencyCodes: [],
							isMyTable: false
						}
					];
				}
			});
			setTotalRoadMapData(updatedRoadMapTableData);
		}
	}, [totalRoadMap]);

	// 내 로드맵 교과목들의 전공역량을 myCompetencyList에 저장
	useEffect(() => {
		const competencyArray = [];
		myTableData.forEach((row) => {
			row.forEach((cellData) => {
				if (Array.isArray(cellData.competencyCodes)) {
					competencyArray.push(...cellData.competencyCodes);
				}
			});
		});
		const uniqueCompetencyArray = Array.from(new Set(competencyArray));
		setMyCompetencyList(uniqueCompetencyArray);
	}, [myTableData]);

	useEffect(() => {
		const courseCreditMap = {};
		myTableData.forEach((row) => {
			row.forEach((cellData) => {
				const subject = cellData.subjectName;
				const credit = parseInt(cellData.courseCredit, 10);

				// 비어있는 값(학기 데이터) 처리
				if (!subject) return;

				// subjectCreditMap에 subjectName이 이미 존재하는지 확인
				if (courseCreditMap[subject]) {
					// 존재하면 courseCredit 합산
					courseCreditMap[subject] += credit;
				} else {
					// 존재하지 않으면 새로 추가
					courseCreditMap[subject] = credit;
				}
			});
		});

		// subjectCreditMap을 배열로 변환
		const courseCreditArray = Object.entries(courseCreditMap).map(([subjectName, courseCredit]) => ({
			subjectName,
			courseCredit
		}));

		setCourseCreditData(courseCreditArray);
	}, [myTableData]);

	// 선택된 전공역량에 해당하는 교과목들을 하이라이트하는 기능
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

	// 학과 전체 로드맵 Button Click 이벤트
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const showRoadMapHandler = () => {
		fetchCoursesInSubject(subjectCode);
		setIsDetailOpen(true);
	};

	// URL Button Click 이벤트
	const handleURLButtonClick = () => {
		const myTableDataString = JSON.stringify(myTableData);
		const compressed = pako.deflate(myTableDataString, { to: 'string' });
		const base64Compressed = toBase64(compressed);
		const utf8Encoded = encodeURIComponent(base64Compressed);
		console.log('RoadMapURL: ', utf8Encoded);
	};

	// 스크린샷 Button Click 이벤트
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
			<RoadMapContents
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
				<RoadMapContents
					competencyTableData={myCompetencyList}
					roadMapTableData={myTableData}
					onCellClick={handleCellClick_remove}
					unclickableCells={[]}
					onCompetencyClick={handleCellClick_highlight}
					highlightedCompetency={highlightedCompetency}
				/>
				<CourseCreditTable courseCreditData={courseCreditData} />
			</Content>
			<SaveButton onClickURL={handleURLButtonClick} onClickCapture={handleCaptureButtonClick}></SaveButton>
		</Container>
	);
};

export default RoadMapContainer;
