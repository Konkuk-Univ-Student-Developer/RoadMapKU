import React, { useState, useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import { Color, fadeIn } from '@styles';

const StyledCell = styled.div`
	min-height: 2rem;
	font-size: small;
	box-sizing: border-box;
	border-radius: 0.2rem;
	background-color: #fafafa;
	color: #1e1e1e;
	cursor: pointer;
	user-select: none;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	transition:
		background-color 0.3s ease-out,
		color 0.1s ease-out;

	opacity: 1;
	animation: ${fadeIn} 0.2s ease-in-out;

	&:hover {
		color: ${Color.GREEN};
		font-family: 'Pretendard-semiBold';
		transition: color 0.1s ease-out;
	}

	&.isHighlighted {
		background-color: ${Color.HOVER_GREEN};
		transition: background-color 0.3s ease-out;
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
`;

const CompetencyCell = forwardRef(({ cellData, onClick, highlightedCompetency }, ref) => {
	const [isHighlighted, setIsHighlighted] = useState(false);

	useEffect(() => {
		if (highlightedCompetency === cellData.competencyCode) {
			setIsHighlighted(true);
		} else {
			setIsHighlighted(false);
		}
	}, [cellData, highlightedCompetency]);

	return (
		<StyledCell ref={ref} className={isHighlighted ? 'isHighlighted' : ''}>
			<ButtonWrapper>
				<Button onClick={() => onClick(cellData.competencyCode)}>{cellData.competencyName}</Button>
			</ButtonWrapper>
		</StyledCell>
	);
});

CompetencyCell.displayName = 'CompetencyCell';

export default CompetencyCell;
