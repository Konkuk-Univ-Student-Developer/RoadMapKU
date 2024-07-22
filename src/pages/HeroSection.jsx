import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center; /* Center the content vertically */
	align-items: center; /* Center the content horizontally */
	width: 100%;
	height: 100%; /* Ensure the container takes the full height of the viewport */
	margin: 0 auto; /* Center the container horizontally */
	padding: 0; /* Remove default padding */
`;

const MainSection = styled.div`
	display: flex;
	width: 100%; /* Ensure full width */
	height: 100%; /* Ensure full height */
	justify-content: center;
	align-items: center; /* Center the content vertically */
	background-color: #456e2a; /* Assuming --main is a CSS variable */
`;

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
		<MainSection>
			<Container>
				<ImageWrapper>
					<img style={{ width: '100%' }} src={`/img/KU_Herosection.png`} alt="Hero Section Character" />
				</ImageWrapper>
			</Container>
		</MainSection>
	);
}

export default HeroSection;
