import { keyframes } from 'styled-components';

export const immergeBounce = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  50% {
    opacity: 1;
    transform: translateY(-20%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

export const dismissBounce = keyframes`
  0% {
    opacity: 1;
    transform: translateY(0%);
  }
  50% {
    opacity: 1;
    transform: translateY(-20%);
  }
  100% {
    opacity: 0;
    transform: translateY(100%);
  }
`;

export const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

export const slideDown = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(100%);
  }
`;

export const immergeFade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const dismissFade = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
