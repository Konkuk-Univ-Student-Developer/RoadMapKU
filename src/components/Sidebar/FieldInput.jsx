import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useField from '../../hooks/useField';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
	detailFieldState,
	middleFieldState,
	selectedFieldLogState,
	selectedFieldState,
	smallFieldState
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

const FieldInput = () => {
	const { fetchMiddleField, fetchSmallField, fetchDetailField, fetchSubjectsInField, fetchCoursesInFields } =
		useField();
	const middleFields = useRecoilValue(middleFieldState);
	const smallFields = useRecoilValue(smallFieldState);
	const detailFields = useRecoilValue(detailFieldState);

	const [selectedField, setSelectedField] = useRecoilState(selectedFieldState);
	const setSelectedFieldLog = useSetRecoilState(selectedFieldLogState);
	// TODO state 관리 좀 더 깔끔하게 바꿔야함.

	const [isSmallFieldSelected, setIsSmallFieldSelected] = useState(false);

	useEffect(() => {
		fetchMiddleField();
	}, []);

	const handleMiddleFieldClick = (field) => {
		const middleField = {
			name: field.middleField,
			code: field.fieldCode
		};

		fetchSmallField(field);
		setIsSmallFieldSelected(false);
		setSelectedField({ middleField: middleField });
	};

	const handleSmallFieldClick = (field) => {
		const smallField = {
			name: field.smallField,
			code: field.fieldCode
		};

		fetchDetailField(field);
		setIsSmallFieldSelected(true);
		setSelectedField((prevState) => ({
			...prevState,
			smallField: smallField
		}));
	};

	const handleDetailFieldClick = (field) => {
		const detailField = {
			name: field.detailField,
			code: field.fieldCode
		};

		fetchSubjectsInField(field.fieldCode);
		fetchCoursesInFields(field.fieldCode);

		const updatedFieldCodeList = {
			...selectedField,
			detailField: detailField
		};

		setSelectedField(updatedFieldCodeList);
		setSelectedFieldLog((prevState) => {
			const newLog = [...prevState, updatedFieldCodeList];
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
								isSelected={selectedField.middleField?.code === field.fieldCode}
							>
								{field.middleField}
							</FieldItem>
						))}
					</ListContainer>
				</FieldColumn>
				<FieldColumn width={isSmallFieldSelected ? '16.6%' : '66.6%'}>
					{isSmallFieldSelected ? (
						<ListContainer>
							{smallFields.map((field, index) => (
								<FieldItem
									key={index}
									onClick={() => handleSmallFieldClick(field)}
									isSelected={selectedField.smallField?.code === field.fieldCode}
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
									isSelected={selectedField.smallField?.code === field.fieldCode}
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
								isSelected={selectedField.detailField?.code === field.fieldCode}
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
