import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	text-align: center;
	width: 100%;
	height: 100%; /* Ensure the container takes the full height of the viewport */
	margin: 0; /* Remove default margins */
	padding: 0; /* Remove default padding */
`;

// const MainSection = styled.div`
// 	display: flex;
// 	width: 100%; /* Ensure full width */
// 	height: 100%; /* Ensure full height */
// 	justify-content: center;
// 	align-items: center; /* Center the content vertically */
// 	background-color: var(--main); /* Assuming --main is a CSS variable */
// `;

const ImageWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-left: 0px;
	box-sizing: border-box;
`;

function HeroSection() {
	return (
		<Container>
			{/* <MainSection> */}
			<ImageWrapper>
				<img style={{ width: '100%' }} src={`/img/KU_Herosection.png`} alt="Hero Section Character" />
			</ImageWrapper>
			{/* </MainSection> */}
		</Container>
	);
}

export default HeroSection;
