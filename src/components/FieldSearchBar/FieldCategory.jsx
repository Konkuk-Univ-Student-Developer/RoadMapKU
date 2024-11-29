import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { selectedFieldState, showFieldInputState } from '../../recoils/atoms';
import { Color } from '../../style/Color';

const FieldCategoryContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
`;
const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 90%;
	height: 80px;
`;
export const Title = styled.h2`
	font-size: 15px;
	color: ${Color.GREEN};
	margin-bottom: 10px;
`;
const Description = styled.div`
	font-size: 20px;
	color: ${Color.BLACK};
	font-weight: 600;
`;

export const FixButton = styled.button`
	margin-top: 15px;
	width: 60%;
	padding: 10px 20px;
	font-size: 16px;
	color: #fff;
	background-color: ${Color.GREEN};
	border: none;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background-color: #02472a;
	}
`;

const FieldCategory = () => {
	const fieldState = useRecoilValue(selectedFieldState);
	const setShowFieldInput = useSetRecoilState(showFieldInputState);
	const onClickHandler = () => {
		setShowFieldInput(true);
	};
	return (
		<>
			<FieldCategoryContainer>
				<ItemContainer>
					<Title>대분류</Title>
					<Description>{fieldState.largeField}</Description>
				</ItemContainer>
				<ItemContainer>
					<Title>중분류</Title>
					<Description>{fieldState.middleField}</Description>
				</ItemContainer>
				<ItemContainer>
					<Title>소분류</Title>
					<Description>{fieldState.smallField}</Description>
				</ItemContainer>
				<ItemContainer>
					<Title>세분류</Title>
					<Description>{fieldState.detailField}</Description>
				</ItemContainer>

				<FixButton onClick={onClickHandler} style={{ width: '90%' }}>
					직군 선택하기
				</FixButton>
			</FieldCategoryContainer>
		</>
	);
};

export default FieldCategory;
