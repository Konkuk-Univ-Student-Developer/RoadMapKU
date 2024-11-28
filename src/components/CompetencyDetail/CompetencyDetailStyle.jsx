import styled from 'styled-components';
import { Color } from '../../style/Color';

export const ScrollContainer = styled.div`
	width: 100%;
	background-color: transparent;
	padding: 0rem;
	border-radius: 8px;
	max-height: 80vh;
	overflow-y: auto;
	overflow-x: hidden;
`;

export const Title = styled.h1`
	background-color: ${Color.GREEN};
	padding: 1rem;
	border-radius: 8px;
	color: white;
	margin: 0;
	font-size: 2rem;
	text-align: center;
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
	color: ${Color.GREEN};
	font-size: 1.5rem;
	margin: 0.5rem 20px;
	padding-top: 2rem;
`;

export const ModalContent = styled.div`
	font-size: 1rem;
	margin: 10px 20px;
`;

export const TableContent = styled.div`
	margin: 10px 0;
`;
