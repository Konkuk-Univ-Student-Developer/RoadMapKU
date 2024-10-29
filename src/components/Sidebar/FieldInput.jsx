import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useField from '../../hooks/useField';
import { useRecoilValue } from 'recoil';
import { detailFieldState, middleFieldState, smallFieldState } from '../../recoils/atoms';

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
	background-color: #f2f2f2;
	border-radius: 4px;
	text-align: center;
	&:hover {
		background-color: #e0e0e0;
	}
`;

const FieldInput = () => {
	const { fetchMiddleField, fetchSmallField, fetchDetailField, fetchSubjectsInField } = useField();
	const middleFields = useRecoilValue(middleFieldState);
	const smallFields = useRecoilValue(smallFieldState);
	const detailFields = useRecoilValue(detailFieldState);

	const [isSmallFieldSelected, setIsSmallFieldSelected] = useState(false);

	useEffect(() => {
		fetchMiddleField();
	}, []);

	const handleMiddleFieldClick = (field) => {
		fetchSmallField(field);
		setIsSmallFieldSelected(false);
	};

	const handleSmallFieldClick = (field) => {
		fetchDetailField(field);
		setIsSmallFieldSelected(true);
	};

	return (
		<FieldInputContainer>
			<FieldColumn width={isSmallFieldSelected ? '16.6%' : '33.3%'}>
				<ListContainer>
					{middleFields.map((field, index) => (
						<FieldItem key={index} onClick={() => handleMiddleFieldClick(field)}>
							{field.middleField}
						</FieldItem>
					))}
				</ListContainer>
			</FieldColumn>
			<FieldColumn width={isSmallFieldSelected ? '16.6%' : '66.6%'}>
				{isSmallFieldSelected ? (
					<ListContainer>
						{smallFields.map((field, index) => (
							<FieldItem key={index} onClick={() => handleSmallFieldClick(field)}>
								{field.smallField}
							</FieldItem>
						))}
					</ListContainer>
				) : (
					<GridContainer>
						{smallFields.map((field, index) => (
							<FieldItem key={index} onClick={() => handleSmallFieldClick(field)}>
								{field.smallField}
							</FieldItem>
						))}
					</GridContainer>
				)}
			</FieldColumn>
			<FieldColumn width="66.6%" style={{ display: isSmallFieldSelected ? 'block' : 'none' }}>
				<GridContainer>
					{detailFields.map((field, index) => (
						<FieldItem key={index} onClick={() => fetchSubjectsInField(field.fieldCode)}>
							{field.detailField}
						</FieldItem>
					))}
				</GridContainer>
			</FieldColumn>
		</FieldInputContainer>
	);
};

export default FieldInput;
