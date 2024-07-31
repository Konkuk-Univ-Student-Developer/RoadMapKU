import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { selectedFieldState } from '../recoils/atoms';

const FieldCategoryContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 100%;
	margin: 30px 0;
`;
const ItemContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 90%;
	height: 80px;
`;
const Title = styled.h2`
	font-size: 18px;
	color: #333;
	margin-bottom: 10px;
`;
const Description = styled.div`
	font-size: 16px;
	color: #666;
`;

export const FixButton = styled.button`
	padding: 10px 20px;
	font-size: 16px;
	color: #fff;
	background-color: #036b3f;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: #02472a;
	}
`;

const FieldCategory = () => {
	const fieldState = useRecoilValue(selectedFieldState);
	const onClickHandler = () => {
		alert('진출분야를 바꿀 수 있습니다!');
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
				<ItemContainer>
					<FixButton onClick={onClickHandler}>설정 바꾸기</FixButton>
				</ItemContainer>
			</FieldCategoryContainer>
		</>
	);
};

export default FieldCategory;
