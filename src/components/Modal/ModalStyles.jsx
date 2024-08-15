import styled from 'styled-components';

export const ModalContent = styled.div`
	font-family: Arial;
	font-size: 1rem;
	margin: 10px 0;
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-right: 2rem;
	margin-top: 1rem;
	margin-bottom: -2rem;
`;

export const Overlay = styled.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background: rgba(0, 0, 0, 0.2);
	z-index: 9999;
`;

export const ModalWrap = styled.div`
	width: 70%;
	height: fit-content;
	border-radius: 15px;
	background-color: #fff;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Contents = styled.div`
	margin: 50px 30px;
	display: flex;
	justify-content: center;
	h1 {
		font-size: 30px;
		font-weight: 600;
		margin-bottom: 30px;
	}
	img {
		margin-top: 60px;
		width: 300px;
	}
`;
