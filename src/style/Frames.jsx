import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
	from {
		opacity: 0;
	}
		
	to {
		opacity: 1;
	}
`;

export const fadeInRoad = keyframes`
	from {
		transform: translateX(-35rem) translateY(-18rem);
		opacity: 0;
	}
		
	to {
		transform: translateX(-25rem) translateY(-18rem);
		opacity: 1;
	}
`;

export const tremble = keyframes`
	0% {
		transform: translateX(0);
  	}
  	30% {
    	transform: translateX(-0.1rem);
  	}
	70% {
    	transform: translateX(0.1rem);
  	}
  	100% {
    	transform: translateX(0);
  	}
`;

export const trembleBounce = keyframes`
  0% {
    transform: translateX(0) translateY(0) rotate(0deg);
  }
  30% {
    transform: translateX(-0.1rem) rotate(-2deg);
  }
  50% {
    transform: translateX(0) translateY(-0.6rem) rotate(0deg);
  }
  70% {
    transform: translateX(0.1rem) rotate(2deg);
  }
  100% {
    transform: translateX(0) translateY(0) rotate(0deg);
  }
`;

export const trembleRotate = keyframes`
  0% {
    transform: translateX(0) rotate(0deg);
  }
  30% {
    transform: translateX(-0.1rem) rotate(-2deg);
  }
  50% {
    transform: translateX(0) rotate(0deg);
  }
  70% {
    transform: translateX(0.1rem) rotate(2deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
`;
