import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { courseDetailState } from '../../recoils/atoms';
import {
	Title,
	Subtitle,
	ModalContent,
	Subject,
	SubjectContainer,
	TableContent,
	ScrollContainer
} from './CourseDetailStyle';
import TableComponent from '../TableComponent';
import TableComponent2 from '../TableComponent2';
import Modal from '../Modal/Modal';
import useClient from '../../hooks/useClient';

function CourseDetail({ onClose, HaksuId }) {
	// // const courseDetail = useRecoilValue(courseDetailState);

	//MockDATA 이용 -------------
	// const [courseDetail, setCourseDetail] = useRecoilState(courseDetailState);
	// useEffect(() => {
	// 	fetch('/data/courseDetail.json')
	// 		.then((response) => response.json())
	// 		.then((data) => setCourseDetail(data))
	// 		.catch((error) => console.error('Error fetching course details:', error));
	// }, [setCourseDetail]);

	// const modalContent = courseDetail[1]; // 예시로 네 번째 데이터를 사용

	// console.log('Course Detail:', courseDetail); // 데이터 확인
	// console.log('modalContent :', modalContent);
	// if (!courseDetail.length)
	// 	return (
	// 		<Modal onClose={onClose}>
	// 			<div>Loading...</div>
	// 		</Modal>
	// 	); // 데이터가 없을 때 로딩 표시

	//---------------------------

	//API 연결 코드-------------------------
	const [courseDetail] = useRecoilState(courseDetailState);
	const { fetchCourseDetail } = useClient();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const loadData = async () => {
			try {
				await fetchCourseDetail(HaksuId); // 데이터 가져오기
				// 데이터 가져온 후 1초간 추가로 기다리기
				setTimeout(() => {
					setLoading(false); // 로딩 종료
				}, 50); // 1000ms = 1초
			} catch (error) {
				console.error('Error fetching course details:', error);
				setLoading(false); // 에러 발생 시 로딩 상태 해제
			}
		};

		if (HaksuId) {
			loadData();
		}
	}, [HaksuId]);

	if (loading) {
		return (
			<Modal onClose={onClose}>
				<div>Loading...</div>
			</Modal>
		);
	}

	if (!courseDetail || Object.keys(courseDetail).length === 0) {
		return (
			<Modal onClose={onClose}>
				<div>No course details found.</div>
			</Modal>
		);
	}

	// const handleClose = () => {
	// 	setLoading(true); // loading 상태 초기화
	// 	//setCourseDetail(null); // courseDetail 상태 초기화
	// 	onClose(); // 부모 컴포넌트에서 전달된 onClose 호출
	// };

	// 데이터가 정상적으로 로드된 경우
	const additionalInfo = courseDetail.addInformationGetResponse;
	const competency = courseDetail.competencyInCourseGetResponse;
	console.log('Course Detail:', courseDetail);

	//API 연결 코드-------------------------

	const tableData = [
		['개설대학', additionalInfo.openingCollegeName],
		['개설학과', additionalInfo.openingSubjectName],
		['강의유형', additionalInfo.lectureType],
		['학년', additionalInfo.openingSchoolYear.toString()],
		['학기', additionalInfo.openingSemesterTerm],
		['학점', additionalInfo.time.toString()],
		['공학인증구분', additionalInfo.engineeringCertificationFlagCode === 0 ? 'N' : 'Y'],
		['선수강과목', additionalInfo.preCourse],
		['MOOC 여부', additionalInfo.moocFlag === 0 ? 'N' : 'Y'],
		['Selc 여부', additionalInfo.selcFlag === 0 ? 'N' : 'Y'],
		['챌린저여부', additionalInfo.dreamSemesterFlag === 0 ? 'N' : 'Y']
	];

	const tableData2 = [
		[competency.competencyName1, competency.competencyRemark1],
		[competency.competencyName2, competency.competencyRemark2],
		[competency.competencyName3, competency.competencyRemark3]
	];

	return (
		<Modal onClose={onClose}>
			<ScrollContainer>
				<Title>Course Information</Title>

				<SubjectContainer>
					<Subject>
						{courseDetail.typicalKoreanName} ({courseDetail.typicalEnglishName})
					</Subject>
				</SubjectContainer>
				<Subtitle>국문설명</Subtitle>
				<ModalContent>{courseDetail.koreanDescription}</ModalContent>
				<Subtitle>영문설명</Subtitle>
				<ModalContent>{courseDetail.englishDescription}</ModalContent>
				<Subtitle>Additional Information</Subtitle>
				<TableContent>
					<TableComponent data={tableData} />
				</TableContent>
				<Subtitle>전공 역량</Subtitle>
				<TableContent>
					<TableComponent2 data={tableData2} />
				</TableContent>
			</ScrollContainer>
		</Modal>
	);
}

export default CourseDetail;
