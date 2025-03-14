import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import useField from '@hooks/useField';
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import {
	detailFieldState,
	middleFieldState,
	selectedFieldState,
	smallFieldState,
	selectedSubjectState,
	selectedFieldLogSelector
} from '@recoils';
import { Color, fadeIn } from '@styles';
import useAtomReducer from '@recoils/useAtomReducer';
import { FieldListContents } from '.';

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
	${({ $showBorder }) => $showBorder && `border-left: 0.1px solid ${Color.LIGHT_GREY}`};
	display: ${({ $isShowFieldColumn }) => ($isShowFieldColumn ? 'block' : 'none')};
`;

const GridContainer = styled.div`
	height: ${({ $isMiddleGrid }) => ($isMiddleGrid ? '95%' : '')};
	display: grid;
	grid-template-columns: repeat(${({ $columnCount }) => $columnCount || '4'}, 1fr);
	border: ${({ $isMiddleGrid }) => ($isMiddleGrid ? `0.2px solid ${Color.LIGHT_GREY}` : 'none')};
	border-radius: 4px;
	grid-gap: ${({ $isMiddleGrid }) => ($isMiddleGrid ? '' : '10px')};
`;

const FieldItem = styled.div.attrs(({ $selectedField, $isDetailField }) => ({
	id: $isDetailField
		? `field_name_${$selectedField.middleField} > ${$selectedField.smallField} > ${$selectedField.detailField} - field_code_${$selectedField.detailFieldCode}`
		: ''
}))`
	display: flex;
	align-items: center;
	width: 90%;
	padding: 8px;
	font-size: 14px;
	cursor: pointer;
	background: ${({ $isSelected }) => ($isSelected ? Color.HOVER_GREEN : 'white')};
	color: ${({ $isSelected }) => ($isSelected ? Color.GREEN : Color.BLACK)};

	&:hover {
		background-color: ${Color.HOVER_GREEN};
	}
`;

const MiddleGridItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4px;
	cursor: pointer;
	font-size: 14px;
	border-right: ${({ $isLastColumn }) => ($isLastColumn ? 'none' : `1px solid ${Color.LIGHT_GREY}`)};
	border-bottom: ${({ $isLastRow }) => ($isLastRow ? 'none' : `1px solid ${Color.LIGHT_GREY}`)};

	&:hover {
		background-color: ${Color.HOVER_GREEN};
	}
`;

export const scrollOption = {
	behavior: 'smooth',
	block: 'center'
};

const FieldInput = ({ showHandler, isShowDepartAndLog }) => {
	const { fetchMiddleField, fetchSmallField, fetchDetailField, fetchSubjectsAndCourses } = useField();
	const middleFields = useRecoilValue(middleFieldState);
	const smallFields = useRecoilValue(smallFieldState);
	const detailFields = useRecoilValue(detailFieldState);

	const setFieldLog = useSetRecoilState(selectedFieldLogSelector);

	const selectedField = useRecoilValue(selectedFieldState);
	const resetSelectedSubjectState = useResetRecoilState(selectedSubjectState);

	const { dispatch } = useAtomReducer();

	const fieldRefs = {
		middle: useRef({}),
		small: useRef({}),
		detail: useRef({})
	};

	useEffect(() => {
		fetchMiddleField();
	}, []);

	useEffect(() => {
		if (selectedField) {
			fieldRefs.middle.current[selectedField.middleField?.middleField]?.scrollIntoView(scrollOption);
			fieldRefs.small.current[selectedField.smallField?.smallField]?.scrollIntoView(scrollOption);
			fieldRefs.detail.current[selectedField.detailField?.detailField]?.scrollIntoView(scrollOption);
		}
	}, [selectedField]);

	const handleMiddleFieldClick = (field) => {
		fetchSmallField(field);
		dispatch({ type: 'clickMiddle', field });
	};

	const handleSmallFieldClick = (field) => {
		fetchDetailField(field);
		dispatch({ type: 'clickSmall', field });
	};

	const handleDetailFieldClick = (field) => {
		if (selectedField?.detailField?.detailFieldCode === field.detailFieldCode) return;

		const updatedFieldCodeList = {
			...selectedField,
			detailField: field
		};

		dispatch({ type: 'clickDetail', field });
		setFieldLog(updatedFieldCodeList);

		resetSelectedSubjectState();
		fetchSubjectsAndCourses(field.detailFieldCode);

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
						<FieldListContents
							type="middle"
							selectedField={selectedField}
							fieldsData={middleFields}
							clickHandler={handleMiddleFieldClick}
							fieldsRef={fieldRefs}
						/>
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
						<FieldListContents
							type="small"
							selectedField={selectedField}
							fieldsData={smallFields}
							clickHandler={handleSmallFieldClick}
							fieldsRef={fieldRefs}
						/>
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
								$selectedField={field}
								$isDetailField={field.detailField}
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
