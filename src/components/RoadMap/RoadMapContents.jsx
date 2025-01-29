import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useField } from '@hooks';
import { selectedSubjectState, selectedMyTableContentsState, isShowDepartAndLogState } from '@recoils';
import { Color } from '@styles';
import { SaveButton } from '@Common';
import { decodeData } from '@Common/Utils';
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
		background-color 0.1s ease-out,
		box-shadow 0.1s ease-out;

	&:hover,
	&:active {
		background-color: #02472a;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
	}
`;

const RoadMapContents = () => {
	const { fetchCoursesInSubject, fetchLogFields } = useField();

	const [isDetailOpen, setIsDetailOpen] = useState(false);

	const { subjectName, subjectCode } = useRecoilValue(selectedSubjectState);

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
			<RoadMapTable />
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
