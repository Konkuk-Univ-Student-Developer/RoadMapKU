import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { selectedMyTableContentsState } from '@recoils';
import { CompetencyTable } from '@Competency';
import { CourseTable } from '@Course';

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
	const [myCompetencyList, setMyCompetencyList] = useState([]);

	const selectedMyTableContents = useRecoilValue(selectedMyTableContentsState);

	// 내 로드맵 교과목들의 전공역량을 myCompetencyList에 저장
	useEffect(() => {
		const competencyArray = [];
		selectedMyTableContents.forEach((row) => {
			row.forEach((cellData) => {
				if (Array.isArray(cellData.competencyCodes)) {
					competencyArray.push(...cellData.competencyCodes);
				}
			});
		});
		const uniqueCompetencyArray = Array.from(new Set(competencyArray));
		setMyCompetencyList(uniqueCompetencyArray);
	}, [selectedMyTableContents]);

	return (
		<Container>
			<CompetencyTable competencyTableData={myCompetencyList} />
			<CourseTable courseTableData={selectedMyTableContents} />
		</Container>
	);
};

export default MyMapTable;
