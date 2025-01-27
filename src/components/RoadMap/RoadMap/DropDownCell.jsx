import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CourseDetail } from '@CourseDetail';
import { Color, fadeIn } from '@styles';

const Button = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	position: relative;
	justify-content: space-between;
	align-items: center;
	text-align: center;
`;

const StyledCell = styled.div`
	font-size: small;
	min-height: 2rem;
	display: flex;
	border-radius: 0.2rem;
	background-color: #fafafa;
	color: #1e1e1e;
	cursor: pointer;
	user-select: none;
	position: relative;
	transition:
		background-color 0.1s ease-out,
		color 0.1s ease-out,
		font 0.1s ease-out;

	opacity: 1;
	animation: ${fadeIn} 0.2s ease-in-out;

	&.unclickable {
		pointer-events: none;
		background-color: ${Color.DIM_GREY};
	}

	&.isHighlighted {
		background-color: ${Color.HOVER_GREEN};
	}

	&.isUnclickableHighlighted {
		pointer-events: none;
		background-color: ${Color.DIM_GREY};
	}
`;

const CourseTitle = styled.div`
	padding: 0 0.7rem;
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	display: inline-block;
	width: 100%;

	&:hover {
		font-family: 'Pretendard-semiBold';
		color: ${Color.GREEN};
	}

	&.semesterCell {
		padding-left: 0;
	}
`;

const DropdownContainer = styled.div`
	top: 30px;
	position: absolute;
	cursor: pointer;
	background-color: white;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	z-index: 1;
	width: 100%;
	padding: 10px 0;
`;

const DropdownMyRoadMapItem = styled.div.attrs(({ isAdd, courseName }) => ({
	id: isAdd ? `add_${courseName}` : `remove_${courseName}`
}))`
	font-size: 12px;
	padding: 5px;
	color: ${Color.BLACK};
	cursor: pointer;
	&:hover {
		background-color: #f0f0f0;
	}
`;

const DropdownCourseDetailItem = styled.div.attrs(({ courseName }) => ({
	id: `course_detail_${courseName}`
}))`
	font-size: 12px;
	padding: 5px;
	color: ${Color.BLACK};
	cursor: pointer;
	&:hover {
		background-color: #f0f0f0;
	}
`;

const DropDownCell = ({ cellData, rowIndex, onClick, unclickable, highlightedCompetency, onClickSendRef }) => {
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const [isHighlighted, setIsHighlighted] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const cellRef = useRef(null);

	useEffect(() => {
		const competencyCodes = cellData.competencyCodes;
		if (Array.isArray(competencyCodes)) {
			const hasHighlightedCompetency = competencyCodes.some(
				(competency) => competency.competencyCode === highlightedCompetency
			);

			setIsHighlighted(hasHighlightedCompetency);
		}

		const handleClickOutside = (event) => {
			if (cellRef.current && !cellRef.current.contains(event.target)) {
				setIsDropdownOpen(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [cellData, highlightedCompetency]);

	const handleDropdownToggle = (event) => {
		event.stopPropagation();
		setIsDropdownOpen((prev) => !prev);

		if (onClickSendRef && cellRef.current) {
			onClickSendRef(cellRef.current);
		}
	};

	const onClickDetailButton = (event) => {
		event.stopPropagation();
		setIsDetailOpen(true);
	};

	const onClickRoadmapButton = (event) => {
		event.stopPropagation();
		onClick(cellData, rowIndex);
		setIsDropdownOpen((prev) => !prev);
	};

	return (
		<StyledCell
			className={`${unclickable ? 'unclickable' : ''} ${isHighlighted ? 'isHighlighted' : ''} ${unclickable && isHighlighted ? 'isUnclickableHighlighted' : ''}`}
			onClick={handleDropdownToggle}
			ref={cellRef}
		>
			<Button>
				<CourseTitle className={cellData.haksuId === '0' ? 'semesterCell' : ''}>{cellData.courseName}</CourseTitle>
				{isDropdownOpen && (
					<DropdownContainer>
						<DropdownCourseDetailItem courseName={cellData.courseName} onClick={onClickDetailButton}>
							상세 정보
						</DropdownCourseDetailItem>
						<DropdownMyRoadMapItem
							courseName={cellData.courseName}
							isAdd={!cellData.isMyTable}
							onClick={onClickRoadmapButton}
						>
							{cellData.isMyTable ? '내 로드맵에서 제거' : '내 로드맵에 추가'}
						</DropdownMyRoadMapItem>
					</DropdownContainer>
				)}
				{isDetailOpen && (
					<CourseDetail
						onClose={() => {
							setIsDetailOpen((prev) => !prev);
							setIsDropdownOpen((prev) => !prev);
						}}
						HaksuId={cellData.haksuId}
					/>
				)}
			</Button>
		</StyledCell>
	);
};

DropDownCell.displayName = 'Cell2';
export default DropDownCell;
