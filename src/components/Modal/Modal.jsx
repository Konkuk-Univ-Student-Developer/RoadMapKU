// import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
// import { CSSTransition } from 'react-transition-group';
// import { immergeBounce, dismissBounce } from '../Animation/Animation';

// const animationTiming = {
// 	enter: 1000,
// 	exit: 1000
// };

// // Styled components
// const ModalWrapper = styled.div`
// 	position: fixed;
// 	z-index: 200;
// 	border: 0.05rem solid black;
// 	background-color: white;
// 	padding: 10px;
// 	text-align: center;
// 	box-sizing: border-box;
// 	top: 25%;
// 	left: 25%;
// 	width: 50%;

// 	&.BounceImmerge {
// 		animation: ${immergeBounce} 400ms ease-out forwards;
// 	}

// 	&.BounceDismiss {
// 		animation: ${dismissBounce} 400ms ease-out forwards;
// 	}
// `;

// const ModalContent = styled.div`
// 	font-family: Arial;
// 	font-size: 1rem;
// 	text-align: start;
// 	margin: 10px 0;
// `;

// const Modal = (props) => {
// const [modalContent, setModalContent] = useState(null);
// const [modalContent_sub1, setModalContent_sub1] = useState(null);
// const [modalContent_sub2, setModalContent_sub2] = useState(null);
// const [modalContent_sub3, setModalContent_sub3] = useState(null);

// 	useEffect(() => {
// 		if (props.show) {
// 			setModalContent(props.item.content[0]);
// 			setModalContent_sub1(props.item.content[0]);
// 			setModalContent_sub2(props.item.content[0]);
// 			setModalContent_sub3(props.item.content[0]);
// 		}
// 	}, [props.show, props.content]);

// 	return (
// 		<CSSTransition
// 			in={props.show}
// 			timeout={animationTiming}
// 			mountOnEnter
// 			unmountOnExit
// 			classNames={{
// 				appear: 'BounceImmerge',
// 				enter: 'BounceImmerge',
// 				exit: 'BounceDismiss'
// 			}}
// 		>
// 			<ModalWrapper>
// 				<h1>{modalContent}</h1>
// 				<h2>
// 					<ModalContent>내용1: {modalContent_sub1}</ModalContent>
// 				</h2>
// 				<h3>
// 					<ModalContent>내용2: {modalContent_sub2}</ModalContent>
// 				</h3>
// 				<h4>
// 					<ModalContent>내용3: {modalContent_sub3}</ModalContent>
// 				</h4>
// 				<button onClick={props.closed}>닫기</button>
// 			</ModalWrapper>
// 		</CSSTransition>
// 	);
// };

// export default Modal;

//------------------------------------------------------------
import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRecoilValue } from 'recoil';
import { couseDetailState } from '../../recoils/atoms';
import useClient from '../../hooks/useClient';
import {
	Overlay,
	ModalWrapper,
	Title,
	Subtitle,
	ModalContent,
	ButtonContainer,
	Button,
	Subject,
	SubjectContainer,
	TableContent
} from './ModalStyles';
import TableComponent from '../TableComponent';
import TableComponent2 from '../TableComponent2';

const Modal = ({ show, width, closed }) => {
	const [scrollPosition, setScrollPosition] = useState(0);
	const couseDetail = useRecoilValue(couseDetailState);
	const { fetchCourseDetail } = useClient();

	useEffect(() => {
		if (show) {
			fetchCourseDetail();
		}
	}, [show, fetchCourseDetail]);

	useEffect(() => {
		if (show) {
			setScrollPosition(window.scrollY);
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
			window.scrollTo(0, scrollPosition);
		}
	}, [show, scrollPosition]);

	const handleOverlayClick = (e) => {
		if (e.target === e.currentTarget) {
			closed();
		}
	};

	if (!couseDetail.length) return null;

	const modalContent = couseDetail[3]; // 예시로 두 번째 데이터를 사용

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

	//const courseTableData = modalContent.Addimfomation.table ? modalContent.Addimfomation.table.rows : [];

	return (
		<CSSTransition
			in={show}
			mountOnEnter
			unmountOnExit
			classNames={{
				appear: 'BounceImmerge',
				enter: 'BounceImmerge',
				exit: 'BounceDismiss'
			}}
		>
			<Overlay onClick={handleOverlayClick}>
				<ModalWrapper width={width} onClick={(e) => e.stopPropagation()}>
					<Title>Course Infomation</Title>
					<SubjectContainer>
						<Subject>
							{modalContent.typicalKoreanName} ({modalContent.typicalEnglishName})
						</Subject>
					</SubjectContainer>
					<Subtitle>국문설명</Subtitle>
					<ModalContent>{modalContent.koreanDescription}</ModalContent>
					<Subtitle>영문설명</Subtitle>
					<ModalContent>{modalContent.englishDescription}</ModalContent>
					{/* <Subtitle>교과 세부 정보</Subtitle>
					<ModalContent>
						<TableComponent data={courseTableData} />
					</ModalContent> */}
					<Subtitle>Additional Information</Subtitle>
					<TableContent>
						<TableComponent data={tableData} />
					</TableContent>
					<Subtitle>전공 역량</Subtitle>
					<TableContent>
						<TableComponent2 data={tableData2} />
					</TableContent>
					<ButtonContainer>
						<Button onClick={closed}>Close</Button>
					</ButtonContainer>
				</ModalWrapper>
			</Overlay>
		</CSSTransition>
	);
};

export default Modal;
