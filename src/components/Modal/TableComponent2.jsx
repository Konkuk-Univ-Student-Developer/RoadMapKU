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
	font-family: 'Pretendard-regular';
	padding: 8px;
	background-color: #036b3f;
	text-align: center;
	color: white;
	font-size: 14px;
	border: 1px solid black;
`;

const Td = styled.td`
	padding: 8px;
	text-align: center;
	font-size: 13px;
	border: 1px solid black;

	/* "-" 값일 때 중앙 정렬 */
	&.centered {
		text-align: center;
	}

	/* competencyRemark 열에만 적용할 스타일 */
	&.remark {
		text-align: left;
	}
`;

const TableComponent2 = ({ data }) => {
	const headers = ['주전공역량', '보조전공역량1', '보조전공역량2'];

	return (
		<TableContainer>
			<StyledTable>
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
			</StyledTable>
		</TableContainer>
	);
};

export default TableComponent2;
