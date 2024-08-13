import React from 'react';
import styled from 'styled-components';

const MainSection = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: ${(props) => (props.url ? `url(${props.url})` : '')};
	background-size: cover;
	background-position: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;

function HeroSection({ children, imageUrl }) {
	return <MainSection url={imageUrl}>{children}</MainSection>;
}

export default HeroSection;
