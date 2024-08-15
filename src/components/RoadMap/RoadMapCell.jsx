import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
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
	overflow: hidden;

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
	transition: background-color 0.3s ease-out;
	overflow: hidden;

	&:hover,
	&:active {
		background-color: #a9d1b3;
	}

	&.isHighlighted {
		background-color: yellow;
	}

	&.isHighlighted:hover,
	&.isHighlighted:active {
		background-color: #a9d1b3;
	}
`;

const RightButton = styled.div`
	width: 10%;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: background-color 0.3s ease-out;

	&:hover,
	&:active {
		background-color: #a9d1b3;
	}

	&.isHighlighted {
		background-color: yellow;
	}

	&.isHighlighted:hover,
	&.isHighlighted:active {
		background-color: #a9d1b3;
	}
`;

const Cell = ({ cellData, rowIndex, onClick, unclickable, highlightedCompetency }) => {
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const onClickDetailButton = () => {
		setIsDetailOpen(true);
	};

	const [isHighlighted, setIsHighlighted] = useState(false);
	let isSemesterCell = false;

	useEffect(() => {
		const competencyCodes = cellData.competencyCodes;
		if (Array.isArray(competencyCodes)) {
			if (competencyCodes.includes(highlightedCompetency)) {
				setIsHighlighted(true);
			} else {
				setIsHighlighted(false);
			}
		}
	}, [cellData, highlightedCompetency]);

	if (cellData.haksuId === '0') {
		unclickable = true;
		isSemesterCell = true;
	}

	return (
		<StyledCell className={unclickable ? 'unclickable' : 'courseCell'}>
			<ButtonWrapper>
				<LeftButton className={isHighlighted ? 'isHighlighted' : ''} onClick={onClickDetailButton}>
					{cellData.courseName}
				</LeftButton>
				{!isSemesterCell && (
					<RightButton className={isHighlighted ? 'isHighlighted' : ''} onClick={() => onClick(cellData, rowIndex)}>
						{cellData.isMyTable ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
					</RightButton>
				)}
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
