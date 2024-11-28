import React, { useState, useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import { immergeBounce, dismissBounce } from '../../Animation/Animation';
import CompetencyDetail from '../CompetencyDetail/CompetencyDetail';
import { fadeIn } from '../../style/Frames';
import { Color } from '../../style/Color';

const StyledCell = styled.div`
	min-height: 2rem;
	font-size: small;
	box-sizing: border-box;
	border-radius: 0.2rem;
	background-color: #fafafa;
	color: #2e2e2e;
	cursor: pointer;
	user-select: none;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	transition:
		color 0.1s ease-out,
		font 0.1s ease-out;

	opacity: 1;
	animation: ${fadeIn} 0.2s ease-in-out;

	&:hover {
		color: ${Color.GREEN};
		font-family: 'Pretendard-semiBold';
		transition: color 0.1s ease-out;
	}

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

const Button = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	padding: 0.5rem;
	transition: background-color 0.3s ease-out;

	&.isHighlighted {
		background-color: #effbef;
		transition: background-color 0.3s ease-out;
	}
`;

const Cell = forwardRef(({ cellData, onClick, highlightedCompetency }, ref) => {
	const [isHighlighted, setIsHighlighted] = useState(false);

	const [isDetailOpen, setIsDetailOpen] = useState(false);

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
				<Button className={isHighlighted ? 'isHighlighted' : ''} onClick={() => onClick(cellData.competencyCode)}>
					{cellData.competencyName}
				</Button>
				{isDetailOpen && (
					<CompetencyDetail
						onClose={() => {
							setIsDetailOpen(false);
						}}
						// competencyData={cellData}
					/>
				)}
			</ButtonWrapper>
		</StyledCell>
	);
});

Cell.displayName = 'Cell';

export default Cell;
