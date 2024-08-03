import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Cell from './CompetencyCell';

const Container = styled.div`
	width: 28%;
	padding: 0.5rem;
	box-sizing: border-box;
	border: 0.05rem solid black;
	border-radius: 0.2rem;
	background-color: #f4f4f4;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ColumnMajorCompetency = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const Title = styled.div`
	padding-bottom: 1rem;
	font-size: x-large;
	font-weight: bolder;
	color: #036b3f;
`;

const CompetenctTable = ({ competencyTable }) => {
	const [competencyTableData, setCompetencyTableData] = useState([]);

	useEffect(() => {
		if (!competencyTable.subjectCode) {
			console.log('competencyTable is empty');
		} else {
			console.log('competencyTable: ', competencyTable);

			let delay = 0;
			if (competencyTable) {
				competencyTable.competencies.forEach((competencies) => {
					setTimeout(() => {
						setCompetencyTableData((prevItems) => {
							const newItems = [...prevItems, competencies];
							return newItems;
						});
					}, delay);
					delay += 50;
				});
			}
		}
	}, [competencyTable]);

	return (
		<Container>
			<Title>전공역량</Title>
			<TransitionGroup component={ColumnMajorCompetency}>
				{competencyTableData.map((competency) => (
					<CSSTransition key={competency.competencyCode} timeout={400} classNames="Bounce">
						<Cell cellData={competency} />
					</CSSTransition>
				))}
			</TransitionGroup>
		</Container>
	);
};

export default CompetenctTable;
