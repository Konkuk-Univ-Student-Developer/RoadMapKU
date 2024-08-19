import React, { useState, useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import { IoMdArrowDropright } from 'react-icons/io';
import { immergeBounce, dismissBounce } from '../../Animation/Animation';
import CompetencyDetail from '../CompetencyDetail/CompetencyDetail';

const StyledCell = styled.div`
	min-height: 2rem;
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

	&.Bounce-enter {
		animation: ${immergeBounce} 400ms ease-out forwards;
	}

	&.Bounce-exit {
		animation: ${dismissBounce} 0ms ease-out forwards;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;

const LeftButton = styled.div`
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	padding: 0.5rem;
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

const RightButton = styled.div`
	width: 10%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
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

const Cell = forwardRef(({ cellData, onClick, highlightedCompetency }, ref) => {
	const [isHighlighted, setIsHighlighted] = useState(false);

	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const onClickDetailButton = () => {
		setIsDetailOpen(true);
	};

	useEffect(() => {
		if (highlightedCompetency === cellData.competencyCode) {
			setIsHighlighted(true);
		} else {
			setIsHighlighted(false);
		}
	}, [cellData, highlightedCompetency]);

	return (
		<StyledCell ref={ref}>
			<ButtonWrapper>
				<LeftButton className={isHighlighted ? 'isHighlighted' : ''} onClick={onClickDetailButton}>
					{cellData.competencyName}
				</LeftButton>
				{isDetailOpen && (
					<CompetencyDetail
						onClose={() => {
							setIsDetailOpen(false);
						}}
						competencyData={cellData}
					/>
				)}
				<RightButton className={isHighlighted ? 'isHighlighted' : ''} onClick={() => onClick(cellData.competencyCode)}>
					<IoMdArrowDropright />
				</RightButton>
			</ButtonWrapper>
		</StyledCell>
	);
});

export default Cell;
