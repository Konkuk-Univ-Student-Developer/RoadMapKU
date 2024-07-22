import React from 'react';
import styled from 'styled-components';

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

const FixButton = styled.button`
	padding: 10px 20px;
	font-size: 16px;
	color: #fff;
	background-color: #54ad2d;
	border: none;
	border-radius: 5px;
	cursor: pointer;

	&:hover {
		background-color: #459423;
	}
`;

const FieldCategory = () => {
	const onClickHandler = () => {
		alert('진출분야를 바꿀 수 있습니다!');
	};
	return (
		<>
			<FieldCategoryContainer>
				<ItemContainer>
					<Title>대분류</Title>
					<Description>연구직 및 공학 기술직</Description>
				</ItemContainer>
				<ItemContainer>
					<Title>중분류</Title>
					<Description>정보통신 연구개발직 및 공학기술직</Description>
				</ItemContainer>
				<ItemContainer>
					<Title>소분류</Title>
					<Description>소프트웨어 개발자</Description>
				</ItemContainer>
				<ItemContainer>
					<Title>세분류</Title>
					<Description>웹 개발자</Description>
				</ItemContainer>
				<ItemContainer>
					<FixButton onClick={onClickHandler}>설정 바꾸기</FixButton>
				</ItemContainer>
			</FieldCategoryContainer>
		</>
	);
};

export default FieldCategory;
