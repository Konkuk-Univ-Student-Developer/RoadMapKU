import { atom } from 'recoil';

export const largeFieldState = atom({
	key: 'largeFieldState',
	default: []
});

export const middleFieldState = atom({
	key: 'middleFieldState',
	default: []
});

export const smallFieldState = atom({
	key: 'smallFieldState',
	default: []
});

export const detailFieldState = atom({
	key: 'detailFieldState',
	default: []
});

export const selectedFieldState = atom({
	key: 'selectedFieldState',
	default: {}
});