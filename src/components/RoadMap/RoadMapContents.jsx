import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useField } from '@hooks';
import {
	courseByCompetencyInSubjectState,
	selectedSubjectState,
	selectedMyTableContentsState,
	isShowDepartAndLogState
} from '@recoils';
import { Color } from '@styles';
import { SaveButton } from '@Common';
import { defaultTable, decodeData, parseCourseData } from '@Common/Utils';
import { MyMapTable, RoadMapTable, CourseCreditTable } from '@Table';
import { TotalRoadMapModal } from '@TotalRoadMap';

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

const RoadMapContents = () => {
	const { fetchCoursesInSubject, fetchLogFields } = useField();

	const [competencyListData, setCompetencyListData] = useState([]);
	const [courseTableData, setCourseTableData] = useState(defaultTable);
	const [isDetailOpen, setIsDetailOpen] = useState(false);

	const courseByCompetencyInSubject = useRecoilValue(courseByCompetencyInSubjectState);
	const { subjectName, subjectCode } = useRecoilValue(selectedSubjectState);
	const selectedMyTableContents = useRecoilValue(selectedMyTableContentsState);
	const setSelectedMyTableContentsState = useSetRecoilState(selectedMyTableContentsState);
	const setIsShowDepartAndLog = useSetRecoilState(isShowDepartAndLogState);

	const roadmapContentRef = useRef(null);
	const navigate = useNavigate();
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
		}
	}, []);

	// 새로운 데이터가 들어오면 학과 로드맵 clear
	useEffect(() => {
		setCompetencyListData([]);
		setCourseTableData(defaultTable);
	}, [courseByCompetencyInSubject, subjectCode]);

	// courseByCompetencyInSubject을 가공하여 roadMapTable의 데이터 (직군 또는 학과 변경으로 인한 courseByCompetencyInSubject 변동)
	useEffect(() => {
		if (!Array.isArray(courseByCompetencyInSubject)) return;

		const competencyContents = courseByCompetencyInSubject.map((competency) => ({
			competencyName: competency.competencyName,
			competencyCode: competency.competencyCode
		}));
		setCompetencyListData(competencyContents);

		setTimeout(() => {
			setCourseTableData(parseCourseData(courseByCompetencyInSubject, selectedMyTableContents, 1));
		}, 10);
	}, [courseByCompetencyInSubject, selectedMyTableContents]);

	// 학과 전체 로드맵 Button Click 이벤트
	const showRoadMapHandler = () => {
		fetchCoursesInSubject(subjectCode);
		setIsDetailOpen(true);
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
			<SaveButton roadmapContentRef={roadmapContentRef}></SaveButton>
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

export default RoadMapContents;
