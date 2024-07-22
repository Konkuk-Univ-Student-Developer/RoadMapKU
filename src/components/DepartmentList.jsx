import React from 'react';
import styled from 'styled-components';

const DepartDummyList = ['컴퓨터공학부', '전기전자공학부', '스마트ICT융합공학과'];

const Select = styled.select`
	width: 200px;
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

const DepartmentList = () => {
	return (
		<Select>
			{DepartDummyList.map((item, index) => (
				<Option key={index} value={item}>
					{item}
				</Option>
			))}
		</Select>
	);
};

export default DepartmentList;
