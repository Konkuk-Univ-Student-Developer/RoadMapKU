import React from 'react';
import styled from 'styled-components';
import { CompetencyTable } from '@Competency';
import { CourseTable } from '@Course';
import { competencyListSelector, courseTableDataSelector } from '@recoils';
import { useRecoilValue } from 'recoil';

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

const RoadMapTable = () => {
	const courseTableData = useRecoilValue(courseTableDataSelector);
	const competencyTableData = useRecoilValue(competencyListSelector);

	return (
		<Container>
			<CompetencyTable competencyTableData={competencyTableData} />
			<CourseTable courseTableData={courseTableData} />
		</Container>
	);
};

export default RoadMapTable;
