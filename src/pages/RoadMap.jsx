import styled from 'styled-components';
import NavBar from '../components/NavBar';
import { useState } from 'react';

const ShareButton = styled.a`
	position: fixed;
	right: 20px;
	bottom: 20px;
	padding: 10px 20px;
	background-color: #007bff;
	color: white;
	text-align: center;
	border-radius: 5px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	transition: background-color 0.3s;

	&:hover {
		background-color: #0056b3;
	}
`;

function RoadMap() {
	const [currentStep, setCurrentStep] = useState(0);

	return (
		<>
			<NavBar currentStep={currentStep} />
			<button onClick={() => setCurrentStep(currentStep - 1)} disabled={currentStep === 0}>
				Previous
			</button>
			<button onClick={() => setCurrentStep(currentStep + 1)} disabled={currentStep === 3}>
				Next
			</button>
			<h1>Road Map Page!</h1>
			<ShareButton>Share</ShareButton>
		</>
	);
}

export default RoadMap;
