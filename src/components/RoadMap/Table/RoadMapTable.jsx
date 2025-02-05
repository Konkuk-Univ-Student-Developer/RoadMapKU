import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import 'react-toastify/dist/ReactToastify.css';
import { Color } from '@styles';
import { CompetencyTable } from '@Competency';
import { CourseTable } from '@Course';
import { TotalRoadMapModal } from '@TotalRoadMap';
import { decodeData } from '@Common/Utils';
import { useField } from '@hooks';
import {
	competencyListSelector,
	courseTableDataSelector,
	selectedSubjectState,
	selectedMyTableContentsState,
	isShowDepartAndLogState
} from '@recoils';

const Container = styled.div`
	height: 21rem;
	min-height: 19rem;
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	padding-left: 1rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
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
		background-color 0.1s ease-out,
		box-shadow 0.1s ease-out;

	&:hover,
	&:active {
		background-color: #02472a;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
	}
`;

const RoadMapTable = () => {
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const { fetchCoursesInSubject, fetchLogFields } = useField();

	const competencyTableData = useRecoilValue(competencyListSelector);
	const courseTableData = useRecoilValue(courseTableDataSelector);
	const { subjectName, subjectCode } = useRecoilValue(selectedSubjectState);

	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const setSelectedMyTableContentsState = useSetRecoilState(selectedMyTableContentsState);
	const setIsShowDepartAndLog = useSetRecoilState(isShowDepartAndLogState);

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

	// 학과 전체 로드맵 Button Click 이벤트
	const showRoadMapHandler = () => {
		if (!subjectCode) return;
		fetchCoursesInSubject(subjectCode);
		setIsDetailOpen(true);
	};

	return (
		<>
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
			<Container>
				<CompetencyTable competencyTableData={competencyTableData} />
				<CourseTable courseTableData={courseTableData} />
			</Container>
		</>
	);
};

export default RoadMapTable;
