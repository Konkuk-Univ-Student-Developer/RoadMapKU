import React from 'react';
import styled from 'styled-components';

const CourseCreditContainer = styled.div`
	height: 6rem;
	margin: 0rem 1rem 1rem 1rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;
	box-sizing: border-box;
	border: 0.05rem solid gray;
	border-radius: 0.2rem;
	background-color: #f4f4f4;
`;

const TitleContainer = styled.div`
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Title = styled.div`
	min-width: 8rem;
	width: 15%;
	user-select: none;
	font-size: large;
	font-weight: bolder;
	color: #036b3f;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CardContainer = styled.div`
	display: flex;
	align-items: center;
	overflow: auto;
`;

const Card = styled.div`
	height: 2rem;
	width: 10rem;
	min-width: 10rem;
	font-size: small;
	margin: 0 10px;
	box-sizing: border-box;
	border: 0.05rem solid black;
	border-radius: 0.2rem;
	background-color: white;
	user-select: none;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

const CourseCreditTable = ({ courseCreditData }) => {
	if (!Array.isArray(courseCreditData)) {
		return;
	}

	const courseCreditSum = courseCreditData.reduce((sum, data) => sum + data.courseCredit, 0);

	return (
		<CourseCreditContainer>
			<TitleContainer>
				<Title>총 담은 학점</Title>
				<Title>{courseCreditSum}</Title>
			</TitleContainer>
			<CardContainer>
				{courseCreditData.map((data, index) => (
					<Card key={index}>
						{data.subjectName}: {data.courseCredit}학점
					</Card>
				))}
			</CardContainer>
		</CourseCreditContainer>
	);
};

export default CourseCreditTable;
