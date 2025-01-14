import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { selectedMyTableContentsState } from '../../recoils/atoms';
import { useRecoilValue } from 'recoil';
import { Color, fadeIn } from '@styles';

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

const CourseCreditTable = () => {
	const [courseCreditData, setCourseCreditData] = useState([]);

	const selectedMyTableContents = useRecoilValue(selectedMyTableContentsState);

	useEffect(() => {
		const courseCreditMap = {};
		selectedMyTableContents.forEach((row) => {
			row.forEach((cellData) => {
				const subject = cellData.subjectName;
				const credit = cellData.courseCredit;

				if (!subject) return;
				if (courseCreditMap[subject]) {
					courseCreditMap[subject] += credit;
				} else {
					courseCreditMap[subject] = credit;
				}
			});
		});

		const courseCreditArray = Object.entries(courseCreditMap)
			.map(([subjectName, courseCredit]) => ({
				subjectName,
				courseCredit
			}))
			.sort((a, b) => b.courseCredit - a.courseCredit);

		setCourseCreditData(courseCreditArray);
	}, [selectedMyTableContents]);

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
