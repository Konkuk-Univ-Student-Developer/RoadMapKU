import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ToastContainer, toast } from 'react-toastify';
import html2canvas from 'html2canvas';
import 'react-toastify/dist/ReactToastify.css';
import {
	courseByCompetencyInSubjectState,
	selectedSubjectState,
	selectedMyTableContentsState,
	selectedFieldState,
	isShowDepartAndLogState
} from '../../recoils/atoms';
import { Color } from '../../styles/Color';
import { useField, useApi } from '../../hooks/';
import CourseCreditTable from './CourseCreditTable';
import SaveButton from '../Common/SaveButton';
import TotalRoadMapModal from './TotalRoadMap/TotalRoadMapModal';
import { encodeData, decodeData } from '../Common/Utils';
import RoadMapTable from './RoadMapTable';
import MyMapTable from './MyMapTable';

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

const RoadMapContentContainer = () => {
	const { fetchCoursesInSubject, fetchLogFields } = useField();

	const courseByCompetencyInSubject = useRecoilValue(courseByCompetencyInSubjectState);
	const selectedMyTableContents = useRecoilValue(selectedMyTableContentsState);
	const { subjectName, subjectCode } = useRecoilValue(selectedSubjectState);
	const selectedFieldData = useRecoilValue(selectedFieldState);

	const setSelectedMyTableContentsState = useSetRecoilState(selectedMyTableContentsState);
	const setIsShowDepartAndLog = useSetRecoilState(isShowDepartAndLogState);

	const [competencyListData, setCompetencyListData] = useState(courseByCompetencyInSubjectState);
	const [courseTableData, setCourseTableData] = useState(JSON.parse(JSON.stringify(defaultTable)));

	const roadmapContentRef = useRef(null);
	const navigate = useNavigate();
	const { serverApi } = useApi();
	const [searchParams] = useSearchParams();

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
		} else {
			if (Array.isArray(selectedMyTableContents) && selectedMyTableContents.length == 0)
				setSelectedMyTableContentsState(JSON.parse(JSON.stringify(defaultTable)));
		}
	}, []);

	useEffect(() => {
		setCourseTableData(JSON.parse(JSON.stringify(defaultTable)));
	}, [courseByCompetencyInSubject, subjectCode]);

	// courseByCompetencyInSubject을 가공하여 roadMapTable의 데이터 (직군 또는 학과 변경으로 인한 courseByCompetencyInSubject 변동)
	useEffect(() => {
		if (!Array.isArray(courseByCompetencyInSubject)) return;

		const competencyContents = courseByCompetencyInSubject.map((competency) => ({
			competencyName: competency.competencyName,
			competencyCode: competency.competencyCode
		}));
		setCompetencyListData(competencyContents);

		// haksuIdToCompetencyMap: 하나의 교과목이 가지는 전공역량들을 Map으로 저장
		const haksuIdToCompetencyMap = new Map();

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
					isMyTable: isMyTable,
					isClickable: !isMyTable
				};

				updatedRoadMapTableData[index] = [...updatedRoadMapTableData[index], cellData];
				// '1,2학기'에 대한 처리
				if (openingSemester === '1,2학기') {
					updatedRoadMapTableData[index + 1] = [...updatedRoadMapTableData[index + 1], cellData];
				}
			});
		});

		// setUnclickableCells(tempUnclickableCells);
		const updatedData = updatedRoadMapTableData.map((courseRow) => {
			const row = [[]];
			row.push(...courseRow.slice(1));
			return row;
		});

		setTimeout(() => {
			setCourseTableData(updatedData);
		}, 10);
	}, [courseByCompetencyInSubject, selectedMyTableContents]);

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
					/>
				)}
			</TitleWrapper>
			<RoadMapTable competencyTableData={competencyListData} courseTableData={courseTableData} />
			<Content ref={roadmapContentRef} id="roadmap-content">
				<TitleWrapper>
					<Title>내 로드맵</Title>
				</TitleWrapper>
				<MyMapTable />
				<CourseCreditTable />
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

export default RoadMapContentContainer;
