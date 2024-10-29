import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useField from '../../hooks/useField';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { detailFieldState, middleFieldState, selectedFieldState, smallFieldState } from '../../recoils/atoms';

const FieldInputContainer = styled.div`
	width: 100%;
	height: 500px;
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

	const setSelectedField = useSetRecoilState(selectedFieldState);
	// TODO state 관리 좀 더 깔끔하게 바꿔야함.
	const [selectedFieldCodeList, setSelectedFieldCodeList] = useState({ middleFieldCode: '' });

	const [isSmallFieldSelected, setIsSmallFieldSelected] = useState(false);

	useEffect(() => {
		fetchMiddleField();
	}, []);

	const handleMiddleFieldClick = (field) => {
		fetchSmallField(field);
		setIsSmallFieldSelected(false);
		setSelectedFieldCodeList({ middleFieldCode: field.fieldCode });
	};

	const handleSmallFieldClick = (field) => {
		fetchDetailField(field);
		setIsSmallFieldSelected(true);
		setSelectedFieldCodeList((prevState) => ({
			...prevState,
			smallFieldCode: field.fieldCode
		}));
	};

	const handleDetailFieldClick = (field) => {
		fetchSubjectsInField(field.fieldCode);
		fetchCoursesInFields(field.fieldCode);
		setSelectedField(field.fieldCode);
		setSelectedFieldCodeList((prevState) => ({
			...prevState,
			detailFieldCode: field.fieldCode
		}));
	};

	return (
		<FieldInputContainer>
			<FieldColumn width={isSmallFieldSelected ? '16.6%' : '33.3%'}>
				<ListContainer>
					{middleFields.map((field, index) => (
						<FieldItem
							key={index}
							onClick={() => handleMiddleFieldClick(field)}
							isSelected={selectedFieldCodeList.middleFieldCode === field.fieldCode}
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
								isSelected={selectedFieldCodeList.smallFieldCode === field.fieldCode}
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
								isSelected={selectedFieldCodeList.smallFieldCode === field.fieldCode}
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
							isSelected={selectedFieldCodeList.detailFieldCode === field.fieldCode}
						>
							{field.detailField}
						</FieldItem>
					))}
				</GridContainer>
			</FieldColumn>
		</FieldInputContainer>
	);
};

export default FieldInput;
