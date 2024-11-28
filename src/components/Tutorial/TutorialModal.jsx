import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Slider from 'react-slick';
import Modal from '../../components/Modal/Modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ModalContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	position: relative;
`;

const SliderWrapper = styled.div`
	display: flex !important;
	width: 80%;
	max-width: 800px;
	height: 80%;
	display: flex;
	align-items: center;
	position: relative;

	.slick-slider {
		display: flex !important;
		width: 100%;
		height: 100%;
	}

	.slick-list {
		overflow: hidden;
	}

	.slick-track {
		display: flex;
		align-items: center;
	}
`;

const SlideContainer = styled.div`
	display: flex !important;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%;
	text-align: center;
	margin-bottom: 10px;
`;

const Image = styled.img`
	margin-top: 30px;
	margin-top: auto !important;
	width: auto !important;
	max-width: 100%;
	height: auto;
`;

const Caption = styled.p`
	font-size: 16px;
	font-weight: bold;
	margin: 0;
	margin-bottom: 30px;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	margin-top: 50px;
	padding: 0 0px;
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

const Arrow = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	font-size: 40px;
	color: #036b3f;
	cursor: pointer;
	z-index: 1000;

	&:hover {
		color: #024e2d;
	}
`;

const CustomPrevArrow = ({ className, onClick, currentSlide }) => {
	if (currentSlide === 0) return null; // 첫 번째 슬라이드에서 화살표 숨기기
	return (
		<Arrow className={className} style={{ left: '-70px' }} onClick={onClick}>
			❮
		</Arrow>
	);
};

const CustomNextArrow = ({ className, onClick, currentSlide, slideCount }) => {
	if (currentSlide === slideCount - 1) return null; // 마지막 슬라이드에서 화살표 숨기기
	return (
		<Arrow className={className} style={{ right: '-55px' }} onClick={onClick}>
			❯
		</Arrow>
	);
};

function TutorialModal({ onClose }) {
	const navigate = useNavigate();
	const [currentSlide, setCurrentSlide] = useState(0);

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

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
		nextArrow: <CustomNextArrow currentSlide={currentSlide} slideCount={steps.length} />,
		afterChange: (current) => setCurrentSlide(current)
	};

	const handleMoveToKumap = () => {
		onClose();
		navigate('/road-map');
	};

	return (
		<Modal onClose={onClose} width="80%" height="90%">
			<ModalContentWrapper>
				<SliderWrapper>
					<Slider {...settings}>
						{steps.map((step, index) => (
							<SlideContainer key={index}>
								<Caption>{step.caption}</Caption>
								<Image src={step.image} alt={`Step ${index + 1}`} />
							</SlideContainer>
						))}
					</Slider>
				</SliderWrapper>
				<ButtonWrapper>
					<StyledButton onClick={onClose}>일주일간 보지 않기 X</StyledButton>
					{currentSlide === steps.length - 1 && (
						<MoveToKumapButton onClick={handleMoveToKumap}>KUMAP으로 이동</MoveToKumapButton>
					)}
				</ButtonWrapper>
			</ModalContentWrapper>
		</Modal>
	);
}

export default TutorialModal;
