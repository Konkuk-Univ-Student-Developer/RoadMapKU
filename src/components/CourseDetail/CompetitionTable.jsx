import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
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
	margin: 0px 20px;
	display: flex;
	justify-content: flex-start;
	margin-top: 10px;
	color: #808080;
	font-size: 0.8rem;
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
	background-color: #036b3f;
	color: #ffffff;
	text-align: center;
	width: 33.33%;
`;

const Td = styled.td`
	font-size: 13px;
	padding: 10px;
	border: 1px solid #ddd;
	text-align: center;
	width: 33.33%;
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

const MessageContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
	font-size: 14px;
	color: #036b3f;
`;

const CompetitionTable = ({ haksuId }) => {
	const { fetchCompetitionRate } = useField();
	const [selectedGrade, setSelectedGrade] = useState(1);
	const [errorMessage, setErrorMessage] = useState(null);
	const setCompetitionRateState = useSetRecoilState(competitionRateState);
	const competitionData = useRecoilValue(competitionRateState);

	useEffect(() => {
		const loadCompetitionRate = async () => {
			if (haksuId) {
				try {
					const data = await fetchCompetitionRate(haksuId);
					setCompetitionRateState(data);
					setErrorMessage(null);
					console.log('수강 경쟁률:', data);
				} catch (error) {
					if (error.response && error.response.status === 404) {
						setErrorMessage('해당 학기 미개설');
					} else {
						setErrorMessage('데이터를 불러오는 중 문제가 발생했습니다.');
					}
					setCompetitionRateState(null);
				}
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
			<TextContainer>* 2024학년도 데이터를 기준으로 산출하였습니다.</TextContainer>
			{errorMessage ? (
				<MessageContainer>{errorMessage}</MessageContainer>
			) : (
				<>
					{/* 전체 학년 정보 */}
					<TableContainer>
						<Table>
							<thead>
								<tr>
									<Th>실 수강인원</Th>
									<Th>수강 바구니</Th>
									<Th>수강 정원</Th>
									<Th>전체 경쟁률</Th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<Td>{competitionData?.totalApplicationNumber || '-'}</Td>
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
				</>
			)}
		</Container>
	);
};

export default CompetitionTable;
