import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;

const StyledTable = styled.table`
	border-collapse: separate;
	border-spacing: 0;
	width: 100%;
	margin: 0rem 20px;
	border-radius: 5px;
	overflow: hidden;
	border: 0.5px solid gray;
`;

const Td = styled.td`
	font-family: 'Pretendard-regular';
	padding: 8px;
	text-align: center;
	border: 0.25px solid gray;
	font-size: 14px;
	width: 8%;
	background-color: ${({ isHeader }) => (isHeader ? '#036b3f' : 'white')};
	color: ${({ isHeader }) => (isHeader ? 'white' : 'black')};
`;

// 행렬 변환 함수 (구분, 내용 추가)
const transposeDataWithHeaders = (data) => {
	const headers = ['구분', '내용'];
	const transposed = data[0].map((_, colIndex) => {
		const newRow = [headers[colIndex], ...data.map((row) => row[colIndex])];
		return newRow;
	});
	return transposed;
};

const TableComponent = ({ data }) => {
	const transposedData = transposeDataWithHeaders(data);

	return (
		<TableContainer>
			<StyledTable>
				<tbody>
					{transposedData.map((row, i) => (
						<tr key={i}>
							{row.map((cell, j) => (
								<Td key={j} isHeader={j === 0}>
									{cell}
								</Td>
							))}
						</tr>
					))}
				</tbody>
			</StyledTable>
		</TableContainer>
	);
};

export default TableComponent;
