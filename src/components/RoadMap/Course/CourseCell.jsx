import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedCompetencyState, selectedMyTableContentsState } from '@recoils';
import { Color, fadeIn } from '@styles';
import { CourseDetail } from '@CourseDetail';

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
	transition: background-color 0.1s ease-out;

	opacity: 1;
	animation: ${fadeIn} 0.2s ease-in-out;

	&:hover {
		color: ${Color.GREEN};
		font-family: 'Pretendard-semiBold';
	}

	&.isHighlighted {
		background-color: ${Color.HOVER_GREEN};
	}

	&.unclickable {
		pointer-events: none;
		background-color: ${Color.DIM_GREY};
	}
`;

const Button = styled.div`
	width: 100%;
	display: flex;
	position: relative;
	align-items: center;
	text-align: center;
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

const CourseCell = ({ cellData, rowIndex, onClickSendRef }) => {
	const [isDetailOpen, setIsDetailOpen] = useState(false);
	const [isHighlighted, setIsHighlighted] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const selectedCompetency = useRecoilValue(selectedCompetencyState);
	const selectedMyTableContents = useRecoilValue(selectedMyTableContentsState);
	const setSelectedCourses = useSetRecoilState(selectedMyTableContentsState);

	const cellRef = useRef(null);

	useEffect(() => {
		const competencyCodes = cellData.competencyCodes;
		if (Array.isArray(competencyCodes)) {
			const hasHighlightedCompetency = competencyCodes.some(
				(competency) => competency.competencyCode === selectedCompetency
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
	}, [cellData, selectedCompetency]);

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

	const onClickRoadmapButton = (event, isMyTable) => {
		event.stopPropagation();
		if (isMyTable) {
			// 교과목 버리기 이벤트
			const updatedMyTableData = selectedMyTableContents.map((row) => [...row]);
			const cellIndex = updatedMyTableData[rowIndex].indexOf(cellData);
			if (cellIndex !== -1) {
				updatedMyTableData[rowIndex].splice(cellIndex, 1); // cellData 제거
			}
			setSelectedCourses(updatedMyTableData);
		} else {
			// 교과목 담기 이벤트
			cellData.isClickable = false;
			const updatedMyTableData = selectedMyTableContents.map((row) => [...row]);
			const copiedCellData = { ...cellData, isMyTable: true, isClickable: true };
			updatedMyTableData[rowIndex].push(copiedCellData);
			setSelectedCourses(updatedMyTableData);
		}
		setIsDropdownOpen((prev) => !prev);
	};

	return (
		<StyledCell
			className={`${!cellData.isClickable ? 'unclickable' : ''} ${isHighlighted ? 'isHighlighted' : ''}`}
			onClick={handleDropdownToggle}
			ref={cellRef}
		>
			<Button>
				<CourseTitle className={cellData.haksuId === '0' ? 'semesterCell' : ''}>{cellData.courseName}</CourseTitle>
				{isDropdownOpen && (
					<DropdownContainer>
						<DropdownItem onClick={onClickDetailButton}>상세 정보</DropdownItem>
						<DropdownItem onClick={(event) => onClickRoadmapButton(event, cellData.isMyTable)}>
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

CourseCell.displayName = 'CourseCell';
export default CourseCell;