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
	justify-content: center;
`;

const Subtitle = styled.h2`
	color: ${Color.GREEN};
	font-size: 1.5rem;
	margin: 0rem 20px;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
`;

const TableContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;
`;

const TextContainer = styled.div`
	margin-top: 10px;
	color: #808080;
	font-size: 0.8rem;
	display: flex;
	justify-content: flex-start;
	gap: 10px;
	margin: 0 auto 20px;
	width: 90%;
`;
const SemesterButtonContainer = styled.div`
	display: flex;
	margin-right: 5%;
	justify-content: flex-end;
	//margin-bottom: 20px;
	gap: 10px;
	//width: 95%;
`;

const SemesterButton = styled.button`
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

const SubtitleWithButtons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: auto;
	margin-bottom: 10px;
`;

const CompetitionTable = ({ haksuId }) => {
	const { fetchCompetitionRate } = useField();
	const [selectedSemester, setSelectedSemester] = useState(null);
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
					setSelectedSemester(data[0]?.openingSemester); // 기본값: 첫 번째 학기
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

	const filteredData = competitionData?.find((semester) => semester.openingSemester === selectedSemester) || null;

	const gradeMapping = filteredData
		? {
				total: {
					students: filteredData?.competitionRates?.totalNumber || '-',
					capacity: filteredData?.competitionRates?.totalCourseBasketNumber || '-',
					rate: filteredData?.competitionRates?.totalCompetitionRate || '-'
				},
				1: {
					students: filteredData?.competitionRates?.freshmanTotalNumber || '-',
					capacity: filteredData?.competitionRates?.freshmanCourseBasketNumber || '-',
					rate: filteredData?.competitionRates?.freshmanCompetitionRate || '-'
				},
				2: {
					students: filteredData?.competitionRates?.sophomoreTotalNumber || '-',
					capacity: filteredData?.competitionRates?.sophomoreCourseBasketNumber || '-',
					rate: filteredData?.competitionRates?.sophomoreCompetitionRate || '-'
				},
				3: {
					students: filteredData?.competitionRates?.juniorTotalNumber || '-',
					capacity: filteredData?.competitionRates?.juniorCourseBasketNumber || '-',
					rate: filteredData?.competitionRates?.juniorCompetitionRate || '-'
				},
				4: {
					students: filteredData?.competitionRates?.seniorTotalNumber || '-',
					capacity: filteredData?.competitionRates?.seniorCourseBasketNumber || '-',
					rate: filteredData?.competitionRates?.seniorCompetitionRate || '-'
				}
			}
		: null;

	return (
		<Container>
			<SubtitleWithButtons>
				<Subtitle>수강 신청 경쟁률</Subtitle>
				{competitionData && competitionData.length > 1 && (
					<SemesterButtonContainer>
						{competitionData.map((semester) => (
							<SemesterButton
								key={semester.openingSemester}
								$active={selectedSemester === semester.openingSemester}
								onClick={() => setSelectedSemester(semester.openingSemester)}
							>
								{semester.openingSemester}
							</SemesterButton>
						))}
					</SemesterButtonContainer>
				)}
			</SubtitleWithButtons>

			<TextContainer>* 2024학년도 {selectedSemester} 데이터를 기준으로 산출하였습니다.</TextContainer>

			{errorMessage ? (
				<MessageContainer>{errorMessage}</MessageContainer>
			) : filteredData ? (
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
									<Td>{filteredData.totalApplicationNumber || '-'}</Td>
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
							<GradeButton key={grade} $active={selectedGrade === grade} onClick={() => setSelectedGrade(grade)}>
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
			) : null}
		</Container>
	);
};

export default CompetitionTable;
