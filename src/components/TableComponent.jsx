import React from 'react';

// Define the data based on additionalInfo
const tableData = [
	['개설대학', '공과대학'],
	['개설학과', '공과대학'],
	['강의유형', '이론+실습'],
	['학년', '1'],
	['학기', '1학기'],
	['학점', '2'],
	['공학인증이수구분', '선택'],
	['공학인증구분', '선택'],
	['공학인증세부구분', '-'],
	['동일강좌코드', '-'],
	['선수강과목', '-'],
	['MOOC 여부', 'N'],
	['Selc 여부', 'N'],
	['챌린저여부', 'N']
];

const TableComponent = () => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
			<table border="1" style={{ borderCollapse: 'collapse', width: '80%', borderRadius: '10px', overflow: 'hidden' }}>
				<thead>
					<tr>
						<th style={{ padding: '8px', backgroundColor: '#036b3f', textAlign: 'center', color: 'white' }}>분류</th>
						<th style={{ padding: '8px', backgroundColor: '#036b3f', textAlign: 'center', color: 'white' }}>특징</th>
					</tr>
				</thead>
				<tbody>
					{tableData.map((row, i) => (
						<tr key={i}>
							{row.map((cell, j) => (
								<td key={j} style={{ padding: '8px', textAlign: 'center' }}>
									{cell}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TableComponent;
