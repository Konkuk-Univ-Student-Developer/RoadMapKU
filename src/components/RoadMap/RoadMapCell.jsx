import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { immergeBounce, dismissBounce } from '../../Animation/Animation';
import CourseDetail from '../CourseDetail/CousreDetail';

const StyledCell = styled.div`
	min-width: 50%;
	min-height: 2rem;
	font-size: small;
	box-sizing: border-box;
	border: 0.05rem solid black;
	border-radius: 0.2rem;
	background-color: white;
	cursor: pointer;
	user-select: none;
	display: flex;
	transition: background-color 0.3s ease-out;
	overflow: hidden;

	&:hover,
	&:active {
		background-color: #a9d1b3;
	}

	&.unclickable {
		pointer-events: none;
		background-color: #f4f4f4;
	}

	&.isHighlighted {
		background-color: yellow;
	}

	&.Bounce-enter {
		animation: ${immergeBounce} 400ms ease-out forwards;
	}

	&.Bounce-exit {
		animation: ${dismissBounce} 400ms ease-out forwards;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;

const LeftButton = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	cursor: pointer;
	overflow: hidden;

	&:hover,
	&:active {
		background-color: #a9d1b3;
	}
`;

const RightButton = styled.div`
	width: 10%;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover,
	&:active {
		background-color: #a9d1b3;
	}
`;

const Cell = ({ cellData, rowIndex, onClick, unclickable, isHighlighted, competencyCode }) => {
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const onClickDetailButton = () => {
		setIsDetailOpen(true);
	};

	const [isHighlighted_final, setIsHighlighted_final] = useState(false);
	let isSemesterCell = false;

	useEffect(() => {
		const competencyCodes = cellData.competencyCodes;
		if (Array.isArray(competencyCodes)) {
			if (isHighlighted && competencyCodes.includes(competencyCode)) {
				setIsHighlighted_final(true);
			} else {
				setIsHighlighted_final(false);
			}
		}
	}, [cellData, isHighlighted]);

	if (cellData.haksuId === '0') {
		unclickable = true;
		isSemesterCell = true;
	}

	return (
		<StyledCell
			className={`${unclickable ? 'unclickable' : 'courseCell'} ${isHighlighted_final ? 'isHighlighted' : ''}`}
		>
			<ButtonWrapper>
				<LeftButton onClick={onClickDetailButton}>{cellData.courseName}</LeftButton>
				{!isSemesterCell && <RightButton onClick={() => onClick(cellData, rowIndex)}>:</RightButton>}
				{isDetailOpen && (
					<CourseDetail
						onClose={() => {
							setIsDetailOpen(false);
						}}
					/>
				)}
			</ButtonWrapper>
		</StyledCell>
	);
};

export default Cell;
