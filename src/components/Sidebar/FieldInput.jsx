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
	isSmallFieldSelectedState,
	selectedSubjectState
} from '../../recoils/atoms';
import { Title } from './FieldCategory';

const FieldInputContainer = styled.div`
	width: 95%;
	display: flex;
	flex-direction: column;
	align-items: start;
`;

const FieldInputContentsContainer = styled.div`
	width: 100%;
	height: 300px;
	background: white;
	display: flex;
	flex-direction: row;
`;

const FieldColumn = styled.div`
	padding: 16px;
	overflow-y: auto;
	transition: width 0.3s ease;
	width: ${({ width }) => width};
	${({ showBorder }) => showBorder && `border-right: 2px solid #ccc;`}
`;

const GridContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 8px;
`;

const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const FieldItem = styled.div`
	padding: 8px;
	cursor: pointer;
	background-color: ${(props) => (props.isSelected ? '#d3d3d3' : '#f2f2f2')};
	border-radius: 4px;
	text-align: center;
	&:hover {
		background-color: #e0e0e0;
	}
`;

export const scrollOption = {
	behavior: 'smooth',
	block: 'center'
};

const FieldInput = () => {
	const { fetchMiddleField, fetchSmallField, fetchDetailField, fetchSubjectsInField, fetchCoursesInFields } =
		useField();
	const middleFields = useRecoilValue(middleFieldState);
	const smallFields = useRecoilValue(smallFieldState);
	const detailFields = useRecoilValue(detailFieldState);

	const [selectedField, setSelectedField] = useRecoilState(selectedFieldState);
	const setSelectedFieldLog = useSetRecoilState(selectedFieldLogState);
	const resetSelectedSubjectState = useResetRecoilState(selectedSubjectState);
	const [isSmallFieldSelected, setIsSmallFieldSelected] = useRecoilState(isSmallFieldSelectedState);

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

	const handleMiddleFieldClick = (field) => {
		fetchSmallField(field);
		setIsSmallFieldSelected(false);
		setSelectedField({ middleField: field });
	};

	const handleSmallFieldClick = (field) => {
		fetchDetailField(field);
		setIsSmallFieldSelected(true);
		setSelectedField((prevState) => ({
			...prevState,
			smallField: field
		}));
	};

	const handleDetailFieldClick = (field) => {
		resetSelectedSubjectState();

		Promise.all([fetchSubjectsInField(field.detailFieldCode), fetchCoursesInFields(field.detailFieldCode)]);

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

			const newLog = [updatedFieldCodeList, ...prevState];
			if (newLog.length > 5) {
				newLog.shift();
			}
			return newLog;
		});
	};

	return (
		<FieldInputContainer>
			<Title>직군 찾아보기</Title>
			<FieldInputContentsContainer>
				<FieldColumn width={isSmallFieldSelected ? '16.6%' : '33.3%'}>
					<ListContainer>
						{middleFields.map((field, index) => (
							<FieldItem
								key={index}
								onClick={() => handleMiddleFieldClick(field)}
								isSelected={selectedField.middleField?.middleField === field.middleField}
								ref={(el) => (fieldRefs.middle.current[field.middleField] = el)}
							>
								{field.middleField}
							</FieldItem>
						))}
					</ListContainer>
				</FieldColumn>

				<FieldColumn width={isSmallFieldSelected ? '16.6%' : '66.6%'} showBorder={isSmallFieldSelected}>
					{isSmallFieldSelected ? (
						<ListContainer>
							{smallFields.map((field, index) => (
								<FieldItem
									key={index}
									onClick={() => handleSmallFieldClick(field)}
									isSelected={selectedField.smallField?.smallField === field.smallField}
									ref={(el) => (fieldRefs.small.current[field.smallField] = el)}
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
									isSelected={selectedField.smallField?.smallField === field.smallField}
									ref={(el) => (fieldRefs.small.current[field.smallField] = el)}
								>
									{field.smallField}
								</FieldItem>
							))}
						</GridContainer>
					)}
				</FieldColumn>

				<FieldColumn width="66.6%" style={{ display: isSmallFieldSelected ? 'block' : 'none' }}>
					<GridContainer>
						{detailFields.map((field, index) => (
							<FieldItem
								key={index}
								onClick={() => handleDetailFieldClick(field)}
								isSelected={selectedField.detailField?.detailField === field.detailField}
								ref={(el) => (fieldRefs.detail.current[field.detailField] = el)}
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
