import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	margin: 10px 20px;
	background-color: #f0f0f0; /* 배경을 연한 회색으로 설정 */
	border-radius: 8px; /* 둥근 테두리 */
	border: 1px solid #f0f0f0; /* 테두리 색상 */
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
	//list-style-type: none;
	padding: 0;
	display: flex;
	justify-content: space-between;
	width: 80%;
	margin: 20px auto; /* 수평 중앙 정렬 */
`;

const ListItem = styled.li`
	font-size: 14px;
	color: #666;
`;

const MenuList = () => {
	return (
		<Container>
			<Title>목차</Title>
			<ListContainer>
				<ListItem>과목 설명</ListItem>
				<ListItem>기본 정보</ListItem>
				<ListItem>전공 역량</ListItem>
				<ListItem>수강 인원</ListItem>
			</ListContainer>
		</Container>
	);
};

export default MenuList;
