import React from 'react';
import styled from 'styled-components';

const MainSection = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: url('./img/HomePicture.png');
	background-size: cover;
	background-position: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

function HeroSection({ children }) {
	return <MainSection>{children}</MainSection>;
}

export default HeroSection;
