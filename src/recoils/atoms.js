import { parseCourseData } from '@components/Common/Utils';
import { atom, selector } from 'recoil';

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
	default: []
});

export const competencyListSelector = selector({
	key: 'competencyListSelector',
	get: ({ get }) => {
		const courseByCompetencyInSubject = get(courseByCompetencyInSubjectState);

		return courseByCompetencyInSubject.map((competency) => ({
			competencyName: competency.competencyName,
			competencyCode: competency.competencyCode
		}));
	}
});

export const courseTableDataSelector = selector({
	key: 'courseTableDataSelector',
	get: ({ get }) => {
		const courseByCompetencyInSubject = get(courseByCompetencyInSubjectState);
		const selectedMyTableContents = get(selectedMyTableContentsState);

		return parseCourseData(courseByCompetencyInSubject, selectedMyTableContents, 1);
	}
});

export const myCompetencyListSelector = selector({
	key: 'myCompetencyListSelector',
	get: ({ get }) => {
		const selectedMyTableContents = get(selectedMyTableContentsState);

		const competencyArray = [];
		selectedMyTableContents.forEach((row) => {
			row.forEach((cellData) => {
				if (Array.isArray(cellData.competencyCodes)) {
					competencyArray.push(...cellData.competencyCodes);
				}
			});
		});

		const uniqueCompetencyArray = Array.from(new Set(competencyArray));

		return uniqueCompetencyArray;
	}
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

export const selectedMyTableContentsState = atom({
	key: 'selectedMyTableContentsState',
	default: [[], [], [], [], [], [], [], []]
});

export const isShowDepartAndLogState = atom({
	key: 'isShowDepartAndLogState',
	default: false
});

export const selectedCompetencyState = atom({
	key: 'selectedCompetencyState',
	default: 'default'
});

export const selectedFieldLogSelector = selector({
	key: 'selectedFieldLogSelector',
	get: ({ get }) => get(selectedFieldLogState),
	set: ({ get, set }, updatedFieldCodeList) => {
		const prevLog = get(selectedFieldLogState);
		const isDuplicate = prevLog.some(
			(item) => item.detailField.detailFieldCode === updatedFieldCodeList.detailField.detailFieldCode
		);

		if (isDuplicate) return;

		const newLog = [...prevLog, updatedFieldCodeList];
		if (newLog.length > 5) {
			newLog.shift();
		}
		set(selectedFieldLogState, newLog);
	}
});
