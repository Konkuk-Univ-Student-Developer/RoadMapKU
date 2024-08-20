import React, { useState, useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { immergeBounce, dismissBounce } from '../../Animation/Animation';
import CourseDetail from '../CourseDetail/CourseDetail';

const StyledCell = styled.div`
	min-height: 2rem;
	display: flex;
	font-size: small;
	border: 0.05rem solid black;
	border-radius: 0.2rem;
	background-color: white;
	cursor: pointer;
	user-select: none;

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
	width: 100%;
	display: flex;
	flex-direction: row;
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

const CourseTitle = styled.div`
	padding-left: 0.5rem;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;

	&.semesterCell {
		padding-left: 0;
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

const Cell = forwardRef(({ cellData, rowIndex, onClick, unclickable, highlightedCompetency }, ref) => {
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const onClickDetailButton = () => {
		setIsDetailOpen(true);
	};
	const [isHighlighted, setIsHighlighted] = useState(false);

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

	return (
		<StyledCell className={unclickable ? 'unclickable' : ''}>
			<ButtonWrapper>
				<LeftButton className={isHighlighted ? 'isHighlighted' : ''} onClick={onClickDetailButton}>
					<CourseTitle className={cellData.haksuId === '0' ? 'semesterCell' : ''}>{cellData.courseName}</CourseTitle>
				</LeftButton>
				{isDetailOpen && (
					<CourseDetail
						onClose={() => {
							setIsDetailOpen(false);
						}}
						HaksuId={cellData.haksuId}
					/>
				)}
				{!(cellData.haksuId === '0') && (
					<RightButton className={isHighlighted ? 'isHighlighted' : ''} onClick={() => onClick(cellData, rowIndex)}>
						{cellData.isMyTable ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
					</RightButton>
				)}
			</ButtonWrapper>
		</StyledCell>
	);
});

export default Cell;
