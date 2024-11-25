import React from 'react';
import styled from 'styled-components';

const StyledCell = styled.div`
	min-height: 2rem;
	display: flex;
	font-size: small;
	font-family: 'Pretendard-semiBold';
	border-radius: 0.2rem;
	background-color: #e6e6e6;
	color: #2e2e2e;
	user-select: none;
	pointer-events: none;
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

const Cell = ({ cellData }) => {
	return (
		<StyledCell>
			<LeftButton>
				<CourseTitle className={cellData.haksuId === '0' ? 'semesterCell' : ''}>{cellData.courseName}</CourseTitle>
			</LeftButton>
		</StyledCell>
	);
};

Cell.displayName = 'Cell';

export default Cell;
