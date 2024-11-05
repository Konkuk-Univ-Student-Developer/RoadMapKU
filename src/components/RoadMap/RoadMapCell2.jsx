import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { immergeBounce, dismissBounce } from '../../Animation/Animation';
import CourseDetail from '../CourseDetail/CourseDetail';

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

const Button = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	position: relative;
	justify-content: space-between;
	align-items: center;
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
	position: relative;

	&:hover {
		background-color: #d9d9d9;
	}

	&.unclickable {
		pointer-events: none;
		background-color: #f4f4f4;
	}

	&.isHighlighted {
		background-color: #fff9c4;
	}

	&.Bounce-enter {
		animation: ${immergeBounce} 400ms ease-out forwards;
	}

	&.Bounce-exit {
		animation: ${dismissBounce} 400ms ease-out forwards;
	}
`;

const CourseTitle = styled.div`
	font-family: 'Pretendard-regular';
	padding: 0 0.7rem;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	display: inline-block;
	width: 100%;

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
		setIsHighlighted(Array.isArray(competencyCodes) && competencyCodes.includes(highlightedCompetency));
	}, [cellData, highlightedCompetency]);

	const onClickDetailButton = () => {
		setIsDetailOpen(true);
		onDropdownToggle(); // 드롭박스 닫기
	};

	const onClickRoadmapButton = () => {
		onClick(cellData, rowIndex);
		onDropdownToggle(); // 기존 드롭박스 닫기
	};

	return (
		<StyledCell
			className={`${unclickable ? 'unclickable' : ''} ${isHighlighted ? 'isHighlighted' : ''}`}
			onClick={onDropdownToggle}
		>
			<Button>
				<CourseTitle className={cellData.haksuId === '0' ? 'semesterCell' : ''}>{cellData.courseName}</CourseTitle>
				{isDropdownOpen && (
					<Dropdown>
						<DropdownItem onClick={onClickDetailButton}>상세 정보</DropdownItem>
						<DropdownItem onClick={onClickRoadmapButton}>
							{cellData.isMyTable ? '내 로드맵에서 제거' : '내 로드맵에 추가'}
						</DropdownItem>
					</Dropdown>
				)}
				{isDetailOpen && <CourseDetail onClose={() => setIsDetailOpen(false)} HaksuId={cellData.haksuId} />}
			</Button>
		</StyledCell>
	);
};

Cell2.displayName = 'Cell2';
export default Cell2;
