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

import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
// import { Scrollbars } from 'react-custom-scrollbars';
import {
	ModalWrapper,
	Title,
	Subtitle,
	ModalContent,
	Table,
	ButtonContainer,
	Button,
	Subject,
	SubjectContainer
} from './ModalStyles'; // 경로는 실제 파일 위치에 맞게 조정
import TableComponent from '../TableComponent';

const animationTiming = {
	enter: 1000,
	exit: 1000
};

const Modal = ({ show, width, closed }) => {
	const [title, setTitle] = useState('');
	const [subject, setSubject] = useState('');
	const [subtitle1, setSubtitle1] = useState('');
	const [text1, setText1] = useState('');
	const [subtitle2, setSubtitle2] = useState('');
	const [text2, setText2] = useState('');
	const [subtitle3, setSubtitle3] = useState('');
	const [tableHeaders, setTableHeaders] = useState([]);
	const [tableRows, setTableRows] = useState([]);
	// const [additionalInfo, setAdditionalInfo] = useState({
	// 	university: '',
	// 	department: '',
	// 	lectureType: '',
	// 	grade: '',
	// 	semester: '',
	// 	credits: '',
	// 	certificationCompletion: '',
	// 	certificationType: '',
	// 	certificationDetail: '',
	// 	sameCourseCode: '',
	// 	prerequisite: '',
	// 	mooc: '',
	// 	selc: '',
	// 	challenger: ''
	// });

	useEffect(() => {
		const modalContent = {
			title: 'Course Information',
			subject: 'CSP진로탐색',
			sections: [
				{
					subtitle: '국문설명',
					text: 'CSP진로탐색은 학부 1학년 1학기에 재학하는 학생들을 대상으로 학과 교수들이 1:1 맞춤형 상담을 통해서 학생의 적성을 조기에 발견하고 학생에게 가장 적합한 직업계획을 마련할 수 있도록 진로를 설계해주는 과목이다.'
				},
				{
					subtitle: '영문설명',
					text: "The class of career success program is a course for freshman of undergraduate school in the spring semester. The objective of this class is to find each student's talent earlier and to prepare themselves for getting their proper jobs after graduation through tutoring system with professors in the department."
				},
				{
					subtitle: '교과 세부 정보',
					table: {
						headers: ['교과번호', '학문분야(대)', '학문분야(중)', '학문분야(소)', '학문분야(세)'],
						rows: [['EDUC 1107 104', '사회과학', '교육학', '분야교육', '진로교육']]
					}
				},
				{
					subtitle: 'Additional Information',
					text: {
						university: '공과대학',
						department: '공과대학',
						lectureType: '이론+실습',
						grade: '1',
						semester: '1학기',
						credits: '2',
						certificationCompletion: '선택',
						certificationType: '선택',
						certificationDetail: '-',
						sameCourseCode: '-',
						prerequisite: '-',
						mooc: 'N',
						selc: 'N',
						challenger: 'N'
					}
				}
			]
		};

		setTitle(modalContent.title);
		setSubject(modalContent.subject);
		setSubtitle1(modalContent.sections[0].subtitle);
		setText1(modalContent.sections[0].text);
		setSubtitle2(modalContent.sections[1].subtitle);
		setText2(modalContent.sections[1].text);
		setSubtitle3(modalContent.sections[2].subtitle);
		setTableHeaders(modalContent.sections[2].table.headers);
		setTableRows(modalContent.sections[2].table.rows);
		// setAdditionalInfo(modalContent.sections[3].text);
	}, []);

	return (
		<CSSTransition
			in={show}
			timeout={animationTiming}
			mountOnEnter
			unmountOnExit
			classNames={{
				appear: 'BounceImmerge',
				enter: 'BounceImmerge',
				exit: 'BounceDismiss'
			}}
		>
			<ModalWrapper width={width}>
				<div>
					<Title>{title}</Title>
					<SubjectContainer>
						<Subject>{subject}</Subject>
					</SubjectContainer>
					<div>
						<Subtitle>{subtitle1}</Subtitle>
						<ModalContent>{text1}</ModalContent>
					</div>
					<div>
						<Subtitle>{subtitle2}</Subtitle>
						<ModalContent>{text2}</ModalContent>
					</div>
					<div>
						<Subtitle>{subtitle3}</Subtitle>
						<ModalContent>
							<Table>
								<thead>
									<tr>
										{tableHeaders.map((header, i) => (
											<th key={i}>{header}</th>
										))}
									</tr>
								</thead>
								<tbody>
									{tableRows.map((row, i) => (
										<tr key={i}>
											{row.map((cell, j) => (
												<td key={j}>{cell}</td>
											))}
										</tr>
									))}
								</tbody>
							</Table>
						</ModalContent>
					</div>
					<div>
						<Subtitle>Additional information </Subtitle>
						<ModalContent>
							{/* <p>{additionalInfo.university}</p>
							<p>{additionalInfo.department}</p>
							<p>{additionalInfo.lectureType}</p>
							<p>{additionalInfo.grade}</p>
							<p>{additionalInfo.semester}</p>
							<p>{additionalInfo.credits}</p>
							<p>{additionalInfo.certificationCompletion}</p>
							<p>{additionalInfo.certificationType}</p>
							<p>{additionalInfo.certificationDetail}</p>
							<p>{additionalInfo.sameCourseCode}</p>
							<p>{additionalInfo.prerequisite}</p>
							<p>{additionalInfo.mooc}</p>
							<p>{additionalInfo.selc}</p>
							<p>{additionalInfo.challenger}</p> */}
							<TableComponent />
						</ModalContent>
					</div>
					<ButtonContainer>
						<Button onClick={closed}>Close</Button>
					</ButtonContainer>
				</div>
			</ModalWrapper>
		</CSSTransition>
	);
};

export default Modal;
