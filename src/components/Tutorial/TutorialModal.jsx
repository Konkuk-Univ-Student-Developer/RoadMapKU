import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import Modal from '../../components/Modal/Modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Color } from '../../style/Color';

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
	width: 100%;
	max-width: 88.89vh;
	height: 50%;
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
	margin-bottom: 1.11vh;
`;

const Image = styled.img`
	margin-top: 3.33vh;
	margin-top: auto !important;
	width: auto !important;
	max-width: 100%;
	height: auto;
`;

const Caption = styled.p`
	font-size: 2.22vh;
	font-weight: bold;
	margin: 0;
	margin-bottom: 3.33vh;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	margin-top: 5.56vh;
	padding: 0;
`;

const StyledButton = styled.button`
	background-color: transparent;
	color: #666;
	border: none;
	border-radius: 0.56vh;
	padding: 1.11vh 2.22vh;
	font-size: 1.56vh;
	cursor: pointer;

	&:hover {
		color: #333;
	}
`;

const Arrow = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	font-size: 4.44vh;
	color: ${Color.GREEN};
	cursor: pointer;
	z-index: 1000;

	&:hover {
		color: #024e2d;
	}
`;
const CustomPrevArrow = ({ className, onClick, currentSlide }) => {
	if (currentSlide === 0) return null;
	return (
		<Arrow className={className} style={{ left: '-7.78vh' }} onClick={onClick}>
			❮
		</Arrow>
	);
};

const CustomNextArrow = ({ className, onClick, currentSlide, slideCount }) => {
	if (currentSlide === slideCount - 1) return null;
	return (
		<Arrow className={className} style={{ right: '-6.11vh' }} onClick={onClick}>
			❯
		</Arrow>
	);
};

function TutorialModal({ onClose, onDismissForAWeek }) {
	const [currentSlide, setCurrentSlide] = useState(0);

	const steps = [
		{
			image: './img/tutorial11.jpeg',
			caption: (
				<>
					<div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
						<img
							src="./img/ku_tutorial.png"
							alt="황소"
							style={{ width: '100px', margin: '5px', marginRight: '10px' }}
						/>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<div style={{ margin: '2px', fontSize: '25px' }}>안녕? 쿠맵은 처음이지?</div>
							<div style={{ margin: '2px', fontSize: '25px' }}>내가 쿠맵에 대해 알려줄게쿠!</div>
						</div>
					</div>

					<p style={{ margin: 0, fontSize: '20px' }}>여기는 직군을 선택하는 칸이야. 너의 희망직군을 선택해봐!</p>
				</>
			)
		},
		{
			image: './img/tutorial22.jpeg',
			caption: (
				<>
					<div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
						<img
							src="./img/ku_tutorial.png"
							alt="황소"
							style={{ width: '100px', margin: '5px', marginRight: '10px' }}
						/>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<div style={{ margin: '2px', fontSize: '25px' }}>각 전공 역량을 선택하면 해당 역량을</div>
							<div style={{ margin: '2px', fontSize: '25px' }}>가진 수업이 초록색으로 표시된다쿠~</div>
						</div>
					</div>

					<p style={{ margin: 0, fontSize: '20px' }}>너에게 필요한 전공 역량을 가진 수업을 선택해봐!</p>
				</>
			)
		},
		{
			image: './img/tutorial33.jpeg',
			caption: (
				<>
					<div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
						<img
							src="./img/ku_tutorial.png"
							alt="황소"
							style={{ width: '100px', margin: '5px', marginRight: '10px' }}
						/>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<div style={{ margin: '2px', fontSize: '25px' }}>내 로드맵에 수업을</div>
							<div style={{ margin: '2px', fontSize: '25px' }}>추가해서 나만의 로드맵을 만들어봐~ </div>
						</div>
					</div>

					<p style={{ margin: 0, fontSize: '20px' }}>
						더 자세한 설명은 상단의 ‘사용법’을 참고해줘! 이제 나만의 로드맵을 만들어볼까?
					</p>
				</>
			)
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
					<StyledButton onClick={onDismissForAWeek}>일주일간 보지 않기 X</StyledButton>
				</ButtonWrapper>
			</ModalContentWrapper>
		</Modal>
	);
}

export default TutorialModal;
