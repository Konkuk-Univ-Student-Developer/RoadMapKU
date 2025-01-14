import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import CourseTable from './RoadMapTable';
import CompetencyTable from './CompetencyTable';
import { selectedCoursesState } from '../../recoils/atoms';

const Container = styled.div`
	height: 21rem;
	min-height: 19rem;
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	padding-left: 1rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
`;

const MyMapTable = () => {
	// myCompetencyList: 내 로드맵의 전공역량 목록
	const selectedCourses = useRecoilValue(selectedCoursesState);
	const [myCompetencyList, setMyCompetencyList] = useState([]);

	// 내 로드맵 교과목들의 전공역량을 myCompetencyList에 저장
	useEffect(() => {
		const competencyArray = [];
		selectedCourses.forEach((row) => {
			row.forEach((cellData) => {
				if (Array.isArray(cellData.competencyCodes)) {
					competencyArray.push(...cellData.competencyCodes);
				}
			});
		});
		const uniqueCompetencyArray = Array.from(new Set(competencyArray));
		setMyCompetencyList(uniqueCompetencyArray);
	}, [selectedCourses]);

	return (
		<Container>
			<CompetencyTable competencyTableData={myCompetencyList} />
			<CourseTable courseTableData={selectedCourses} />
		</Container>
	);
};

export default MyMapTable;
