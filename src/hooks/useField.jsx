import { useResetRecoilState, useSetRecoilState } from 'recoil';
import {
	detailFieldState,
	middleFieldState,
	smallFieldState,
	subjectsInFieldState,
	totalRoadMapState,
	courseByCompetencyInSubjectState,
	courseDetailState,
	allFieldDataState,
	selectedSubjectState,
	selectedFieldState
} from '../recoils/atoms';
import useApi from './useApi';

const useField = () => {
	const { serverApi } = useApi();
	const setMiddleFieldState = useSetRecoilState(middleFieldState);
	const setSmallFieldState = useSetRecoilState(smallFieldState);
	const setDetailFieldState = useSetRecoilState(detailFieldState);
	const setSubjectsInFieldState = useSetRecoilState(subjectsInFieldState);
	const setTotalRoadMapState = useSetRecoilState(totalRoadMapState);
	const setCourseByCompetencyInSubjectState = useSetRecoilState(courseByCompetencyInSubjectState);
	const setCourseDetailState = useSetRecoilState(courseDetailState);
	const setAllFieldState = useSetRecoilState(allFieldDataState);
	const resetSubjectsInFieldState = useResetRecoilState(subjectsInFieldState);
	const resetSelectedSubjectState = useResetRecoilState(selectedSubjectState);
	const setSelectedFieldtState = useSetRecoilState(selectedFieldState);

	const fetchMiddleField = () => {
		serverApi
			.get('/api/v2/field-search/middle')
			.then((res) => {
				setMiddleFieldState(res.data);
				resetSubjectsInFieldState();
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetchSmallField = (requestSmall) => {
		serverApi
			.post('/api/v2/field-search/small', requestSmall)
			.then((res) => {
				setSmallFieldState(res.data);
				resetSubjectsInFieldState();
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetchDetailField = (requestDetail) => {
		serverApi
			.post('/api/v2/field-search/detail', requestDetail)
			.then((res) => {
				setDetailFieldState(res.data);
				resetSelectedSubjectState();
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetchSubjectsInField = (detailFieldCode) => {
		serverApi
			.get(`/api/v1/fields/${detailFieldCode}/subjects`)
			.then((res) => {
				setSubjectsInFieldState(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetchCoursesInFieldsAndSubjects = (fieldCode, subjectCode) => {
		serverApi
			.get(`/api/v1/courses/${subjectCode}/${fieldCode}`)
			.then((res) => {
				setCourseByCompetencyInSubjectState(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetchCoursesInFields = (fieldCode) => {
		serverApi
			.get(`/api/v1/courses/${fieldCode}/field`)
			.then((res) => {
				setCourseByCompetencyInSubjectState(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetchCoursesInSubject = (subjectCode) => {
		serverApi
			.get(`/api/v1/courses/${subjectCode}/subject`)
			.then((res) => {
				setTotalRoadMapState(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetchCourseDetail = (haksuId) => {
		serverApi
			.get(`/api/v1/courses/${haksuId}/details`)
			.then((res) => {
				setCourseDetailState(res.data);
			})
			.catch((error) => {
				console.error('Error fetching course details:', error);
			});
	};

	const fetchAllFields = () => {
		serverApi
			.get('/api/v2/field-search/all')
			.then((res) => setAllFieldState(res.data))
			.catch((error) => {
				console.error('Error fetching course details:', error);
			});
	};

	const fetchLogFields = async ({ middleField, smallField, detailField }) => {
		setSelectedFieldtState({ middleField });

		Promise.all([fetchSubjectsInField(detailField.detailFieldCode), fetchCoursesInFields(detailField.detailFieldCode)]);

		// TODO 세분류 선택시 해당 직군에 대한 학과 및 전체 학과 데이터 가져오는거 개선 필요
		await fetchSmallField(middleField);
		setSelectedFieldtState((prevState) => ({
			...prevState,
			smallField
		}));

		await fetchDetailField(smallField);
		setSelectedFieldtState((prevState) => ({
			...prevState,
			detailField
		}));
	};

	return {
		fetchMiddleField,
		fetchSmallField,
		fetchDetailField,
		fetchSubjectsInField,
		fetchCoursesInFieldsAndSubjects,
		fetchCoursesInFields,
		fetchCoursesInSubject,
		fetchCourseDetail,
		fetchAllFields,
		fetchLogFields
	};
};

export default useField;
