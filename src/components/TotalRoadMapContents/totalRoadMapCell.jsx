import React, { forwardRef } from 'react';
import styled from 'styled-components';

const StyledCell = styled.div`
	min-height: 2rem;
	display: flex;
	font-size: small;
	border-radius: 0.2rem;
	background-color: #fafafa;
	color: #2e2e2e;
	user-select: none;

	&.unclickable {
		pointer-events: none;
		background-color: #e6e6e6;
		font-family: 'Pretendard-semiBold';
	}
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
			<LeftButton>{cellData.courseName}</LeftButton>
		</StyledCell>
	);
});

Cell.displayName = 'Cell';

export default Cell;
