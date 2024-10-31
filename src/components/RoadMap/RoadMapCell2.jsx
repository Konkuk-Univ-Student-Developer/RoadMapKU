import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { OverflowMenuHorizontal } from '@carbon/icons-react';

import { immergeBounce, dismissBounce } from '../../Animation/Animation';
import CourseDetail from '../CourseDetail/CourseDetail';

const EllipsisButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	padding: 0 3px;
	display: flex;
	align-items: center;
	&:hover {
		color: gray;
	}
	position: relative;
	font-size: 24px; /* Set icon size */
`;

const Dropdown = styled.div`
	position: absolute;
	background-color: white;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	z-index: 1000;
	min-width: 150px;
	right: 0;
	top: 100%;
`;

const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	position: relative;
	justify-content: space-between; /* 버튼을 오른쪽 고정 */
	align-items: center; /* 상하 중앙 정렬 */
	text-align: center;
`;

const DropdownItem = styled.div`
	padding: 10px;
	cursor: pointer;
	&:hover {
		background-color: #f0f0f0;
	}
`;

const StyledCell = styled.div`
	min-height: 2rem;
	display: flex;
	font-size: small;
	border: 0.05rem solid black;
	border-radius: 0.2rem;
	background-color: white;
	cursor: pointer;
	user-select: none;

	&.unclickable {
		pointer-events: none;
		background-color: #f4f4f4;
	}

	&.isHighlighted {
		background-color: #fff9c4; /* Highlight 색상 */
		//background-color: #fff8e1; /* Highlight 색상2 */
		//background-color: #ffffe0; /* Highlight 색상3 */
	}

	&.Bounce-enter {
		animation: ${immergeBounce} 400ms ease-out forwards;
	}

	&.Bounce-exit {
		animation: ${dismissBounce} 400ms ease-out forwards;
	}
`;

// const CourseTitle = styled.div`
// 	padding-left: 0.5rem;
// 	text-overflow: ellipsis;
// 	white-space: nowrap;
// 	overflow: hidden;
// 	display: flex;
// 	align-items: center; /* 상하 중앙 정렬 */

// 	&.semesterCell {
// 		padding-left: 0;
// 	}
// `;
const CourseTitle = styled.div`
	padding: 0 0.7rem;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	display: inline-block;
	width: 100%; /* 부모의 너비에 맞춤 */

	&.semesterCell {
		padding-left: 0;
	}
`;

const Cell2 = ({
	cellData,
	rowIndex,
	onClick,
	unclickable,
	isDropdownOpen,
	onDropdownToggle,
	highlightedCompetency
}) => {
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const [isHighlighted, setIsHighlighted] = useState(false);

	useEffect(() => {
		const competencyCodes = cellData.competencyCodes;
		if (Array.isArray(competencyCodes)) {
			setIsHighlighted(competencyCodes.includes(highlightedCompetency));
		} else {
			setIsHighlighted(false);
		}
	}, [cellData, highlightedCompetency]);

	const onClickDetailButton = () => {
		setIsDetailOpen(true);
		onDropdownToggle(); // 드롭다운 닫기
	};

	const onClickRoadmapButton = () => {
		onClick(cellData, rowIndex);
		onDropdownToggle(); // 드롭다운 닫기
	};

	return (
		<StyledCell className={`${unclickable ? 'unclickable' : ''} ${isHighlighted ? 'isHighlighted' : ''}`}>
			<ButtonWrapper>
				<CourseTitle className={cellData.haksuId === '0' ? 'semesterCell' : ''}>{cellData.courseName}</CourseTitle>
				<EllipsisButton onClick={onDropdownToggle}>
					<OverflowMenuHorizontal size={24} />
				</EllipsisButton>
				{isDropdownOpen && (
					<Dropdown>
						<DropdownItem onClick={onClickDetailButton}>상세 정보</DropdownItem>
						<DropdownItem onClick={onClickRoadmapButton}>
							{cellData.isMyTable ? '내 로드맵에서 제거' : '내 로드맵에 추가'}
						</DropdownItem>
					</Dropdown>
				)}
				{isDetailOpen && <CourseDetail onClose={() => setIsDetailOpen(false)} HaksuId={cellData.haksuId} />}
			</ButtonWrapper>
		</StyledCell>
	);
};

Cell2.displayName = 'Cell2';
export default Cell2;
