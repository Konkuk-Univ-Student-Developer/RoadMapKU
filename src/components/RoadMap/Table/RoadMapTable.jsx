import React from 'react';
import styled from 'styled-components';
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

const RoadMapTable = ({ competencyTableData, courseTableData }) => {
	return (
		<Container>
			<CompetencyTable competencyTableData={competencyTableData} />
			<CourseTable courseTableData={courseTableData} />
		</Container>
	);
};

export default RoadMapTable;
