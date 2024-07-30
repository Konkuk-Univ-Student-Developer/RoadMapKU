import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { largeFieldState, middleFieldState } from '../recoils/atoms';
import useClient from '../hooks/useClient';
import styled from 'styled-components';

// Styled-components
const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	background-color: #f9f9f9;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledSelect = styled.select`
	width: 100%;
	max-width: 300px;
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 4px;
	font-size: 16px;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

	&:focus {
		border-color: #007bff;
		outline: none;
		box-shadow: 0 0 0 2px rgba(38, 143, 255, 0.2);
	}
`;

const FieldCategoryInput = () => {
	const { fetchLargeField, fetchMiddleField } = useClient();
	const largeFields = useRecoilValue(largeFieldState);
	const middleFields = useRecoilValue(middleFieldState);

	useEffect(() => {
		fetchLargeField();
	}, []);

	const selectLargeField = (e) => {
		console.log(e.target.value);
		const reqData = {
			largeFieldCode: e.target.value
		};
		fetchMiddleField(reqData);
	};

	return (
		<Container>
			<StyledSelect onChange={selectLargeField}>
				{largeFields.map((item) => (
					<option key={item.fieldCode} value={item.fieldCode}>
						{item.largeField}
					</option>
				))}
			</StyledSelect>
			<StyledSelect>
				{middleFields.map((item) => (
					<option key={item.fieldCode} value={item.fieldCode}>
						{item.middleField}
					</option>
				))}
			</StyledSelect>
		</Container>
	);
};

export default FieldCategoryInput;
