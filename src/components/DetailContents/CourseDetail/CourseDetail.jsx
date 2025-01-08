import React, { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { courseDetailState } from '../../../recoils/atoms';
import TableComponent from '../../Modal/TableComponent';
import TableComponent2 from '../../Modal/TableComponent2';
import Modal from '../../Modal/Modal';
import useField from '../../../hooks/useField';
import CompetitionTable from './CompetitionTable';
import styled from 'styled-components';
import { Color } from '../../../style/Color';

const ScrollContainer = styled.div`
	background-color: transparent;
	padding: 0rem;
	border-radius: 8px;
	max-height: 80vh;
	overflow-y: auto;
	width: 100%;
`;

const Title = styled.div`
	background-color: ${Color.GREEN};
	text-align: center;
	padding: 1rem;
	border-radius: 8px;
	color: white;
	margin: 0;
	margin-bottom: 10px;
	font-size: 2rem;
`;

const Subtitle = styled.h2`
	color: ${Color.GREEN};
	font-size: 1.5rem;
	margin: 0rem 20px;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
`;

const ModalContent = styled.div`
	font-size: 1rem;
	margin: 10px 20px;
	line-height: 1.5;
`;

const TableContent = styled.div`
	margin: 10px 0;
`;

function CourseDetail({ onClose, HaksuId }) {
	const [courseDetail, setCourseDetail] = useRecoilState(courseDetailState);
	const { fetchCourseDetail } = useField();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const descriptionRef = useRef();
	const informationRef = useRef();
	const competencyRef = useRef();

	useEffect(() => {
		const loadData = async () => {
			if (HaksuId) {
				try {
					setLoading(true);
					setError(null);
					const data = await fetchCourseDetail(HaksuId);
					setCourseDetail(data);
				} catch (error) {
					console.error('Error fetching course details:', error);
					setError('Failed to fetch course details');
				} finally {
					setLoading(false);
				}
			}
		};

		loadData();
	}, [HaksuId, setCourseDetail]);

	if (loading) {
		return (
			<Modal onClose={onClose}>
				<div> </div>
			</Modal>
		);
	}

	//오류 처리
	if (error) {
		return (
			<Modal onClose={onClose}>
				<div>{error}</div>
			</Modal>
		);
	}

	//찾을 수 없는 학수 번호 예외 처리
	if (!courseDetail || Object.keys(courseDetail).length === 0) {
		return (
			<Modal onClose={onClose}>
				<div> </div>
			</Modal>
		);
	}

	// 데이터가 정상적으로 로드된 경우
	const additionalInfo = courseDetail.addInformationGetResponse;
	const competency = courseDetail.competencyInCourseGetResponse;

	//API 연결 코드-------------------------

	const tableData = [
		['학수번호', HaksuId || '-'],
		['개설대학', additionalInfo.openingCollegeName || '-'],
		['개설학과', additionalInfo.openingSubjectName || '-'],
		['강의유형', additionalInfo.lectureType || '-'],
		['학년', additionalInfo.openingSchoolYear?.toString() || '-'],
		['학기', additionalInfo.openingSemesterTerm || '-'],
		['학점', additionalInfo.time?.toString() || '-'],
		['공학인증구분', additionalInfo.engineeringCertificationFlagCode === 0 ? 'N' : 'Y'],
		['선수강과목', additionalInfo.preCourse || '-']
	];

	const tableData2 = [
		[competency.competencyName1 || '-', competency.competencyRemark1 || '-'],
		[competency.competencyName2 || '-', competency.competencyRemark2 || '-'],
		[competency.competencyName3 || '-', competency.competencyRemark3 || '-']
	];

	return (
		<Modal onClose={onClose}>
			<ScrollContainer>
				<Title>{courseDetail.typicalKoreanName}</Title>
				<Subtitle ref={descriptionRef}>과목 설명</Subtitle>
				<ModalContent>{courseDetail.koreanDescription}</ModalContent>
				<Subtitle ref={informationRef}>기본 정보</Subtitle>
				<TableContent>
					<TableComponent data={tableData} />
				</TableContent>
				<Subtitle ref={competencyRef}>전공역량</Subtitle>
				<TableContent>
					<TableComponent2 data={tableData2} />
				</TableContent>
				<CompetitionTable haksuId={HaksuId} />
			</ScrollContainer>
		</Modal>
	);
}

export default CourseDetail;
