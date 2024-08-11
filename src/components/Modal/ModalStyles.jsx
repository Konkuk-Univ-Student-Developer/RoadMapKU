import styled from 'styled-components';
import { immergeBounce, dismissBounce } from '../../Animation/Animation';

// export const Overlay = styled.div`
// 	position: fixed;
// 	top: 0;
// 	left: 0;
// 	right: 0;
// 	bottom: 0;
// 	background: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	z-index: 1000;
// `;

export const ModalWrapper = styled.div`
	// position: fixed;
	// z-index: 200;
	// border: 0.05rem solid black;
	// background-color: white;
	// padding: 2.5rem;
	// text-align: start;
	// box-sizing: border-box;
	// top: 50%;
	// left: 50%;
	// width: ${(props) => (props.width ? `${props.width}px` : '786px')};
	// max-width: 100%;
	// max-height: 80vh; /* 최대 높이 조정 */
	// overflow: auto; /* 기본 스크롤바 숨기기 */
	// transform: translate(-50%, -50%); /* 모달을 중앙에 배치 */
	// border-radius: 1rem; /* 모서리 둥글게 */
	// box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 시각적으로 모달을 돋보이게 하는 그림자 추가 */
	// z-index: 1001; /* Overlay보다 위에 표시되도록 설정 */

	// &.BounceImmerge {
	// 	animation: ${immergeBounce} 400ms ease-out forwards;
	// }

	// &.BounceDismiss {
	// 	animation: ${dismissBounce} 400ms ease-out forwards;
	// }
	width: 800px;
	height: fit-content;
	border-radius: 15px;
	background-color: #fff;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Title = styled.h1`
	background-color: #036b3f;
	padding: 1rem;
	border-radius: 8px;
	color: white;
	margin: 0;
	font-size: 2rem;
`;
export const SubjectContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 1rem;
`;
export const Subject = styled.h1`
	// background-color: lightgray;
	justify-content: center;
	border-radius: 8px;
	color: black;
	margin: 0;
	font-size: 1.7rem;
	padding: 0.5rem;
`;

export const Subtitle = styled.h2`
	color: #036b3f; /* main color */
	font-size: 1.5rem;
	margin: 0.5rem 0;
	padding-top: 2rem;
`;

export const ModalContent = styled.div`
	font-family: Arial;
	font-size: 1rem;
	margin: 10px 0;
`;
export const TableContent = styled.div`
	font-family: Arial;

	margin: 10px 0;
`;

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-bottom: 1rem;

	th,
	td {
		border: 1px solid #e5e7eb;
		padding: 0.5rem;
		text-align: left;
	}

	th {
		background-color: #f3f4f6;
	}
`;

export const ButtonContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-right: 2rem;
	margin-top: 1rem;
	margin-bottom: -2rem;
`;

export const Button = styled.button`
	background-color: #036b3f; /* main color */
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 0.875rem;
	font-weight: normal;
	border-radius: 0.375rem;
	padding: 0.5rem 1.25rem;
	transition: background-color 0.2s ease-in-out;
	cursor: pointer;
	&:hover {
		background-color: #059669; /* darker green on hover */
	}
`;
//------------------
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
	width: 600px;
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
	h1 {
		font-size: 30px;
		font-weight: 600;
		margin-bottom: 60px;
	}
	img {
		margin-top: 60px;
		width: 300px;
	}
`;
// const Button = styled.button`
// 	font-size: 14px;
// 	padding: 10px 20px;
// 	border: none;
// 	background-color: #ababab;
// 	border-radius: 10px;
// 	color: white;
// 	font-style: italic;
// 	font-weight: 200;
// 	cursor: pointer;
// 	&:hover {
// 		background-color: #898989;
// 	}
// `;
