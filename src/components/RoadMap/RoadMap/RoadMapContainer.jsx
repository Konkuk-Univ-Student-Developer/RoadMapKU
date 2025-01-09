import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import pako from 'pako';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import html2canvas from 'html2canvas';
import RoadMapContents from './RoadMapContents';
import {
	courseByCompetencyInSubjectState,
	selectedSubjectState,
	totalRoadMapState,
	selectedMyTableContentsState,
	selectedFieldState,
	isShowDepartAndLogState
} from '../../../recoils/atoms';
import { Color } from '../../../style/Color';
import useApi from '../../../hooks/useApi';
import useField from '../../../hooks/useField';
import CourseCreditTable from './CourseCreditTable';
import SaveButton from '../../Common/SaveButton';
import TotalRoadMapModal from '../TotalRoadMap/TotalRoadMapModal';
import useGA from '../../../hooks/useGA';

const Container = styled.div`
	min-width: 50rem;
	width: 87%;
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
	font-size: 25px;
	font-weight: bolder;
	color: ${Color.GREEN};
`;

const Button = styled.button`
	height: 2rem;
	width: 25rem;
	background-color: ${Color.GREEN};
	color: white;
	border: none;
	border-radius: 0.2rem;
	padding: 0.5rem;
	cursor: pointer;
	user-select: none;
	font-family: 'Pretendard-semiBold';
	font-size: small;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	transition:
		background-color 0.2s ease-out,
		box-shadow 0.2s ease-out;

	&:hover,
	&:active {
		background-color: #02472a;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
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

const RoadMapContainer = () => {
	// courseByCompetencyInSubject: 전공 내 전공역량과 전공역량을 포함하는 교과목
	const courseByCompetencyInSubject = useRecoilValue(courseByCompetencyInSubjectState);
	// totalRoadMap: 학과 전체 로드맵(교과목)
	const totalRoadMap = useRecoilValue(totalRoadMapState);
	const selectedMyTableContents = useRecoilValue(selectedMyTableContentsState);

	const setSelectedMyTableContentsState = useSetRecoilState(selectedMyTableContentsState);

	const { subjectName, subjectCode } = useRecoilValue(selectedSubjectState);
	const { fetchCoursesInSubject, fetchLogFields } = useField();

	// competencyList: 학과 로드맵의 전공역량 목록
	const [competencyList, setCompetencyList] = useState(courseByCompetencyInSubjectState);
	// roadMapTableData: 학과 로드맵에 포함되는 교과목 정보
	const [roadMapTableData, setRoadMapTableData] = useState(JSON.parse(JSON.stringify(defaultTable)));

	// myCompetencyList: 내 로드맵의 전공역량 목록
	const [myCompetencyList, setMyCompetencyList] = useState([]);

	// totalRoadMapData: 학과 전체 로드맵에 표함되는 교과목 목록
	const [totalRoadMapData, setTotalRoadMapData] = useState([]);
	const roadmapContentRef = useRef(null);

	const [unclickableCells, setUnclickableCells] = useState([]);

	// courseCreditData: 내 로드맵의 학점 모음
	const [courseCreditData, setCourseCreditData] = useState([]);

	// 선택된 직군 데이터
	const selectedFieldData = useRecoilValue(selectedFieldState);

	// 학과 및 로그 데이터 보여주는 recoil
	const setIsShowDepartAndLog = useSetRecoilState(isShowDepartAndLogState);

	const { serverApi } = useApi();
	const navigate = useNavigate();

	const [searchParams] = useSearchParams();

	// GA
	const { sendClickShareUrl, sendClickShareScreenshot } = useGA();

	// Base64 인코딩 함수
	const toBase64 = (uint8Array) => btoa(String.fromCharCode(...uint8Array));
	// Base64 디코딩 함수
	const fromBase64 = (base64) => Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));

	const encodeData = (data) => {
		const compressed = pako.deflate(data, { to: 'string' });
		const base64Compressed = toBase64(compressed);
		const utf8Encoded = encodeURIComponent(base64Compressed);

		return utf8Encoded;
	};

	const decodeData = (data) => {
		const utf8Decoded = decodeURIComponent(data);
		const compressedData = fromBase64(utf8Decoded);
		const decompressed = pako.inflate(compressedData, { to: 'string' });
		const loadedTableData = JSON.parse(decompressed);

		return loadedTableData;
	};

	useEffect(() => {
		if (Array.isArray(selectedMyTableContents) && selectedMyTableContents.length == 0)
			setSelectedMyTableContentsState(JSON.parse(JSON.stringify(defaultTable)));
	}, []);

	// URL을 통한 접속
	useEffect(() => {
		const myTableData = searchParams.get('myTableData');
		const selectedFieldData = searchParams.get('selectedFieldData');
		if (myTableData && selectedFieldData) {
			navigate('/road-map');
			const decodedMyTableData = decodeData(myTableData);
			setSelectedMyTableContentsState(decodedMyTableData);

			const decodedSelectedFieldData = decodeData(selectedFieldData);
			fetchLogFields(decodedSelectedFieldData);
			setIsShowDepartAndLog(true);
		}
	}, []);

	useEffect(() => {
		setRoadMapTableData(JSON.parse(JSON.stringify(defaultTable)));
	}, [courseByCompetencyInSubject, subjectCode]);

	// courseByCompetencyInSubject을 가공하여 roadMapTableData의 데이터 (직군 또는 학과 변경으로 인한 courseByCompetencyInSubject 변동)
	useEffect(() => {
		if (!Array.isArray(courseByCompetencyInSubject)) return;

		const competencyContents = courseByCompetencyInSubject.map((competency) => ({
			competencyName: competency.competencyName,
			competencyCode: competency.competencyCode
		}));
		setCompetencyList(competencyContents);

		// haksuIdToCompetencyMap: 하나의 교과목이 가지는 전공역량들을 Map으로 저장
		const haksuIdToCompetencyMap = new Map();
		const tempUnclickableCells = [];

		// courseByCompetencyInSubject 데이터 가공
		const updatedRoadMapTableData = [...defaultTable];
		courseByCompetencyInSubject.forEach((competency) => {
			const { competencyName, competencyCode } = competency;

			competency.courseGetResponseList.forEach((course) => {
				const { openingYear, openingSemester, haksuId, name, credit, openingSubject } = course;
				const semesterIndex = openingSemester === '2학기' ? 1 : 0;
				const openingYear_include9 = openingYear > 4 ? 4 : openingYear;
				const index = (openingYear_include9 - 1) * 2 + semesterIndex;

				// 여러개의 전공역량을 가지는 교과목에 대한 처리
				if (!haksuIdToCompetencyMap.has(haksuId)) {
					haksuIdToCompetencyMap.set(haksuId, [{ competencyName, competencyCode }]);
				} else {
					return; // 중복 학수 ID일 경우 이후 로직 스킵
				}

				// isMyTable 체크
				const isMyTable = selectedMyTableContents.some((row) => row.some((cell) => cell.haksuId === haksuId));

				const cellData = {
					haksuId: haksuId,
					courseName: name,
					courseCredit: credit,
					subjectName: openingSubject,
					competencyCodes: haksuIdToCompetencyMap.get(haksuId),
					isMyTable: isMyTable
				};

				// 이미 지정되어 있던 unclickableCell 추가
				if (cellData.isMyTable) {
					tempUnclickableCells.push(cellData);
				}

				updatedRoadMapTableData[index] = [...updatedRoadMapTableData[index], cellData];
				// '1,2학기'에 대한 처리
				if (openingSemester === '1,2학기') {
					updatedRoadMapTableData[index + 1] = [...updatedRoadMapTableData[index + 1], cellData];
				}
			});
		});

		setUnclickableCells(tempUnclickableCells);
		const updatedData = updatedRoadMapTableData.map((courseRow) => {
			const row = [[]];
			row.push(...courseRow.slice(1));
			return row;
		});

		setTimeout(() => {
			setRoadMapTableData(updatedData);
		}, 10);
	}, [courseByCompetencyInSubject, selectedMyTableContents]);

	// totalRoadMap을 가공하여 totalRoadMapData에 저장
	useEffect(() => {
		if (!Array.isArray(totalRoadMap)) return;

		// totalRoadMap 데이터 가공
		const updatedRoadMapTableData = [...defaultTable];
		totalRoadMap.forEach((course) => {
			const { openingYear, openingSemester, haksuId, name, credit, openigSubject } = course;
			const semesterIndex = openingSemester === '2학기' ? 1 : 0;
			const openingYear_include9 = openingYear > 4 ? 4 : openingYear;
			const index = (openingYear_include9 - 1) * 2 + semesterIndex;

			updatedRoadMapTableData[index] = [
				...updatedRoadMapTableData[index],
				{
					haksuId: haksuId,
					courseName: name,
					courseCredit: credit,
					subjectName: openigSubject,
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
						courseCredit: credit,
						subjectName: openigSubject,
						competencyCodes: [],
						isMyTable: false
					}
				];
			}
		});

		setTotalRoadMapData(updatedRoadMapTableData);
	}, [totalRoadMap]);

	// 내 로드맵 교과목들의 전공역량을 myCompetencyList에 저장
	useEffect(() => {
		const competencyArray = [];
		selectedMyTableContents.forEach((row) => {
			row.forEach((cellData) => {
				if (Array.isArray(cellData.competencyCodes)) {
					competencyArray.push(...cellData.competencyCodes);
				}
			});
		});
		const uniqueCompetencyArray = Array.from(new Set(competencyArray));
		setMyCompetencyList(uniqueCompetencyArray);
	}, [selectedMyTableContents]);

	// 담은 학점 계산 하는 로직
	useEffect(() => {
		const courseCreditMap = {};

		selectedMyTableContents.forEach((row) => {
			row.forEach((cellData) => {
				const subject = cellData.subjectName;
				const credit = cellData.courseCredit;

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
		const courseCreditArray = Object.entries(courseCreditMap)
			.map(([subjectName, courseCredit]) => ({
				subjectName,
				courseCredit
			}))
			.sort((a, b) => b.courseCredit - a.courseCredit);

		setCourseCreditData(courseCreditArray);
	}, [selectedMyTableContents]);

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
	const handleCellClick_add = (cellData, rowIndex) => {
		const updatedMyTableData = selectedMyTableContents.map((row) => [...row]);
		const copiedCellData = { ...cellData, isMyTable: true };
		updatedMyTableData[rowIndex].push(copiedCellData);
		setSelectedMyTableContentsState(updatedMyTableData);
	};
	// 내 로드맵 Cell Click 이벤트
	const handleCellClick_remove = (cellData, rowIndex) => {
		const updatedUnclickableCells = unclickableCells.filter((cell) => !(cell.haksuId === cellData.haksuId));
		setUnclickableCells(updatedUnclickableCells);

		const updatedMyTableData = selectedMyTableContents.map((row) => [...row]);
		const cellIndex = updatedMyTableData[rowIndex].indexOf(cellData);
		if (cellIndex !== -1) {
			updatedMyTableData[rowIndex].splice(cellIndex, 1);
		}
		setSelectedMyTableContentsState(updatedMyTableData);
	};

	// 학과 전체 로드맵 Button Click 이벤트
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const showRoadMapHandler = () => {
		fetchCoursesInSubject(subjectCode);
		setIsDetailOpen(true);
	};

	// URL Button Click 이벤트
	const handleURLButtonClick = () => {
		const myTableDataString = JSON.stringify(selectedMyTableContents);
		const encodedMyTableData = encodeData(myTableDataString);

		const selectedFieldDataString = JSON.stringify(selectedFieldData);
		const encodedSelectedFieldData = encodeData(selectedFieldDataString);

		const baseURL = serverApi.defaults.baseURL;
		const newUrl = `${baseURL}/road-map?myTableData=${encodedMyTableData}&selectedFieldData=${encodedSelectedFieldData}`;
		notify_url('주소가 복사되었습니다.');

		navigator.clipboard.writeText(newUrl).catch((error) => console.log(error));
		sendClickShareUrl({
			category: 'Button',
			label: 'URL Share'
		});
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
		notify_url('스크린샷을 저장하였습니다.');
		sendClickShareScreenshot({
			category: 'Button',
			label: 'Screenshot Share'
		});
	};

	const notify_url = (text) => toast.success(text);

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
					roadMapTableData={selectedMyTableContents}
					onCellClick={handleCellClick_remove}
					unclickableCells={[]}
					onCompetencyClick={handleCellClick_highlight}
					highlightedCompetency={highlightedCompetency}
				/>
				<CourseCreditTable courseCreditData={courseCreditData} />
			</Content>
			<SaveButton onClickURL={handleURLButtonClick} onClickCapture={handleCaptureButtonClick}></SaveButton>
			<ToastContainer
				position="bottom-center"
				limit={2}
				closeButton={false}
				autoClose={2000}
				hideProgressBar
				newestOnTop
				pauseOnHover={false}
				pauseOnFocusLoss={false}
			/>
		</Container>
	);
};

export default RoadMapContainer;
