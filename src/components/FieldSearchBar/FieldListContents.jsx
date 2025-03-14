import React from 'react';
import styled from 'styled-components';
import { Color } from '@styles';

const ListContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
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

const fieldStyleProps = (field, type, selectedField, fieldsRef) => {
	if (type === 'middle') {
		return {
			isSelected: selectedField.middleField?.middleField === field.middleField,
			refSetter: (el) => (fieldsRef.middle.current[field.middleField] = el),
			displayText: field.middleField
		};
	}

	return {
		isSelected: selectedField.smallField?.smallField === field.smallField,
		refSetter: (el) => (fieldsRef.small.current[field.smallField] = el),
		displayText: field.smallField
	};
};

const FieldListContents = React.forwardRef(({ type, selectedField, fieldsData, clickHandler, fieldsRef }, ref) => {
	return (
		<ListContainer ref={ref}>
			{fieldsData.map((field, index) => {
				const { isSelected, refSetter, displayText } = fieldStyleProps(field, type, selectedField, fieldsRef);

				return (
					<FieldItem key={index} onClick={() => clickHandler(field)} $isSelected={isSelected} ref={refSetter}>
						{displayText}
					</FieldItem>
				);
			})}
		</ListContainer>
	);
});

FieldListContents.displayName = 'FieldListContents';

export default FieldListContents;
