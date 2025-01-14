import React, { useState, useEffect, forwardRef } from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedCompetencyState } from '../../recoils/atoms';
import { Color } from '../../styles/Color';
import { fadeIn } from '../../styles/Frames';

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

const CompetencyCell = forwardRef(({ cellData }, ref) => {
	const selectedCompetency = useRecoilValue(selectedCompetencyState);
	const setSelectedCompetencyState = useSetRecoilState(selectedCompetencyState);
	const [isHighlighted, setIsHighlighted] = useState(false);

	useEffect(() => {
		if (selectedCompetency === cellData.competencyCode) {
			setIsHighlighted(true);
		} else {
			setIsHighlighted(false);
		}
	}, [cellData, selectedCompetency]);

	// 선택된 전공역량에 해당하는 교과목들을 하이라이트하는 기능
	const handleCellClick_highlight = (selectedCompetencyCode) => {
		setSelectedCompetencyState((prevCompetency) => {
			if (prevCompetency === selectedCompetencyCode) {
				return 'default';
			}
			return selectedCompetencyCode;
		});
	};

	return (
		<StyledCell ref={ref} className={isHighlighted ? 'isHighlighted' : ''}>
			<ButtonWrapper>
				<Button onClick={() => handleCellClick_highlight(cellData.competencyCode)}>{cellData.competencyName}</Button>
			</ButtonWrapper>
		</StyledCell>
	);
});

CompetencyCell.displayName = 'CompetencyCell';

export default CompetencyCell;
