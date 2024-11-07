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

export const showFieldInputState = atom({
	key: 'showFieldInputState',
	default: true
});

export const competencyListInSubjectState = atom({
	key: 'competencyListInSubjectState',
	default: {}
});

export const courseByCompetencyInSubjectState = atom({
	key: 'courseByCompetencyInSubjectState',
	default: {}
});

export const courseDetailState = atom({
	key: 'courseDetailState',
	default: []
});

export const competitionRateState = atom({
	key: 'competitionRateState',
	default: []
});

export const subjectsInFieldState = atom({
	key: 'subjectsInFieldState',
	default: []
});

export const totalRoadMapState = atom({
	key: 'totalRoadMapState',
	default: []
});

export const selectedSubjectState = atom({
	key: 'selectedSubjectState',
	default: {
		subjectName: '전체',
		subjectCode: -1
	}
});

export const allFieldDataState = atom({
	key: 'allFieldDataState',
	default: []
});

export const selectedFieldLogState = atom({
	key: 'selectedFieldLogState',
	default: []
});

export const isSmallFieldSelectedState = atom({
	key: 'isSmallFieldSelectedState',
	default: false
});
