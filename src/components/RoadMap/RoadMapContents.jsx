import React from 'react';
import styled from 'styled-components';
import CompetencyTable from './CompetencyTable';
import RoadMapTable from './RoadMapTable';

const RoadMapContainer = styled.div`
	height: 21rem;
	min-height: 19rem;
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	padding-left: 1rem;
	padding-top: 1rem;
	padding-bottom: 1rem;
`;

const RoadMapContents = ({
	competencyTableData,
	onCompetencyClick,
	highlightedCompetency,
	roadMapTableData,
	onCellClick,
	unclickableCells
}) => {
	return (
		<RoadMapContainer>
			<CompetencyTable
				competencyTableData={competencyTableData}
				onClick={onCompetencyClick}
				highlightedCompetency={highlightedCompetency}
			/>
			<RoadMapTable
				roadMapTableData={roadMapTableData}
				onCellClick={onCellClick}
				unclickableCells={unclickableCells}
				highlightedCompetency={highlightedCompetency}
			/>
		</RoadMapContainer>
	);
};

export default RoadMapContents;
