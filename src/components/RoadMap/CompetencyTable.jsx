import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Cell from './CompetencyCell';
import { Color } from '../../style/Color';

const Container = styled.div`
	width: 15%;
	height: auto;
	box-sizing: border-box;
	border-radius: 0.2rem;
	background-color: #e6e6e6;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
`;

const CompetencyContainer = styled.div`
	width: 96%;
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	padding-left: 0.9rem;
`;

const Title = styled.div`
	height: 1.7rem;
	user-select: none;
	font-size: 15px;
	font-weight: bolder;
	color: ${Color.GREEN};
	padding-bottom: 0.5rem;
	display: flex;
	align-items: center;
`;

const CompetencyColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const CompetencyTable = ({ competencyTableData, onClick, highlightedCompetency }) => {
	const [competencyTable, setCompetencyTable] = useState([]);
	const [refs, setRefs] = useState([]);

	useEffect(() => {
		if (!Array.isArray(competencyTableData) || competencyTableData.length === 0) {
			// console.log('competencyTableData is empty');
			setCompetencyTable([]);
			setRefs([]);
			return;
		}

		// Sort competencyTableData by competencyCode
		const sortedCompetencyTable = [...competencyTableData].sort((a, b) =>
			a.competencyCode.localeCompare(b.competencyCode)
		);

		// Update refs
		setRefs(sortedCompetencyTable.map(() => React.createRef()));

		// Update competencyTable with delays
		setCompetencyTable([]);
		sortedCompetencyTable.forEach((competency) => {
			setCompetencyTable((prevItems) => {
				const isDuplicate = prevItems.some((item) => item.competencyName === competency.competencyName);

				return isDuplicate ? prevItems : [...prevItems, competency];
			});
		});
	}, [competencyTableData]);

	return (
		<Container>
			<Title>전공역량</Title>
			<CompetencyContainer>
				<CompetencyColumn>
					{competencyTable.map((competency, index) => (
						<Cell
							key={index}
							ref={refs[index]}
							cellData={competency}
							onClick={onClick}
							highlightedCompetency={highlightedCompetency}
						/>
					))}
				</CompetencyColumn>
			</CompetencyContainer>
		</Container>
	);
};

export default CompetencyTable;
