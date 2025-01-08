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

const Th = styled.th`
	font-size: 14px;
	padding: 10px;
	background-color: ${Color.GREEN};
	color: #ffffff;
	text-align: center;

	&:nth-child(1) {
		width: 20%;
	}
	&:nth-child(2) {
		width: 30%;
	}
	&:nth-child(3) {
		width: 50%;
	}
`;

const Td = styled.td`
	font-size: 13px;
	padding: 10px;
	border: 1px solid #ddd;
	text-align: center;

	&:nth-child(1) {
		width: 20%;
	}
	&:nth-child(2) {
		width: 30%;
	}
	&:nth-child(3) {
		width: 50%;
	}
`;

const TableComponent2 = ({ data }) => {
	const headers = ['주전공역량', '보조전공역량1', '보조전공역량2'];

	return (
		<Container>
			<TableContainer>
				<Table>
					<thead>
						<tr>
							<Th>분류</Th>
							<Th>전공역량명</Th>
							<Th>전공역량 정의</Th>
						</tr>
					</thead>
					<tbody>
						{data.map((row, i) => (
							<tr key={i}>
								<Td>{headers[i]}</Td>
								{row.map((cell, j) => (
									<Td key={j} className={cell === '-' ? 'centered' : j === 1 ? 'remark' : ''}>
										{cell}
									</Td>
								))}
							</tr>
						))}
					</tbody>
				</Table>
			</TableContainer>
		</Container>
	);
};

export default TableComponent2;
