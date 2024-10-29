import { useEffect } from 'react';
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

const FieldInput = () => {
	const { fetchMiddleField, fetchSmallField, fetchDetailField, fetchSubjectsInField } = useField();
	const middleFields = useRecoilValue(middleFieldState);
	const smallFields = useRecoilValue(smallFieldState);
	const detailFields = useRecoilValue(detailFieldState);

	useEffect(() => {
		fetchMiddleField();
	}, []);

	return (
		<FieldInputContainer>
			<div>
				{middleFields.map((field, index) => {
					return (
						<div
							key={index}
							onClick={() => {
								console.log(field);
								fetchSmallField(field);
							}}
						>
							{field.middleField}
						</div>
					);
				})}
			</div>
			<div>
				{smallFields.map((field, index) => {
					return (
						<div key={index} onClick={() => fetchDetailField(field)}>
							{field.smallField}
						</div>
					);
				})}
			</div>
			<div>
				{detailFields.map((field, index) => {
					return (
						<div key={index} onClick={() => fetchSubjectsInField(field.fieldCode)}>
							{field.detailField}
						</div>
					);
				})}
			</div>
		</FieldInputContainer>
	);
};

export default FieldInput;
