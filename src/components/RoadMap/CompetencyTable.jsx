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
	padding-left: 0.8rem;
`;

const CompetencyContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
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

	const isEqualArray = (arr1, arr2) => {
		return JSON.stringify(arr1) === JSON.stringify(arr2);
	};

	useEffect(() => {
		if (!Array.isArray(competencyTableData)) {
			console.log('competencyTableData is empty');
			setCompetencyTable([]);
		} else {
			// 전공역량을 역량코드 순으로 재배열
			const sortedCompetencyTable = [...competencyTableData];
			sortedCompetencyTable.sort((a, b) => a.competencyCode.localeCompare(b.competencyCode));

			// 테이블이 다를 경우에만 새로 렌더링
			if (!isEqualArray(competencyTable, sortedCompetencyTable)) {
				setCompetencyTable([]);
				let delay = 0;
				sortedCompetencyTable.forEach((competencies) => {
					setTimeout(() => {
						setCompetencyTable((prevItems) => {
							const updatedCompetencyTableData = [...prevItems, competencies];
							return updatedCompetencyTableData;
						});
					}, delay);
					delay += 50;
				});
			}
		}
	}, [competencyTableData]);

	return (
		<Container>
			<Title>전공역량</Title>
			<CompetencyContainer>
				<TransitionGroup component={CompetencyColumn}>
					{competencyTable.map((competency) => (
						<CSSTransition key={competency.competencyCode} timeout={animationTiming} classNames="Bounce">
							<Cell cellData={competency} onClick={onClick} highlightedCompetency={highlightedCompetency} />
						</CSSTransition>
					))}
				</TransitionGroup>
			</CompetencyContainer>
		</Container>
	);
};

export default CompetencyTable;
