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
	selectedFieldState,
	isSmallFieldSelectedState
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
	const setIsSmallFieldSelectedState = useSetRecoilState(isSmallFieldSelectedState);

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
		try {
			resetSelectedSubjectState();

			const smallFieldResponse = await serverApi.post('/api/v2/field-search/small', middleField);
			setSmallFieldState(smallFieldResponse.data);
			setIsSmallFieldSelectedState(true);

			const detailFieldResponse = await serverApi.post('/api/v2/field-search/detail', smallField);
			setDetailFieldState(detailFieldResponse.data);
			setSelectedFieldtState({
				middleField,
				smallField,
				detailField
			});

			const [subjectsResponse] = await Promise.all([
				serverApi.get(`/api/v1/fields/${detailField.detailFieldCode}/subjects`),
				fetchCoursesInFields(detailField.detailFieldCode)
			]);
			setSubjectsInFieldState(subjectsResponse.data);
		} catch (error) {
			console.error('Error fetching log fields:', error);
		}
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
