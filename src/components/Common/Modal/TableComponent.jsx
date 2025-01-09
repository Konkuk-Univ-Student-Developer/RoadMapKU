import React from 'react';
import styled from 'styled-components';
import { Color } from '../../../style/Color';

const Container = styled.div`
	background-color: transparent;
	padding: 0rem;
	width: 100%;
`;

const TableContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;

const Table = styled.table`
	width: 90%;
	border-collapse: collapse;
	margin-bottom: 20px;
	table-layout: fixed;
`;

const Td = styled.td`
	font-size: 11.5px;
	padding: 10px;
	border: 1px solid #ddd;
	text-align: center;
	width: 10%;
	word-wrap: break-word;
	&:nth-child(1) {
		background-color: ${Color.GREEN};
		color: #ffffff;
	}
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
		<Container>
			<TableContainer>
				<Table>
					<tbody>
						{transposedData.map((row, i) => (
							<tr key={i}>
								{row.map((cell, j) => (
									<Td key={j}>{cell}</Td>
								))}
							</tr>
						))}
					</tbody>
				</Table>
			</TableContainer>
		</Container>
	);
};

export default TableComponent;
