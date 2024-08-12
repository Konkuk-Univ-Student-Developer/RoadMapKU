import React, { useState } from 'react';
import styled from 'styled-components';
import { immergeBounce, dismissBounce } from '../../Animation/Animation';
import CourseDetail from '../CourseDetail/CousreDetail';

const StyledCell = styled.div`
	height: 2rem;
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
	transition: background-color 0.3s ease-out;
	overflow: hidden;

	&:hover,
	&:active {
		background-color: #a9d1b3;
	}

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
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	&:hover,
	&:active {
		background-color: #a9d1b3;
	}
`;

const RightButton = styled.div`
	width: 10%;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover,
	&:active {
		background-color: #a9d1b3;
	}
`;

const Cell = ({ cellData, rowIndex, onClick, unclickable }) => {
	const [isOpen1, setIsOpen1] = useState(false);
	const onClickButton1 = () => {
		setIsOpen1(true);
	};

	return (
		<StyledCell className={unclickable ? 'unclickable' : ''}>
			<ButtonWrapper>
				<LeftButton onClick={() => onClick(cellData, rowIndex)}>{cellData.courseName}</LeftButton>
				<RightButton onClick={onClickButton1}>:</RightButton>
				{isOpen1 && (
					<CourseDetail
						onClose={() => {
							setIsOpen1(false);
						}}
					/>
				)}
			</ButtonWrapper>
		</StyledCell>
	);
};

export default Cell;
