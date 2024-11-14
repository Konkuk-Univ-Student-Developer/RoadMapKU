import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	background-color: transparent;
	padding: 0rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

// 디자인 후보 #2
// const TableContainer = styled.div`
// 	width: 90%;
// 	border: 1px solid #ddd;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: center;
// 	margin-top: 10px;
// 	margin-bottom: 10px;
// `;

// const Title = styled.div`
// 	width: 98%;
// 	background-color: #036b3f;
// 	color: #ffffff;
// 	font-size: 16px;
// 	font-weight: bold;
// 	border-bottom: 1px solid #ccc;
// 	padding: 8px;
// 	margin-bottom: 5px;
// 	text-align: center;
// 	display: flex;
// 	justify-content: center;
// `;

const TableContainer = styled.div`
	width: 90%;
	background-color: rgba(3, 107, 63, 0.1);
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 10px;
	margin-bottom: 10px;
`;

const Title = styled.div`
	width: 97%;
	font-size: 16px;
	font-weight: bold;
	border-bottom: 1px solid #ccc;
	padding: 8px;
	margin-bottom: 5px;
	text-align: center;
	display: flex;
	justify-content: center;
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
	cursor: pointer;
`;

const MenuList = ({ descriptionHandler, informationHandler, competencyHandler, competitionHandler }) => {
	return (
		<Container>
			<TableContainer>
				<Title>목차</Title>
				<ListContainer>
					<ListItem onClick={descriptionHandler}>과목 설명</ListItem>
					<ListItem onClick={informationHandler}>기본 정보</ListItem>
					<ListItem onClick={competencyHandler}>전공 역량</ListItem>
					<ListItem onClick={competitionHandler}>수강 신청 경쟁률</ListItem>
				</ListContainer>
			</TableContainer>
		</Container>
	);
};

export default MenuList;
