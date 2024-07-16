import React, { useState, useEffect } from 'react';
import './Modal.css';
import '../../Animation/Animation.css';
import { CSSTransition } from 'react-transition-group';

const animationTiming = {
	enter: 1000,
	exit: 1000
};

const Modal = (props) => {
	const [modalContent, setModalContent] = useState(null);
	const [modalContent_sub1, setModalContent_sub1] = useState(null);
	const [modalContent_sub2, setModalContent_sub2] = useState(null);
	const [modalContent_sub3, setModalContent_sub3] = useState(null);

	useEffect(() => {
		if (props.show) {
			setModalContent(props.content[0]);
			setModalContent_sub1(props.content[0]);
			setModalContent_sub2(props.content[0]);
			setModalContent_sub3(props.content[0]);
		}
	}, [props.show, props.content, props.content_sub1, props.content_sub2, props.content_sub3]);

	return (
		<CSSTransition
			in={props.show}
			timeout={animationTiming}
			mountOnEnter
			unmountOnExit
			classNames={{
				appear: 'BounceImmerge',
				appearActive: '',
				enter: 'BounceImmerge',
				enterActive: '',
				exit: 'BounceDismiss',
				exitActive: ''
			}}
		>
			<div className="Modal">
				<h1>{modalContent}</h1>
				<h2 className="modal-content">내용1: {modalContent_sub1}</h2>
				<h3 className="modal-content">내용2: {modalContent_sub2}</h3>
				<h4 className="modal-content">내용3: {modalContent_sub3}</h4>
				<button className="Button" onClick={props.closed}>
					닫기
				</button>
			</div>
		</CSSTransition>
	);
};

export default Modal;
