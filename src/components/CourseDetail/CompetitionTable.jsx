import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { competitionRateState } from '../../recoils/atoms';
import useField from '../../hooks/useField';
import { Color } from '../../style/Color';

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
	background-color: ${Color.GREEN};
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
	background-color: ${({ $active }) => ($active ? Color.GREEN : '#ddd')};
	color: ${({ $active }) => ($active ? 'white' : Color.BLACK)};
	border: none;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background-color: ${Color.GREEN};
		color: white;
	}
`;
const MessageContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
	font-size: 14px;
	color: ${Color.GREEN};
`;

const CompetitionTable = ({ haksuId }) => {
	const { fetchCompetitionRate } = useField();
	const [errorMessage, setErrorMessage] = useState(null);
	const setCompetitionRateState = useSetRecoilState(competitionRateState);
	const competitionData = useRecoilValue(competitionRateState);
	const [selectedGrades, setSelectedGrades] = useState([]);

	useEffect(() => {
		if (competitionData && competitionData.length > 0) {
			setSelectedGrades(Array(competitionData.length).fill(1)); // 학기별로 초기값 설정 (1학년)
		}
	}, [competitionData]);

	useEffect(() => {
		const loadCompetitionRate = async () => {
			if (haksuId) {
				try {
					const data = await fetchCompetitionRate(haksuId);
					setCompetitionRateState(data);
					setErrorMessage(null);
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

	const handleGradeChange = (index, grade) => {
		const updatedGrades = [...selectedGrades];
		updatedGrades[index] = grade;
		setSelectedGrades(updatedGrades);
	};

	const renderTablesForSemesters = () => {
		if (!competitionData || competitionData.length === 0) {
			return null;
		}

		return competitionData.map((semesterData, index) => {
			const gradeMapping = {
				total: {
					students: semesterData?.competitionRates?.totalNumber || '-',
					capacity: semesterData?.competitionRates?.totalCourseBasketNumber || '-',
					rate: semesterData?.competitionRates?.totalCompetitionRate || '-'
				},
				1: {
					students: semesterData?.competitionRates?.freshmanTotalNumber || '-',
					capacity: semesterData?.competitionRates?.freshmanCourseBasketNumber || '-',
					rate: semesterData?.competitionRates?.freshmanCompetitionRate || '-'
				},
				2: {
					students: semesterData?.competitionRates?.sophomoreTotalNumber || '-',
					capacity: semesterData?.competitionRates?.sophomoreCourseBasketNumber || '-',
					rate: semesterData?.competitionRates?.sophomoreCompetitionRate || '-'
				},
				3: {
					students: semesterData?.competitionRates?.juniorTotalNumber || '-',
					capacity: semesterData?.competitionRates?.juniorCourseBasketNumber || '-',
					rate: semesterData?.competitionRates?.juniorCompetitionRate || '-'
				},
				4: {
					students: semesterData?.competitionRates?.seniorTotalNumber || '-',
					capacity: semesterData?.competitionRates?.seniorCourseBasketNumber || '-',
					rate: semesterData?.competitionRates?.seniorCompetitionRate || '-'
				}
			};

			return (
				<div key={index}>
					<TextContainer>* {semesterData.openingSemester}학기 데이터를 기준으로 산출하였습니다.</TextContainer>
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
									<Td>{semesterData.totalApplicationNumber || '-'}</Td>
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
							<GradeButton
								key={grade}
								$active={selectedGrades[index] === grade}
								onClick={() => handleGradeChange(index, grade)} // 학기별 상태 변경
							>
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
									<Td>{gradeMapping[selectedGrades[index]].capacity}</Td>
									<Td>{gradeMapping[selectedGrades[index]].students}</Td>
									<Td>{gradeMapping[selectedGrades[index]].rate}</Td>
								</tr>
							</tbody>
						</Table>
					</TableContainer>
				</div>
			);
		});
	};

	return (
		<Container>
			{errorMessage ? <MessageContainer>{errorMessage}</MessageContainer> : renderTablesForSemesters()}
		</Container>
	);
};

export default CompetitionTable;
