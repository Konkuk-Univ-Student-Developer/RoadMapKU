import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CompetencyCell } from '@Competency';
import { Color } from '@styles';

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
	width: calc(100% - 14px);
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-contents: right;
	overflow-y: scroll;
	padding-left: 14px;
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

		setCompetencyTable([]);
		sortedCompetencyTable.forEach((competency) => {
			setCompetencyTable((prevItems) => {
				const isDuplicate = prevItems.some((item) => item.competencyCode === competency.competencyCode);

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
						<CompetencyCell
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
