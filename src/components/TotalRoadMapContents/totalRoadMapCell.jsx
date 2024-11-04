import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { immergeBounce, dismissBounce } from '../../Animation/Animation';

const StyledCell = styled.div`
	min-height: 2rem;
	display: flex;
	font-size: small;
	border: 0.05rem solid black;
	border-radius: 0.2rem;
	background-color: white;
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
	font-family: 'Pretendard-regular';
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	transition: background-color 0.3s ease-out;
	overflow: hidden;
	padding: 0.5rem;
`;

const Cell = forwardRef(({ cellData, unclickable }, ref) => {
	return (
		<StyledCell ref={ref} className={unclickable ? 'unclickable' : ''}>
			<ButtonWrapper>
				<LeftButton>{cellData.courseName}</LeftButton>
			</ButtonWrapper>
		</StyledCell>
	);
});

Cell.displayName = 'Cell';

export default Cell;
