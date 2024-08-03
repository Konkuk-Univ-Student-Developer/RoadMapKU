import React from 'react';
import styled from 'styled-components';
import { immergeBounce, dismissBounce } from '../../Animation/Animation';

const StyledCell = styled.div`
	height: 2rem;
	font-size: small;
	box-sizing: border-box;
	border: 0.05rem solid black;
	border-radius: 0.2rem;
	background-color: white;
	cursor: pointer;
	user-select: none;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	transition: background-color 0.3s ease-out;

	&:hover,
	&:active {
		background-color: #a9d1b3;
	}

	&.Bounce-enter {
		animation: ${immergeBounce} 400ms ease-out forwards;
	}

	&.Bounce-exit {
		animation: ${dismissBounce} 0ms ease-out forwards;
	}
`;

const Cell = ({ cellData }) => {
	return <StyledCell>{cellData.competencyName}</StyledCell>;
};

export default Cell;
