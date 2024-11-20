import { useResetRecoilState, useSetRecoilState } from 'recoil';
import {
	detailFieldState,
	middleFieldState,
	smallFieldState,
	subjectsInFieldState,
	totalRoadMapState,
	courseByCompetencyInSubjectState,
	courseDetailState,
	competitionRateState,
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
	const setCompetitionRateState = useSetRecoilState(competitionRateState);
	const setAllFieldState = useSetRecoilState(allFieldDataState);
	const resetSubjectsInFieldState = useResetRecoilState(subjectsInFieldState);
	const resetSelectedSubjectState = useResetRecoilState(selectedSubjectState);
	const setSelectedFieldState = useSetRecoilState(selectedFieldState);

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
				resetSelectedSubjectState();
				setDetailFieldState(res.data);
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

	const fetchCompetitionRate = (haksuId) => {
		serverApi
			.get(`/api/v1/competition-rate/${haksuId}`)
			.then((res) => {
				setCompetitionRateState(res.data);
			})
			.catch((error) => {
				console.error('Error fetching competition rate:', error);
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

			const detailFieldResponse = await serverApi.post('/api/v2/field-search/detail', smallField);
			setDetailFieldState(detailFieldResponse.data);
			setSelectedFieldState({
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
		fetchCompetitionRate,
		fetchAllFields,
		fetchLogFields
	};
};

export default useField;
