import React from 'react';
import styled from 'styled-components';

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

const Cell = styled.div`
	height: 2rem;
	font-size: small;
	box-sizing: border-box;
	border: 0.05rem solid black;
	border-radius: 0.2rem;
	background-color: white;
	cursor: pointer;
	user-select: none;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	transition: background-color 0.2s ease-out;

	&:hover,
	&:active {
		background-color: #a9d1b3;
	}

	&.unclickable {
		pointer-events: none;
		background-color: #f4f4f4;
	}
`;

const Title = styled.div`
	padding-bottom: 1rem;
	font-size: x-large;
	font-weight: bolder;
	text-color: #036b3f;
`;

const MajorCompetenctTable = () => {
	const rowData = ['A1', 'A2', 'A3'];

	return (
		<Container>
			<Title>전공역량</Title>
			<ColumnMajorCompetency>
				{rowData.map((data, index) => (
					<Cell key={index}>{data}</Cell>
				))}
			</ColumnMajorCompetency>
		</Container>
	);
};

export default MajorCompetenctTable;
