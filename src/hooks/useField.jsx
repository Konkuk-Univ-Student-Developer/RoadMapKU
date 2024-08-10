import { useSetRecoilState } from 'recoil';
import {
	detailFieldState,
	largeFieldState,
	middleFieldState,
	smallFieldState,
	subjectesInField
} from '../recoils/atoms';
import useApi from './useApi';

const useField = () => {
	const { serverApi } = useApi();
	const setLargeFieldState = useSetRecoilState(largeFieldState);
	const setMiddleFieldState = useSetRecoilState(middleFieldState);
	const setSmallFieldState = useSetRecoilState(smallFieldState);
	const setDetailFieldState = useSetRecoilState(detailFieldState);
	const setSubjectesInFieldState = useSetRecoilState(subjectesInField);

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
		serverApi
			.post('/api/v1/fields/middle', requestMiddle)
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
		serverApi
			.post('/api/v1/fields/small', requestSmall)
			.then((res) => {
				setSmallFieldState(res.data);
				setDetailFieldState([]);
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
		serverApi
			.get(`/api/v1/courses/${subjectCode}/${fieldCode}`)
			.then((res) => {
				console.log(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetchCoursesInFields = (fieldCode) => {
		serverApi
			.get(`/api/v1/courses/${fieldCode}/field`)
			.then((res) => {
				console.log(res.data);
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
		fetchSubjectsInField,
		fetcthCoursesInFieldsAndSubjects,
		fetchCoursesInFields
	};
};

export default useField;
