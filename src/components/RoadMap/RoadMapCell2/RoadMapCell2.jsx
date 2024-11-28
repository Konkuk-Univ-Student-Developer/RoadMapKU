import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import CourseDetail from '../../CourseDetail/CourseDetail';
import { fadeIn } from '../../../style/Frames';
import { Color } from '../../../style/Color';

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
	color: #2e2e2e;
	cursor: pointer;
	user-select: none;
	position: relative;
	// box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
	transition:
		background-color 0.1s ease-out,
		color 0.1s ease-out,
		font 0.1s ease-out;

	opacity: 1;
	animation: ${fadeIn} 0.2s ease-in-out;

	&:hover {
		color: ${Color.GREEN};
		font-family: 'Pretendard-semiBold';
		transition:
			background-color 0.1s ease-out,
			color 0.1s ease-out;
	}

	&.unclickable {
		pointer-events: none;
		background-color: #d9d9d9;
	}

	&.isHighlighted {
		background-color: #effbef;
	}

	&.isUnclickableHighlighted {
		background-color: #d0f5a9;
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

const DropdownItem = styled.div`
	font-family: 'Pretendard-regular';
	font-size: 12px;
	padding: 5px;
	color: ${Color.BLACK};
	cursor: pointer;
	&:hover {
		background-color: #f0f0f0;
	}
`;

const Cell2 = ({ cellData, rowIndex, onClick, unclickable, highlightedCompetency, onClickSendRef }) => {
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
						<DropdownItem onClick={onClickDetailButton}>상세 정보</DropdownItem>
						<DropdownItem onClick={onClickRoadmapButton}>
							{cellData.isMyTable ? '내 로드맵에서 제거' : '내 로드맵에 추가'}
						</DropdownItem>
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

Cell2.displayName = 'Cell2';
export default Cell2;
