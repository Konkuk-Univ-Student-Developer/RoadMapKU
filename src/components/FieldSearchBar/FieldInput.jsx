import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import useField from '../../hooks/useField';
import { useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import {
	detailFieldState,
	middleFieldState,
	selectedFieldLogState,
	selectedFieldState,
	smallFieldState,
	selectedSubjectState,
	subjectsInFieldState
} from '../../recoils/atoms';
import { fadeIn } from '../../style/Frames';

const FieldInputContainer = styled.div`
	width: 95%;
	display: flex;
	flex-direction: column;
	align-items: start;
	animation: ${fadeIn} 0.2s ease-in-out;
	margin-bottom: ${({ $isShowDepartAndLog }) => !$isShowDepartAndLog && '15px'};
`;

const FieldInputContentsContainer = styled.div`
	width: 100%;
	height: 250px;
	background: white;
	display: flex;
	flex-direction: row;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
`;

const FieldColumn = styled.div`
	padding: 16px;
	overflow-y: auto;
	transition: width 0.3s ease;
	width: ${({ $width }) => $width};
	${({ $showBorder }) => $showBorder && `border-left: 0.1px solid #e4e2e2`};
	display: ${({ $isShowFieldColumn }) => ($isShowFieldColumn ? 'block' : 'none')};
`;

const GridContainer = styled.div`
	height: ${({ $isMiddleGrid }) => ($isMiddleGrid ? '95%' : '')};
	display: grid;
	grid-template-columns: repeat(${({ $columnCount }) => $columnCount || '4'}, 1fr);
	border: ${({ $isMiddleGrid }) => ($isMiddleGrid ? '0.2px solid #e0e0e0' : 'none')};
	border-radius: 4px;
	grid-gap: ${({ $isMiddleGrid }) => ($isMiddleGrid ? '' : '10px')};
`;

const ListContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
`;

const FieldItem = styled.div`
	display: flex;
	align-items: center;
	width: 90%;
	padding: 8px;
	font-size: 14px;
	cursor: pointer;
	background: ${({ $isSelected }) => ($isSelected ? '#036b3f17' : 'white')};
	color: ${({ $isSelected }) => ($isSelected ? '#036b3f' : 'black')};
	font-weight: ${({ $isSelected }) => ($isSelected ? '700' : '')};

	&:hover {
		background-color: #036b3f17;
	}
`;

const MiddleGridItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4px;
	cursor: pointer;
	font-size: 14px;
	border-right: ${({ $isLastColumn }) => ($isLastColumn ? 'none' : '1px solid #e4e4e4')};
	border-bottom: ${({ $isLastRow }) => ($isLastRow ? 'none' : '1px solid #e4e4e4')};

	&:hover {
		background-color: #036b3f17;
	}
`;

export const scrollOption = {
	behavior: 'smooth',
	block: 'center'
};

const FieldInput = ({ showHandler, isShowDepartAndLog }) => {
	const { fetchMiddleField, fetchSmallField, fetchDetailField, fetchSubjectsInField, fetchCoursesInFields } =
		useField();
	const middleFields = useRecoilValue(middleFieldState);
	const smallFields = useRecoilValue(smallFieldState);
	const detailFields = useRecoilValue(detailFieldState);

	const [selectedField, setSelectedField] = useRecoilState(selectedFieldState);
	const setSelectedFieldLog = useSetRecoilState(selectedFieldLogState);
	const setSubjectsInField = useSetRecoilState(subjectsInFieldState);
	const resetSelectedSubjectState = useResetRecoilState(selectedSubjectState);

	const fieldRefs = {
		middle: useRef({}),
		small: useRef({}),
		detail: useRef({})
	};

	useEffect(() => {
		fetchMiddleField();
	}, []);

	if (selectedField) {
		fieldRefs.middle.current[selectedField.middleField?.middleField]?.scrollIntoView(scrollOption);
		fieldRefs.small.current[selectedField.smallField?.smallField]?.scrollIntoView(scrollOption);
		fieldRefs.detail.current[selectedField.detailField?.detailField]?.scrollIntoView(scrollOption);
	}

	const handleMiddleFieldClick = async (field) => {
		await fetchSmallField(field);
		setSelectedField({ middleField: field });
		setSubjectsInField([]);
	};

	const handleSmallFieldClick = async (field) => {
		await fetchDetailField(field);
		setSelectedField((prevState) => ({
			...prevState,
			smallField: field
		}));
		setSubjectsInField([]);
	};

	const handleDetailFieldClick = async (field) => {
		if (selectedField?.detailField?.detailFieldCode === field.detailFieldCode) return;

		const updatedFieldCodeList = {
			...selectedField,
			detailField: field
		};

		setSelectedField(updatedFieldCodeList);
		setSelectedFieldLog((prevState) => {
			const isDuplicate = prevState.some(
				(item) => item.detailField.detailFieldCode === updatedFieldCodeList.detailField.detailFieldCode
			);

			if (isDuplicate) return prevState;

			const newLog = [...prevState, updatedFieldCodeList];
			if (newLog.length > 5) {
				newLog.shift();
			}
			return newLog;
		});

		resetSelectedSubjectState();
		await fetchSubjectsInField(field.detailFieldCode);
		await fetchCoursesInFields(field.detailFieldCode);

		showHandler(true);
	};

	return (
		<FieldInputContainer $isShowDepartAndLog={isShowDepartAndLog}>
			<FieldInputContentsContainer>
				<FieldColumn
					$width={selectedField.middleField ? (selectedField.smallField ? '20%' : '40%') : '100%'}
					$isShowFieldColumn={!!selectedField.middleField || !selectedField.smallField}
				>
					{selectedField.middleField ? (
						<ListContainer>
							{middleFields.map((field, index) => (
								<FieldItem
									key={index}
									onClick={() => handleMiddleFieldClick(field)}
									$isSelected={selectedField.middleField?.middleField === field.middleField}
									ref={(el) => (fieldRefs.middle.current[field.middleField] = el)}
								>
									{field.middleField}
								</FieldItem>
							))}
						</ListContainer>
					) : (
						<GridContainer $isMiddleGrid={true}>
							{middleFields.map((field, index) => (
								<MiddleGridItem
									key={index}
									onClick={() => handleMiddleFieldClick(field)}
									$isLastColumn={(index + 1) % 4 === 0}
									$isLastRow={Math.floor(index / 4) === Math.floor((middleFields.length - 1) / 4)}
								>
									{field.middleField}
								</MiddleGridItem>
							))}
						</GridContainer>
					)}
				</FieldColumn>

				<FieldColumn
					$width={selectedField.smallField ? '20%' : '60%'}
					$isShowFieldColumn={!!selectedField.smallField || !!selectedField.middleField}
					$showBorder={selectedField.middleField}
				>
					{selectedField.smallField ? (
						<ListContainer>
							{smallFields.map((field, index) => (
								<FieldItem
									key={index}
									onClick={() => handleSmallFieldClick(field)}
									$isSelected={selectedField.smallField?.smallField === field.smallField}
									ref={(el) => (fieldRefs.small.current[field.smallField] = el)}
									$isList={selectedField.smallField}
								>
									{field.smallField}
								</FieldItem>
							))}
						</ListContainer>
					) : (
						<GridContainer>
							{smallFields.map((field, index) => (
								<FieldItem
									key={index}
									onClick={() => handleSmallFieldClick(field)}
									$isSelected={selectedField.smallField?.smallField === field.smallField}
									ref={(el) => (fieldRefs.small.current[field.smallField] = el)}
									$isList={selectedField.smallField}
								>
									{field.smallField}
								</FieldItem>
							))}
						</GridContainer>
					)}
				</FieldColumn>

				<FieldColumn $width="60%" $isShowFieldColumn={selectedField.smallField} $showBorder={selectedField.smallField}>
					<GridContainer>
						{detailFields.map((field, index) => (
							<FieldItem
								key={index}
								onClick={() => handleDetailFieldClick(field)}
								$isSelected={selectedField.detailField?.detailField === field.detailField}
								ref={(el) => (fieldRefs.detail.current[field.detailField] = el)}
								$isList={!selectedField.smallField}
							>
								{field.detailField}
							</FieldItem>
						))}
					</GridContainer>
				</FieldColumn>
			</FieldInputContentsContainer>
		</FieldInputContainer>
	);
};

export default FieldInput;
