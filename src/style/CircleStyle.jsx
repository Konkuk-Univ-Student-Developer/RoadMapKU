import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2rem);
  }
  100% {
    transform: translateY(0);
  }
`;

const Circle = styled.div`
	position: absolute;
	top: ${(props) => props.$top || 'auto'};
	left: ${(props) => props.$left || 'auto'};
	width: ${(props) => props.$size || '4rem'};
	height: ${(props) => props.$size || '4rem'};
	background-color: ${(props) => props.color || '#3498db'};
	border-radius: 50%;
	animation: ${bounceAnimation} ${(props) => props.$time || '2'}s infinite ease-in-out;
`;

const CircleStyle = ({ color, size, top, left, time }) => {
	return <Circle color={color} $size={size} $top={top} $left={left} $time={time} />;
};

export default CircleStyle;
