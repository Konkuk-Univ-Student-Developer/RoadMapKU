import styled from 'styled-components';
import HeroSection from './HeroSection';
import TextContents from '../components/HeroContents/TextContents';
import LinkContents from '../components/HeroContents/LinkContents';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GreetTextContents from '../components/HeroContents/GreetTextContents';
import MainContainer from '../components/MainContainer';

const SubContainer = styled.div`
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

function Home() {
	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		cssEase: 'ease-out',
		useTransform: false
	};

	return (
		<MainContainer>
			<Slider {...settings}>
				<HeroSection imageUrl={'./img/HomePicture.png'}>
					<SubContainer>
						<TextContents />
						<LinkContents />
					</SubContainer>
				</HeroSection>

				<HeroSection imageUrl={'./img/HomePicture2.png'}>
					<SubContainer>
						<GreetTextContents />
					</SubContainer>
				</HeroSection>
			</Slider>
		</MainContainer>
	);
}

export default Home;
