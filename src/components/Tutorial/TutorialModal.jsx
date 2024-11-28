import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../../components/Modal/Modal';
import { Icon } from '@iconify/react';

const ContentWrapper = styled.div`
	position: relative;
	width: 100%;
	height: auto;
	padding: 5px;
	overflow: auto;
`;

const ImageWrapper = styled.div`
	position: relative;
	text-align: center;
	img {
		width: 600px;
		height: auto;
		object-fit: contain;
		margin: 15px;
	}
`;

const ArrowButton = styled.button`
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background: none;
	border: none;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
	heigt: 100px;

	&:hover {
		svg {
			color: #036b3f;
		}
	}
`;

const IconStyled = styled(Icon)`
	color: gray;
	font-size: 60px;
`;

const LeftArrow = styled(ArrowButton)`
	left: 5%;
`;

const RightArrow = styled(ArrowButton)`
	right: 5%;
`;

const Caption = styled.p`
	font-size: 18px;
	font-weight: bold;
	margin-top: 10px;
`;

const Footer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 20px;
`;

const DotsWrapper = styled.div`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	gap: 5px;
`;

const Dot = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: ${(props) => (props.active ? '#036b3f' : '#ccc')};
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between; /* 왼쪽과 오른쪽으로 버튼 배치 */
	align-items: center;
	margin-top: 20px;
`;

const StyledButton = styled.button`
	background-color: ${(props) => props.bgColor || 'transparent'};
	color: ${(props) => props.color || '#666'};
	border: none;
	border-radius: 5px;
	padding: 10px 20px;
	font-size: 14px;
	cursor: pointer;

	&:hover {
		background-color: ${(props) => props.hoverBgColor || 'transparent'};
		color: ${(props) => props.hoverColor || '#333'};
	}
`;

const MoveToKumapButton = styled(StyledButton)`
	background-color: #036b3f;
	color: white;

	&:hover {
		background-color: #024e2d;
	}
`;

function TutorialModal({ onClose }) {
	const [currentStep, setCurrentStep] = useState(0);
	const navigate = useNavigate();

	const steps = [
		{
			image: './img/tutorial1.png',
			caption: 'KUMAP의 시작페이지는 이렇게 구성되어 있어요!'
		},
		{
			image: './img/tutorial2.png',
			caption: '관심 있는 직군을 선택해 주세요!'
		},
		{
			image: './img/tutorial3.png',
			caption: '나만의 로드맵에 과목을 추가하고 주도적인 대학 생활을 만들어나가요!'
		}
	];

	const handleNext = () => {
		if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
	};

	const handlePrevious = () => {
		if (currentStep > 0) setCurrentStep(currentStep - 1);
	};

	const handleMoveToKumap = () => {
		console.log('KUMAP으로 이동');
		onClose();
		navigate('/road-map');
	};

	return (
		<Modal onClose={onClose} width="60%" height="70%">
			<ContentWrapper>
				<ImageWrapper>
					<Caption>{steps[currentStep].caption}</Caption>
					{currentStep > 0 && (
						<LeftArrow onClick={handlePrevious}>
							<IconStyled icon="ic:round-navigate-before" />
						</LeftArrow>
					)}
					<img src={steps[currentStep].image} alt={`Step ${currentStep + 1}`} />
					{currentStep < steps.length - 1 && (
						<RightArrow onClick={handleNext}>
							<IconStyled icon="ic:round-navigate-next" />
						</RightArrow>
					)}
				</ImageWrapper>
				<Footer>
					<DotsWrapper>
						{steps.map((_, index) => (
							<Dot key={index} active={index === currentStep} />
						))}
					</DotsWrapper>
				</Footer>
				<ButtonWrapper>
					<StyledButton onClick={onClose}>일주일간 보지 않기</StyledButton>
					{currentStep === steps.length - 1 && (
						<MoveToKumapButton onClick={handleMoveToKumap}>KUMAP으로 이동</MoveToKumapButton>
					)}
				</ButtonWrapper>
			</ContentWrapper>
		</Modal>
	);
}

export default TutorialModal;
