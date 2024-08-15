import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;

const StyledTable = styled.table`
	border-collapse: collapse;
	width: 80%;
	border-radius: 10px;
	overflow: hidden;
	border: 1px solid #ddd;
`;

const Th = styled.th`
	padding: 8px;
	background-color: #036b3f;
	text-align: center;
	color: white;
	border: 1px solid black; /* 테두리 추가 */
	font-size: 14px; /* 셀의 폰트 크기 설정 */
`;

const Td = styled.td`
	padding: 8px;
	text-align: center;
	border: 1px solid black; /* 테두리 추가 */
	font-size: 14px; /* 셀의 폰트 크기 설정 */
`;

const TableComponent = ({ data }) => {
	return (
		<TableContainer>
			<StyledTable>
				<thead>
					<tr>
						<Th>분류</Th>
						<Th>특징</Th>
					</tr>
				</thead>
				<tbody>
					{data.map((row, i) => (
						<tr key={i}>
							{row.map((cell, j) => (
								<Td key={j}>{cell}</Td>
							))}
						</tr>
					))}
				</tbody>
			</StyledTable>
		</TableContainer>
	);
};

export default TableComponent;
