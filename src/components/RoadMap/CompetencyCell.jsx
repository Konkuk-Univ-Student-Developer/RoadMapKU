import React, { useState, useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import { immergeBounce, dismissBounce } from '../../Animation/Animation';
import CompetencyDetail from '../CompetencyDetail/CompetencyDetail';

const StyledCell = styled.div`
	min-height: 2rem;
	font-size: small;
	box-sizing: border-box;
	border: 1px solid #a4a4a4;
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

const Button = styled.div`
	: 'Pretendard-regular';
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	padding: 0.5rem;
	transition: background-color 0.3s ease-out;

	&:hover {
		background-color: #d9d9d9; /* Hover 시 회색 */
	}

	&:active {
		background-color: #fff9c4; /* Active 시 밝은 노란색 */
	}
	&.isHighlighted {
		background-color: #fff9c4; /* Highlighted 시 밝은 노란색 */
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
