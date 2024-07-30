import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
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
	transition: background-color 0.2s ease-out;

	&:hover,
	&:active {
		background-color: #a9d1b3;
	}

	&.unclickable {
		pointer-events: none;
		background-color: #f4f4f4;
	}

	&.Bounce-enter {
		animation: ${immergeBounce} 400ms ease-out forwards;
	}

	&.Bounce-exit {
		animation: ${dismissBounce} 400ms ease-out forwards;
	}
`;

const Cell = ({ cellData, rowIndex, onClick, unclickable }) => {
	const [inProp, setInProp] = useState(false);

	useEffect(() => {
		setInProp(true);
		return () => setInProp(false);
	}, [cellData]);

	return (
		<CSSTransition
			in={inProp}
			timeout={400}
			classNames={{
				enter: 'Bounce-enter',
				exit: 'Bounce-exit'
			}}
		>
			<StyledCell className={unclickable ? 'unclickable' : ''} onClick={() => onClick(cellData, rowIndex)}>
				{cellData}
			</StyledCell>
		</CSSTransition>
	);
};

export default Cell;
