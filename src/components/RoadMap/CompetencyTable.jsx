import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Cell from './CompetencyCell';

const Container = styled.div`
	width: 15%;
	height: auto;
	box-sizing: border-box;
	border: 0.05rem solid black;
	border-radius: 0.2rem;
	background-color: #f4f4f4;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
`;

const CompetencyContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	padding-left: 0.9rem;
`;

const Title = styled.div`
	user-select: none;
	font-size: x-large;
	font-weight: bolder;
	color: #036b3f;
	padding-bottom: 0.5rem;
`;

const CompetencyColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
`;

const animationTiming = {
	enter: 400,
	exit: 0
};

const CompetencyTable = ({ competencyTableData, onClick, highlightedCompetency }) => {
	const [competencyTable, setCompetencyTable] = useState([]);
	const [refs, setRefs] = useState([]);

	useEffect(() => {
		if (!Array.isArray(competencyTableData) || competencyTableData.length === 0) {
			console.log('competencyTableData is empty');
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
		let delay = 0;
		setCompetencyTable([]);
		sortedCompetencyTable.forEach((competency) => {
			setTimeout(() => {
				setCompetencyTable((prevItems) => [...prevItems, competency]);
			}, delay);
			delay += 50;
		});
	}, [competencyTableData]);

	return (
		<Container>
			<Title>전공역량</Title>
			<CompetencyContainer>
				<TransitionGroup component={CompetencyColumn}>
					{competencyTable.map((competency, index) => (
						<CSSTransition
							key={competency.competencyCode}
							timeout={animationTiming}
							classNames="Bounce"
							nodeRef={refs[index]}
						>
							<Cell
								ref={refs[index]}
								cellData={competency}
								onClick={onClick}
								highlightedCompetency={highlightedCompetency}
							/>
						</CSSTransition>
					))}
				</TransitionGroup>
			</CompetencyContainer>
		</Container>
	);
};

export default CompetencyTable;
