import styled from 'styled-components';
import { Color } from '../../style/Color';

export const ScrollContainer = styled.div`
	background-color: transparent;
	padding: 0rem;
	border-radius: 8px;
	max-height: 80vh;
	overflow-y: auto;
	width: 100%;
`;

export const Title = styled.div`
	background-color: ${Color.GREEN};
	text-align: center;
	padding: 1rem;
	border-radius: 8px;
	color: white;
	margin: 0;
	margin-bottom: 10px;
	font-size: 2rem;
`;
export const SubjectContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 0rem;
`;

export const Subtitle = styled.h2`
	color: ${Color.GREEN};
	font-size: 1.5rem;
	margin: 0rem 20px;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
`;

export const ModalContent = styled.div`
	font-size: 1rem;
	margin: 10px 20px;
	line-height: 1.5;
`;

export const TableContent = styled.div`
	margin: 10px 0;
`;
