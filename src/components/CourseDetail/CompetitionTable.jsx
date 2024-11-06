import React, { useState } from 'react';
import styled from 'styled-components';
import * as L from './CourseDetailStyle';

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
	width: 80%;
	border-collapse: collapse;
	margin-bottom: 20px;
	table-layout: fixed;
`;

const Th = styled.th`
	padding: 10px;
	background-color: #f0f0f0;
	border: 1px solid #ddd;
	text-align: center;
	width: 33.33%; /* 각 열의 너비를 전체의 1/3로 설정 */
`;

const Td = styled.td`
	padding: 10px;
	border: 1px solid #ddd;
	text-align: center;
	width: 33.33%; /* 각 열의 너비를 전체의 1/3로 설정 */
`;

const ButtonContainer = styled.div`
	display: flex;
	gap: 10px;
	margin: 0 auto 20px;
	width: 80%;
	justify-content: center;
`;
const GradeButton = styled.button`
	padding: 8px 16px;
	background-color: ${({ active }) => (active ? '#036b3f' : '#ddd')};
	color: ${({ active }) => (active ? 'white' : 'black')};
	border: none;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background-color: #036b3f;
		color: white;
	}
`;
//DummyData 이용
const data = {
	total: { students: 100, capacity: 120, competitionRate: '1.2' },
	grades: {
		1: { students: 30, capacity: 35, competitionRate: '0.86' },
		2: { students: 25, capacity: 30, competitionRate: '0.83' },
		3: { students: 20, capacity: 25, competitionRate: '0.8' },
		4: { students: 25, capacity: 30, competitionRate: '0.83' }
	}
};

const CompetitionTable = () => {
	const [selectedGrade, setSelectedGrade] = useState(1);

	return (
		<Container>
			<L.Subtitle>수강 신청 경쟁률</L.Subtitle>

			{/* 전체 학년 정보 */}
			<TableContainer>
				<Table>
					<thead>
						<tr>
							<Th>총 수강 인원</Th>
							<Th>수강 정원</Th>
							<Th>경쟁률</Th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<Td>{data.total.students}</Td>
							<Td>{data.total.capacity}</Td>
							<Td>{data.total.competitionRate}</Td>
						</tr>
					</tbody>
				</Table>
			</TableContainer>

			{/* 학년 선택 버튼 */}
			<ButtonContainer>
				{[1, 2, 3, 4].map((grade) => (
					<GradeButton key={grade} active={selectedGrade === grade} onClick={() => setSelectedGrade(grade)}>
						{grade}학년
					</GradeButton>
				))}
			</ButtonContainer>

			{/* 선택된 학년 정보 */}
			<TableContainer>
				<Table>
					<thead>
						<tr>
							<Th>수강 인원</Th>
							<Th>수강 정원</Th>
							<Th>경쟁률</Th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<Td>{data.grades[selectedGrade].students}</Td>
							<Td>{data.grades[selectedGrade].capacity}</Td>
							<Td>{data.grades[selectedGrade].competitionRate}</Td>
						</tr>
					</tbody>
				</Table>
			</TableContainer>
		</Container>
	);
};

export default CompetitionTable;
