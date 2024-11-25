import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { immergeBounce, dismissBounce } from '../../Animation/Animation';

const StyledCell = styled.div`
	min-height: 2rem;
	display: flex;
	font-size: small;
	border-radius: 0.2rem;
	background-color: #fafafa;
	color: #1c1c1c;
	user-select: none;

	&.unclickable {
		pointer-events: none;
		background-color: #e6e6e6;
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
	padding: 0.5rem;

	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	display: inline-block;
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
