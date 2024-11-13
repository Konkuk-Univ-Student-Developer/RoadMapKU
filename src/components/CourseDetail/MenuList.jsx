import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin: 10px 20px;
	background-color: #f0f0f0;
	border-radius: 8px;
	border: 1px solid #f0f0f0;
`;

const Title = styled.div`
	font-size: 16px;
	font-weight: bold;
	border-bottom: 1px solid #ccc;
	padding: 8px;
	margin-bottom: 5px;
	text-align: center;
`;
const ListContainer = styled.ul`
	padding: 0;
	display: flex;
	justify-content: space-between;
	width: 80%;
	margin: 20px auto;
`;

const ListItem = styled.li`
	font-size: 14px;
	color: #666;
	cursor: pointer;
`;

const MenuList = ({ descriptionHandler, informationHandler, competencyHandler, competitionHandler }) => {
	return (
		<Container>
			<Title>목차</Title>
			<ListContainer>
				<ListItem onClick={descriptionHandler}>과목 설명</ListItem>
				<ListItem onClick={informationHandler}>기본 정보</ListItem>
				<ListItem onClick={competencyHandler}>전공 역량</ListItem>
				<ListItem onClick={competitionHandler}>수강 신청 경쟁률</ListItem>
			</ListContainer>
		</Container>
	);
};

export default MenuList;
