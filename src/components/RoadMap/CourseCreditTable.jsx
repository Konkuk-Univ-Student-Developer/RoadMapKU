import React from 'react';
import styled from 'styled-components';
import { fadeIn } from '../../style/Frames';
import { Color } from '../../style/Color';

const CourseCreditContainer = styled.div`
	height: 4rem;
	margin: 0rem 1rem 1rem 1rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;
	box-sizing: border-box;
	border-radius: 0.2rem;
	background-color: #e6e6e6;
`;

const TitleContainer = styled.div`
	padding: 0 20px;
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const Title = styled.div`
	min-width: 8rem;
	width: 15%;
	user-select: none;
	font-size: large;
	font-weight: bolder;
	color: ${Color.GREEN};
	display: flex;
	align-items: center;
	justify-content: center;
`;

const TitleNumber = styled.div`
	min-width: 4rem;
	width: 15%;
	user-select: none;
	font-size: large;
	font-weight: bolder;
	color: ${Color.GREEN};
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
	width: 12rem;
	min-width: 10rem;
	font-size: small;
	margin: 0 10px;
	box-sizing: border-box;
	border-radius: 0.2rem;
	background-color: #fafafa;
	color: #1e1e1e;
	user-select: none;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	animation: ${fadeIn} 0.2s ease-in-out;
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
				<TitleNumber>{courseCreditSum}</TitleNumber>
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
