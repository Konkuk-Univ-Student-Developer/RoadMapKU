import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { myCompetencyListSelector, selectedMyTableContentsState } from '@recoils';
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
	const myCompetencyList = useRecoilValue(myCompetencyListSelector);
	const selectedMyTableContents = useRecoilValue(selectedMyTableContentsState);

	return (
		<Container>
			<CompetencyTable competencyTableData={myCompetencyList} />
			<CourseTable courseTableData={selectedMyTableContents} />
		</Container>
	);
};

export default MyMapTable;
