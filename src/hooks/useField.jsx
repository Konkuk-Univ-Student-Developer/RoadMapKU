import { useSetRecoilState } from 'recoil';
import {
	detailFieldState,
	largeFieldState,
	middleFieldState,
	smallFieldState,
	subjectsInFieldState,
	totalRoadMapState,
	courseByCompetencyInSubjectState,
	courseDetailState,
	allFieldDataState,
	dummyMiddleFieldState
} from '../recoils/atoms';
import useApi from './useApi';

const useField = () => {
	const { serverApi } = useApi();
	const setLargeFieldState = useSetRecoilState(largeFieldState);
	const setMiddleFieldState = useSetRecoilState(middleFieldState);
	const setSmallFieldState = useSetRecoilState(smallFieldState);
	const setDetailFieldState = useSetRecoilState(detailFieldState);
	const setSubjectsInFieldState = useSetRecoilState(subjectsInFieldState);
	const setTotalRoadMapState = useSetRecoilState(totalRoadMapState);
	const setCourseByCompetencyInSubjectState = useSetRecoilState(courseByCompetencyInSubjectState);
	const setCourseDetailState = useSetRecoilState(courseDetailState);
	const setAllFieldState = useSetRecoilState(allFieldDataState);
	const setDummyMiddleFieldState = useSetRecoilState(dummyMiddleFieldState);

	const resetFields = (selectedField) => {
		if (selectedField === 'large' || selectedField === 'all') {
			setMiddleFieldState([]);
			setSmallFieldState([]);
			setDetailFieldState([]);
		}
		if (selectedField === 'middle') {
			setSmallFieldState([]);
			setDetailFieldState([]);
		}
		if (selectedField === 'small') {
			setDetailFieldState([]);
		}
		if (selectedField === 'all') {
			setLargeFieldState([]);
		}
	};

	const fetchLargeField = () => {
		serverApi
			.get('/api/v1/fields/large')
			.then((res) => {
				setLargeFieldState(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const fetchMiddleField = (requestMiddle) => {
		console.log(requestMiddle);
		serverApi
			.post('/api/v1/fields/middle', requestMiddle)
			.then((res) => {
				setMiddleFieldState(res.data);
				resetFields('middle');
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetchSmallField = (requestSmall) => {
		serverApi
			.post('/api/v1/fields/small', requestSmall)
			.then((res) => {
				setSmallFieldState(res.data);
				resetFields('small');
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetchDetailField = (requestDetail) => {
		serverApi
			.post('/api/v1/fields/detail', requestDetail)
			.then((res) => {
				setDetailFieldState(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetchSubjectsInField = (fieldCode) => {
		serverApi
			.get(`/api/v1/fields/${fieldCode}/subjects`)
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
			.get('/api/v1/fields/all')
			.then((res) => setAllFieldState(res.data))
			.catch((error) => {
				console.error('Error fetching course details:', error);
			});
	};

	const fetchMiddleFieldTest = () => {
		fetch('/fieldsMiddle.json')
			.then((res) => res.json())
			.then((data) => {
				console.log('Data:', data);
				setDummyMiddleFieldState(data);
			})
			.catch((error) => {
				console.error('Error fetching the data:', error);
			});
	};

	return {
		fetchLargeField,
		fetchMiddleField,
		fetchSmallField,
		fetchDetailField,
		fetchSubjectsInField,
		fetchCoursesInFieldsAndSubjects,
		fetchCoursesInFields,
		fetchCoursesInSubject,
		fetchCourseDetail,
		resetFields,
		fetchAllFields,
		fetchMiddleFieldTest
	};
};

export default useField;
