import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { immergeBounce, dismissBounce } from '../Animation/Animation';

const animationTiming = {
	enter: 1000,
	exit: 1000
};

// Styled components
const ModalWrapper = styled.div`
	position: fixed;
	z-index: 200;
	border: 0.05rem solid black;
	background-color: white;
	padding: 10px;
	text-align: center;
	box-sizing: border-box;
	top: 25%;
	left: 25%;
	width: 50%;

	&.BounceImmerge {
		animation: ${immergeBounce} 400ms ease-out forwards;
	}

	&.BounceDismiss {
		animation: ${dismissBounce} 400ms ease-out forwards;
	}
`;

const ModalContent = styled.div`
	font-family: Arial;
	font-size: 1rem;
	text-align: start;
	margin: 10px 0;
`;

const Modal = (props) => {
	const [modalContent, setModalContent] = useState(null);
	const [modalContent_sub1, setModalContent_sub1] = useState(null);
	const [modalContent_sub2, setModalContent_sub2] = useState(null);
	const [modalContent_sub3, setModalContent_sub3] = useState(null);

	useEffect(() => {
		if (props.show) {
			setModalContent(props.item.content[0]);
			setModalContent_sub1(props.item.content[0]);
			setModalContent_sub2(props.item.content[0]);
			setModalContent_sub3(props.item.content[0]);
		}
	}, [props.show, props.content]);

	return (
		<CSSTransition
			in={props.show}
			timeout={animationTiming}
			mountOnEnter
			unmountOnExit
			classNames={{
				appear: 'BounceImmerge',
				enter: 'BounceImmerge',
				exit: 'BounceDismiss'
			}}
		>
			<ModalWrapper>
				<h1>{modalContent}</h1>
				<h2>
					<ModalContent>내용1: {modalContent_sub1}</ModalContent>
				</h2>
				<h3>
					<ModalContent>내용2: {modalContent_sub2}</ModalContent>
				</h3>
				<h4>
					<ModalContent>내용3: {modalContent_sub3}</ModalContent>
				</h4>
				<button onClick={props.closed}>닫기</button>
			</ModalWrapper>
		</CSSTransition>
	);
};

export default Modal;
