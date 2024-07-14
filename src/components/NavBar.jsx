import styled from 'styled-components';

const steps = ['과 선택', '직군 선택', '타 전공 수업 추가', '완료'];

const NavBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 20px;
	padding: 10px 0;
`;

const StepContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`;

const CircleContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
`;

const Circle = styled.div`
	width: 16px;
	height: 16px;
	border-radius: 50%;
	background: ${(props) => (props.active ? '#000' : '#ccc')};
	display: flex;
	align-items: center;
	justify-content: center;
	color: black;
	font-weight: bold;
	z-index: 1;
`;

const Line = styled.div`
	flex-grow: 1;
	height: 2px;
	background: ${(props) => (props.active ? '#000' : '#ccc')};
`;

const Label = styled.div`
	font-size: 14px;
	color: ${(props) => (props.active ? '#000' : '#ccc')};
`;

function NavBar({ currentStep }) {
	return (
		<NavBarContainer>
			{steps.map((step, index) => (
				<StepContainer key={index}>
					<CircleContainer>
						<Line active={index <= currentStep} />
						<Circle active={index <= currentStep} />
						<Line active={index < currentStep || (index === steps.length - 1 && index === currentStep)} />
					</CircleContainer>
					<Label active={index <= currentStep}>{step}</Label>
				</StepContainer>
			))}
		</NavBarContainer>
	);
}

export default NavBar;
