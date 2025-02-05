import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';
import { myCompetencyListSelector, selectedMyTableContentsState } from '@recoils';
import { CompetencyTable } from '@Competency';
import { CourseTable } from '@Course';
import { Color } from '@styles';

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

const TitleWrapper = styled.div`
	height: 4vh;
	padding-top: 0.5rem;
	padding-left: 1.5rem;
	padding-right: 1rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Title = styled.div`
	user-select: none;
	font-size: 25px;
	font-weight: bolder;
	color: ${Color.GREEN};
`;

const MyMapTable = () => {
	const myCompetencyList = useRecoilValue(myCompetencyListSelector);
	const selectedMyTableContents = useRecoilValue(selectedMyTableContentsState);

	return (
		<>
			<TitleWrapper>
				<Title>내 로드맵</Title>
			</TitleWrapper>
			<Container>
				<CompetencyTable competencyTableData={myCompetencyList} />
				<CourseTable courseTableData={selectedMyTableContents} />
			</Container>
		</>
	);
};

export default MyMapTable;
