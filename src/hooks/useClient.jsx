import { useSetRecoilState } from 'recoil';
import useApi from './useApi';
import {
	detailFieldState,
	largeFieldState,
	middleFieldState,
	smallFieldState,
	competencyListInSubjectState,
	courseByCompetencyInSubjectState,
	courseDetailState,
	subjectesInField
} from '../recoils/atoms';
import axios from 'axios';

const useClient = () => {
	const { clientApi } = useApi();
	const setLargeFieldState = useSetRecoilState(largeFieldState);
	const setMiddleFieldState = useSetRecoilState(middleFieldState);
	const setSmallFieldState = useSetRecoilState(smallFieldState);
	const setDetailFieldState = useSetRecoilState(detailFieldState);
	const setSubjectesInFieldState = useSetRecoilState(subjectesInField);
	const setCompetencyListInSubjectState = useSetRecoilState(competencyListInSubjectState);
	const setCourseByCompetencyInSubjectState = useSetRecoilState(courseByCompetencyInSubjectState);
	const setCourseDetailState = useSetRecoilState(courseDetailState);

	const fetchLargeField = () => {
		axios
			.get('http://203.252.168.41:8080/api/v1/fields/large')
			.then((res) => {
				setLargeFieldState(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const fetchMiddleField = (requestMiddle) => {
		axios
			.post('http://203.252.168.41:8080/api/v1/fields/middle', requestMiddle)
			.then((res) => {
				setMiddleFieldState(res.data);
				setSmallFieldState([]);
				setDetailFieldState([]);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetchSmallField = (requestSmall) => {
		axios
			.post('http://203.252.168.41:8080/api/v1/fields/small', requestSmall)
			.then((res) => {
				setSmallFieldState(res.data);
				setDetailFieldState([]);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetchDetailField = (requestDetail) => {
		axios
			.post('http://203.252.168.41:8080/api/v1/fields/detail', requestDetail)
			.then((res) => {
				setDetailFieldState(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetchSubjectsInField = (fieldCode) => {
		axios
			.get(`http://203.252.168.41:8080/api/v1/fields/${fieldCode}/subjects`)
			.then((res) => {
				setSubjectesInFieldState(res.data);
				setDetailFieldState([]);
				setMiddleFieldState([]);
				setSmallFieldState([]);
				setDetailFieldState([]);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetcthCoursesInFieldsAndSubjects = (fieldCode, subjectCode) => {
		axios
			.get(`http://203.252.168.41:8080/api/v1/courses/${subjectCode}/${fieldCode}`)
			.then((res) => {
				console.log(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetchCoursesInFields = (fieldCode) => {
		axios
			.get(`http://203.252.168.41:8080/api/v1/courses/${fieldCode}/field`)
			.then((res) => {
				console.log(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetchCompetencyListInSubject = () => {
		clientApi
			.get('data/competencyListInSubjectData.json')
			.then((res) => {
				setCompetencyListInSubjectState(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const fetchCourseByCompetencyInSubject = () => {
		clientApi
			.get('data/courseByCompetencyInSubjectData.json')
			.then((res) => {
				setCourseByCompetencyInSubjectState(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const fetchCourseDetail = () => {
		clientApi
			.get('data/courseDetail.json')
			.then((res) => {
				setCourseDetailState(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return {
		fetchLargeField,
		fetchMiddleField,
		fetchSmallField,
		fetchDetailField,
		fetchCompetencyListInSubject,
		fetchCourseByCompetencyInSubject,
		fetchCourseDetail,
		fetchSubjectsInField,
		fetcthCoursesInFieldsAndSubjects,
		fetchCoursesInFields
	};
};

export default useClient;
