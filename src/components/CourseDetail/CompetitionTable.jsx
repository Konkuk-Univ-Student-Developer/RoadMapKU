import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import * as L from './CourseDetailStyle';
import { competitionRateState } from '../../recoils/atoms';
import useField from '../../hooks/useField';

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
const TextContainer = styled.div`
	font-family: 'Pretendard-regular';
	margin: 0px 20px;
	display: flex;
	justify-content: flex-start;
	margin-top: 10px;
	color: #808080;
	font-size: 0.8rem;
`;

const Table = styled.table`
	width: 80%;
	border-collapse: collapse;
	margin-bottom: 20px;
	table-layout: fixed;
`;

const Th = styled.th`
	font-family: 'Pretendard-regular';
	font-size: 14px;
	padding: 10px;
	// background-color: #f0f0f0;
	// border: 1px solid #ddd;
	background-color: #036b3f;
	color: #ffffff;
	text-align: center;
	width: 33.33%; /* 각 열의 너비를 전체의 1/3로 설정 */
`;

const Td = styled.td`
	font-family: 'Pretendard-regular';
	font-size: 13px;
	padding: 10px;
	border: 1px solid #ddd;
	text-align: center;
	width: 33.33%; /* 각 열의 너비를 전체의 1/3로 설정 */
`;

const ButtonContainer = styled.div`
	font-family: 'Pretendard-regular';
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
// const data = {
// 	total: { students: 100, capacity: 120, competitionRate: '0.83' },
// 	grades: {
// 		1: { students: 30, capacity: 35, competitionRate: '0.86' },
// 		2: { students: 25, capacity: 30, competitionRate: '0.83' },
// 		3: { students: 20, capacity: 25, competitionRate: '0.8' },
// 		4: { students: 25, capacity: 30, competitionRate: '0.83' }
// 	}
// };

const CompetitionTable = ({ haksuId }) => {
	const { fetchCompetitionRate } = useField();
	const [selectedGrade, setSelectedGrade] = useState(1);
	const setCompetitionRateState = useSetRecoilState(competitionRateState);
	const competitionData = useRecoilValue(competitionRateState);

	//API 이용
	useEffect(() => {
		const loadCompetitionRate = async () => {
			if (haksuId) {
				try {
					const data = await fetchCompetitionRate(haksuId);
					setCompetitionRateState(data);
				} catch (error) {
					console.error('Error fetching competition rate:', error);
					setCompetitionRateState(null);
				}
				console.log(competitionData);
			}
		};

		loadCompetitionRate();
	}, [haksuId]);

	const gradeMapping = {
		total: {
			students: competitionData?.competitionRates?.totalNumber || '-',
			capacity: competitionData?.competitionRates?.totalCourseBasketNumber || '-',
			rate: competitionData?.competitionRates?.totalCompetitionRate || '-'
		},
		1: {
			students: competitionData?.competitionRates?.freshmanTotalNumber || '-',
			capacity: competitionData?.competitionRates?.freshmanCourseBasketNumber || '-',
			rate: competitionData?.competitionRates?.freshmanCompetitionRate || '-'
		},
		2: {
			students: competitionData?.competitionRates?.sophomoreTotalNumber || '-',
			capacity: competitionData?.competitionRates?.sophomoreCourseBasketNumber || '-',
			rate: competitionData?.competitionRates?.sophomoreCompetitionRate || '-'
		},
		3: {
			students: competitionData?.competitionRates?.juniorTotalNumber || '-',
			capacity: competitionData?.competitionRates?.juniorCourseBasketNumber || '-',
			rate: competitionData?.competitionRates?.juniorCompetitionRate || '-'
		},
		4: {
			students: competitionData?.competitionRates?.seniorTotalNumber || '-',
			capacity: competitionData?.competitionRates?.seniorCourseBasketNumber || '-',
			rate: competitionData?.competitionRates?.seniorCompetitionRate || '-'
		}
	};

	return (
		<Container>
			<L.Subtitle>수강 신청 경쟁률</L.Subtitle>
			<TextContainer>* 2023,2024학년도 데이터를 기준으로 산출하였습니다.</TextContainer>
			{/* 전체 학년 정보 */}
			<TableContainer>
				<Table>
					<thead>
						<tr>
							<Th>수강 바구니</Th>
							<Th>수강 정원</Th>
							<Th>경쟁률</Th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<Td>{gradeMapping['total'].capacity}</Td>
							<Td>{gradeMapping['total'].students}</Td>
							<Td>{gradeMapping['total'].rate}</Td>
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
							<Th>수강 바구니</Th>
							<Th>수강 정원</Th>
							<Th>경쟁률</Th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<Td>{gradeMapping[selectedGrade].capacity}</Td>
							<Td>{gradeMapping[selectedGrade].students}</Td>
							<Td>{gradeMapping[selectedGrade].rate}</Td>
						</tr>
					</tbody>
				</Table>
			</TableContainer>
		</Container>
	);
};

export default CompetitionTable;
