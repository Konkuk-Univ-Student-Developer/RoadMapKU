import pako from 'pako';

const defaultTable = [
	[{ haksuId: '0', courseName: '1 - 1' }],
	[{ haksuId: '0', courseName: '1 - 2' }],
	[{ haksuId: '0', courseName: '2 - 1' }],
	[{ haksuId: '0', courseName: '2 - 2' }],
	[{ haksuId: '0', courseName: '3 - 1' }],
	[{ haksuId: '0', courseName: '3 - 2' }],
	[{ haksuId: '0', courseName: '4 - 1' }],
	[{ haksuId: '0', courseName: '4 - 2' }]
];

// Base64 인코딩 함수
const toBase64 = (uint8Array) => btoa(String.fromCharCode(...uint8Array));

// Base64 디코딩 함수
const fromBase64 = (base64) => Uint8Array.from(atob(base64), (c) => c.charCodeAt(0));

// 데이터를 Base64로 인코딩하는 함수
const encodeData = (data) => {
	const compressed = pako.deflate(data, { to: 'string' });
	const base64Compressed = toBase64(compressed);
	const utf8Encoded = encodeURIComponent(base64Compressed);

	return utf8Encoded;
};

// 데이터를 Base64로 디코딩하는 함수
const decodeData = (data) => {
	const utf8Decoded = decodeURIComponent(data);
	const compressedData = fromBase64(utf8Decoded);
	const decompressed = pako.inflate(compressedData, { to: 'string' });
	const loadedTableData = JSON.parse(decompressed);

	return loadedTableData;
};

// 전공역량 별 교과목 데이터 파싱하는 함수
const parseCourseData = (courseByCompetencyInSubject, selectedMyTableContents) => {
	// haksuIdToCompetencyMap: 하나의 교과목이 가지는 전공역량들을 Map으로 저장
	const haksuIdToCompetencyMap = new Map();

	// courseByCompetencyInSubject 데이터 가공
	const updatedRoadMapTableData = [...defaultTable];
	courseByCompetencyInSubject.forEach((competency) => {
		const { competencyName, competencyCode } = competency;

		competency.courseGetResponseList.forEach((course) => {
			const { openingYear, openingSemester, haksuId, name, credit, openingSubject } = course;
			const semesterIndex = openingSemester === '2학기' ? 1 : 0;
			const openingYear_include9 = openingYear > 4 ? 4 : openingYear;
			const index = (openingYear_include9 - 1) * 2 + semesterIndex;

			// 여러개의 전공역량을 가지는 교과목에 대한 처리
			if (!haksuIdToCompetencyMap.has(haksuId)) {
				haksuIdToCompetencyMap.set(haksuId, [{ competencyName, competencyCode }]);
			} else {
				return; // 중복 학수 ID일 경우 이후 로직 스킵
			}

			// isMyTable 체크
			const isMyTable = selectedMyTableContents.some((row) => row.some((cell) => cell.haksuId === haksuId));

			const cellData = {
				haksuId: haksuId,
				courseName: name,
				courseCredit: credit,
				subjectName: openingSubject,
				competencyCodes: haksuIdToCompetencyMap.get(haksuId),
				isMyTable: isMyTable,
				isClickable: !isMyTable
			};

			updatedRoadMapTableData[index] = [...updatedRoadMapTableData[index], cellData];
			// '1,2학기'에 대한 처리
			if (openingSemester === '1,2학기') {
				updatedRoadMapTableData[index + 1] = [...updatedRoadMapTableData[index + 1], cellData];
			}
		});
	});

	return updatedRoadMapTableData;
};

// 함수들을 export
export { encodeData, decodeData, parseCourseData };
