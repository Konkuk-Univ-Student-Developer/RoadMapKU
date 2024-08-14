import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;

const StyledTable = styled.table`
	border-collapse: collapse;
	width: 90%;
	border-radius: 10px;
	overflow: hidden;
	border: 1px solid #ddd;
`;

const Th = styled.th`
	padding: 8px;
	background-color: #036b3f;
	text-align: center;
	color: white;
	font-size: 12px; /* 헤더의 폰트 크기 설정 */
	border: 1px solid black; /* 테두리 추가 */
`;

const Td = styled.td`
	padding: 8px;
	text-align: center;
	font-size: 12px; /* 셀의 폰트 크기 설정 */
	border: 1px solid black; /* 테두리 추가 */
`;

const TableComponent2 = ({ data }) => {
	const headers = ['주전공역량', '보조전공역량1', '보조전공역량2'];

	return (
		<TableContainer>
			<StyledTable>
				<thead>
					<tr>
						<Th>분류</Th>
						<Th>특징</Th>
						<Th>설명</Th>
					</tr>
				</thead>
				<tbody>
					{data.map((row, i) => (
						<tr key={i}>
							<Td>{headers[i]}</Td>
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

export default TableComponent2;
