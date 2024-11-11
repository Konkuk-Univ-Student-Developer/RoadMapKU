import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { immergeBounce, dismissBounce } from '../../../Animation/Animation';
import CourseDetail from '../../CourseDetail/CourseDetail';
import DropdownPortal from './DropdownPortal';

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
	font-family: 'Pretendard-regular';
	font-size: 12px; // 글자 크기 설정
	padding: 5px;
	cursor: pointer;
	&:hover {
		background-color: #f0f0f0;
	}
`;

const StyledCell = styled.div`
	font-family: 'Pretendard-regular';
	font-size: small;
	min-height: 2rem;
	display: flex;
	border: 1px solid #a4a4a4;
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

const Cell2 = ({ cellData, rowIndex, onClick, unclickable, onDropdownToggle, highlightedCompetency }) => {
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const [isHighlighted, setIsHighlighted] = useState(false);
	const [dropdownPosition, setDropdownPosition] = useState({ x: 0, y: 0 });
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const cellRef = useRef(null);

	useEffect(() => {
		const competencyCodes = cellData.competencyCodes;
		setIsHighlighted(Array.isArray(competencyCodes) && competencyCodes.includes(highlightedCompetency));
	}, [cellData, highlightedCompetency]);

	const handleDropdownToggle = (event) => {
		const element = event.currentTarget; // 클릭한 셀 요소
		const rect = element.getBoundingClientRect(); // 요소의 위치 정보

		// 오른쪽 끝에 -0.5rem 추가하여 드롭다운 위치 설정
		setDropdownPosition({ x: rect.right - 110, y: rect.bottom + window.scrollY });
		setIsDropdownOpen((prev) => !prev);
	};

	const onClickDetailButton = () => {
		setIsDetailOpen(true);
		onDropdownToggle();
	};

	const onClickRoadmapButton = () => {
		onClick(cellData, rowIndex);
		setIsDropdownOpen(false);
	};

	return (
		<StyledCell
			className={`${unclickable ? 'unclickable' : ''} ${isHighlighted ? 'isHighlighted' : ''}`}
			onClick={handleDropdownToggle}
			ref={cellRef}
		>
			<Button>
				<CourseTitle className={cellData.haksuId === '0' ? 'semesterCell' : ''}>{cellData.courseName}</CourseTitle>
				{isDropdownOpen && (
					<DropdownPortal
						x={dropdownPosition.x}
						y={dropdownPosition.y}
						onClose={() => setIsDropdownOpen(false)}
						cellRef={cellRef}
					>
						{/* Dropdown 메뉴 항목 추가 */}
						<DropdownItem onClick={onClickDetailButton}>상세 정보</DropdownItem>
						<DropdownItem onClick={onClickRoadmapButton}>
							{cellData.isMyTable ? '내 로드맵에서 제거' : '내 로드맵에 추가'}
						</DropdownItem>
					</DropdownPortal>
				)}
				{isDetailOpen && <CourseDetail onClose={() => setIsDetailOpen(false)} HaksuId={cellData.haksuId} />}
			</Button>
		</StyledCell>
	);
};

Cell2.displayName = 'Cell2';
export default Cell2;
