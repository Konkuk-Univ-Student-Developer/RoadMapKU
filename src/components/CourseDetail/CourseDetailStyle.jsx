import styled from 'styled-components';

export const ScrollContainer = styled.div`
	background-color: transparent;
	padding: 0rem;
	border-radius: 8px;
	max-height: 80vh; /* 내용물의 최대 높이 설정 */
	overflow-y: auto; /* 세로 스크롤바 표시 */
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
	margin-top: 0rem;
`;

export const Subject = styled.h1`
	justify-content: center;
	border-radius: 8px;
	color: black;
	margin: 0;
	font-size: 1.7rem;
	padding: 0rem;
`;

export const Subtitle = styled.h2`
	color: #036b3f; /* main color */
	font-size: 1.5rem;
	margin: 0.5rem 20px;
	padding-top: 2rem;
`;

export const ModalContent = styled.div`
	font-family: Arial;
	font-size: 1rem;
	margin: 10px 20px;
`;

export const TableContent = styled.div`
	font-family: Arial;
	margin: 10px 0;
`;
