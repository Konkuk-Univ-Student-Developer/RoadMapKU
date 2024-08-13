import styled from 'styled-components';
import Header from '../components/Header';
import HeroSection from './HeroSection';
import TextContents from '../components/HeroContents/TextContens';
import LinkContents from '../components/HeroContents/LinkContents';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GreetTextContents from '../components/HeroContents/GreetTextContents';

const HomeContainer = styled.div`
	min-width: 100vw;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`;

const MainContainer = styled.div`
	width: 100%;
	height: 50%;
	display: flex;
	flex-direction: row;
	jusify-content: center;
	align-items: center;
`;

function Home() {
	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: false,
		cssEase: 'ease-out'
	};

	return (
		<HomeContainer>
			<Header />
			<Slider {...settings}>
				<HeroSection imageUrl={'./img/HomePicture.png'}>
					<MainContainer>
						<TextContents />
						<LinkContents />
					</MainContainer>
				</HeroSection>

				<HeroSection imageUrl={'./img/HomePicture2.png'}>
					<MainContainer>
						<GreetTextContents />
					</MainContainer>
				</HeroSection>
			</Slider>
		</HomeContainer>
	);
}

export default Home;
