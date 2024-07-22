import React, { useState } from 'react';
import styled from 'styled-components';

const DepartDummyList = ['컴퓨터공학부', '전기전자공학부', '스마트ICT융합공학과'];

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
	width: 100%;
`;

const Select = styled.select`
	width: 90%;
	height: 40px;
	border: 1px solid #ccc;
	border-radius: 5px;
	padding: 5px;
	font-size: 16px;
	color: #333;
	background-color: #fff;
	&:focus {
		border-color: #007bff;
		outline: none;
	}
`;

const Option = styled.option`
	padding: 10px;
	font-size: 16px;
	color: #333;
`;

const SelectedDepartment = styled.div`
	width: 85%;
	margin-top: 20px;
	padding: 10px 10px;
	font-size: 18px;
	color: #333;
	background-color: #f1f1f1;
	border: 1px solid #ccc;
	border-radius: 5px;
`;

const DepartmentList = () => {
	const [nowDepart, setNowDepart] = useState(DepartDummyList[0]);

	const handleSelect = (e) => {
		setNowDepart(e.target.value);
	};

	return (
		<Container>
			<Select onChange={handleSelect} value={nowDepart}>
				{DepartDummyList.map((item, index) => (
					<Option key={index} value={item}>
						{item}
					</Option>
				))}
			</Select>
			<SelectedDepartment>{nowDepart}</SelectedDepartment>
		</Container>
	);
};

export default DepartmentList;
