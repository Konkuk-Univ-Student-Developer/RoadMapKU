import React from 'react';
import styled from 'styled-components';

const CourseCreditContainer = styled.div`
	height: 3rem;
	margin: 0rem 1rem 1rem 1rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5rem;
	box-sizing: border-box;
	border: 0.05rem solid black;
	border-radius: 0.2rem;
	background-color: #f4f4f4;
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

const Card = styled.div`
	height: 2rem;
	width: 10rem;
	min-width: 10rem;
	font-size: small;
	font-family: 'Pretendard-regular';
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

	return (
		<CourseCreditContainer>
			<Title>학과 별 담은 학점</Title>
			{courseCreditData.map((data, index) => (
				<Card key={index}>
					{data.subjectName}: {data.courseCredit}학점
				</Card>
			))}
		</CourseCreditContainer>
	);
};

export default CourseCreditTable;
