import React, { useEffect } from 'react';
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
import TableComponent from '../Modal/TableComponent';
import TableComponent2 from '../Modal/TableComponent2';
import Modal from '../Modal/Modal';

function CourseDetail({ onClose }) {
	// const courseDetail = useRecoilValue(courseDetailState);

	// console.log('Course Detail:', courseDetail); // 데이터 확인
	const [courseDetail, setCourseDetail] = useRecoilState(courseDetailState);
	useEffect(() => {
		fetch('/data/courseDetail.json')
			.then((response) => response.json())
			.then((data) => setCourseDetail(data))
			.catch((error) => console.error('Error fetching course details:', error));
	}, [setCourseDetail]);

	console.log('Course Detail:', courseDetail); // 데이터 확인

	const modalContent = courseDetail[1]; // 예시로 네 번째 데이터를 사용

	console.log('modalContent :', modalContent);
	if (!courseDetail.length)
		return (
			<Modal onClose={onClose}>
				<div>Loading...</div>
			</Modal>
		); // 데이터가 없을 때 로딩 표시

	const additionalInfo = modalContent.Addimfomation;

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
		[modalContent.competency.competencyName1, modalContent.competency.competencyRemark1],
		[modalContent.competency.competencyName2, modalContent.competency.competencyRemark2],
		[modalContent.competency.competencyName3, modalContent.competency.competencyRemark3]
	];

	return (
		<Modal onClose={onClose}>
			<ScrollContainer>
				<Title>Course Information</Title>

				<SubjectContainer>
					<Subject>
						{modalContent.typicalKoreanName} ({modalContent.typicalEnglishName})
					</Subject>
				</SubjectContainer>
				<Subtitle>국문설명</Subtitle>
				<ModalContent>{modalContent.koreanDescription}</ModalContent>
				<Subtitle>영문설명</Subtitle>
				<ModalContent>{modalContent.englishDescription}</ModalContent>
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
