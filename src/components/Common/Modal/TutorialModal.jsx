import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { Modal } from '@Modal';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { KUSearch1, TutorialImage1, TutorialImage2, TutorialImage3 } from '@img';
import { Color } from '@styles';

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
	display: flex;
	width: 100%;
	max-width: 88.89vh;
	height: 50%;
	align-items: center;
	justify-content: center;

	.slick-slider {
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

// 이 부분은 어쩔 수 없이 !important 를 써야만 함.
const SlideContainer = styled.div`
	display: flex !important;
	flex-direction: column !important;
	align-items: center !important;
	height: 100%;
	text-align: center;
`;

const Image = styled.img`
	margin-top: 1.1vh !important;
	margin-bottom: 1.1vh;
	width: auto !important;
	max-width: 95%;
	border-radius: 5px;
	height: auto;
	box-shadow: 2px 4px 4px rgba(0, 0, 0, 0.2);
`;

const CaptionContents = styled.div`
	font-size: 2.22vh;
	font-weight: bold;
	margin-bottom: 1.5vh !important;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: start;
	width: 100%;
	margin-top: 5.56vh;
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

const FlexContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
`;

// TODO: 왜 width, height 속성이 적용 안되는지 알아내기. To not use !important
const KuImage = styled.img.attrs({ src: KUSearch1, alt: '쿠 이미지' })`
	width: 70px !important;
	height: 60px !important;
	margin-right: 10px;
	margin-top: 0px !important;
`;

const TextContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

const Text = styled.div`
	font-size: 25px;
	margin: 2px;
`;

const CustomPrevArrow = ({ onClick, currentSlide }) => {
	if (currentSlide === 0) return null;
	return (
		<Arrow style={{ left: '-7.78vh' }} onClick={onClick}>
			❮
		</Arrow>
	);
};

const CustomNextArrow = ({ onClick, currentSlide, slideCount }) => {
	if (currentSlide === slideCount - 1) return null;
	return (
		<Arrow style={{ right: '-6.11vh' }} onClick={onClick}>
			❯
		</Arrow>
	);
};

const steps = [
	{
		image: TutorialImage1,
		captionContents: (
			<>
				<FlexContainer>
					<KuImage />
					<TextContainer>
						<Text>안녕? 쿠맵은 처음이지?</Text>
						<Text>내가 쿠맵에 대해 알려줄게쿠!</Text>
					</TextContainer>
				</FlexContainer>
				<p>여기는 직군을 선택하는 칸이야. 너의 희망직군을 선택해봐!</p>
			</>
		)
	},
	{
		image: TutorialImage2,
		captionContents: (
			<>
				<FlexContainer>
					<KuImage />
					<TextContainer>
						<Text>각 전공 역량을 선택하면 해당 역량을</Text>
						<Text>가진 수업이 초록색으로 표시된다쿠~</Text>
					</TextContainer>
				</FlexContainer>
				<p>너에게 필요한 전공 역량을 가진 수업을 선택해봐!</p>
			</>
		)
	},
	{
		image: TutorialImage3,
		captionContents: (
			<>
				<FlexContainer>
					<KuImage />
					<TextContainer>
						<Text>내 로드맵에 수업을 추가해서</Text>
						<Text>나만의 로드맵을 만들어봐~</Text>
					</TextContainer>
				</FlexContainer>
				<p>더 자세한 설명은 상단의 ‘사용법’을 참고해줘! 이제 나만의 로드맵을 만들어볼까?</p>
			</>
		)
	}
];

function TutorialModal({ onClose, onDismissForAWeek }) {
	const [currentSlide, setCurrentSlide] = useState(0);

	const settings = {
		dots: true,
		infinite: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: <CustomPrevArrow currentSlide={currentSlide} />,
		nextArrow: <CustomNextArrow currentSlide={currentSlide} slideCount={steps.length} />,
		afterChange: setCurrentSlide
	};

	return (
		<Modal onClose={onClose} width="80%" height="90%">
			<ModalContentWrapper>
				<SliderWrapper>
					<Slider {...settings}>
						{steps.map(({ image, captionContents }, index) => (
							<SlideContainer key={index}>
								<CaptionContents>{captionContents}</CaptionContents>
								<Image src={image} alt={`Step ${index + 1}`} />
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
