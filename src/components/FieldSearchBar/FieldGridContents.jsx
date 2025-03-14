import React from 'react';
import styled from 'styled-components';
import { Color } from '@styles';

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

const fieldStyleProps = (field, type, selectedField, fieldsRef) => {
	if (type === 'detail') {
		return {
			displayText: field.detailField,
			isDetailField: true,
			refSetter: (el) => (fieldsRef.detail.current[field.detailField] = el),
			isSelected: selectedField.detailField && selectedField.detailField.detailField === field.detailField
		};
	}

	return {
		displayText: field.smallField,
		isDetailField: false,
		refSetter: (el) => (fieldsRef.small.current[field.smallField] = el),
		isSelected: false
	};
};

const FieldGridContents = ({ type, fieldsData, clickHandler, fieldsRef, selectedField }) => {
	return (
		<GridContainer>
			{fieldsData.map((field, index) => {
				const { displayText, refSetter, isSelected, isDetailField } = fieldStyleProps(
					field,
					type,
					selectedField,
					fieldsRef
				);

				return (
					<FieldItem
						key={index}
						$selectedField={field}
						$isDetailField={isDetailField}
						onClick={() => clickHandler(field)}
						$isSelected={isSelected}
						ref={refSetter}
					>
						{displayText}
					</FieldItem>
				);
			})}
		</GridContainer>
	);
};

FieldGridContents.displayName = 'FieldGridContents';

export default FieldGridContents;
