import { useSetRecoilState } from 'recoil';
import useApi from './useApi';
import {
	detailFieldState,
	largeFieldState,
	middleFieldState,
	smallFieldState,
	competencyListInSubjectState,
	courseByCompetencyInSubjectState,
	couseDetailState
} from '../recoils/atoms';

const useClient = () => {
	const { clientApi } = useApi();
	const setLargeFieldState = useSetRecoilState(largeFieldState);
	const setMiddleFieldState = useSetRecoilState(middleFieldState);
	const setSmallFieldState = useSetRecoilState(smallFieldState);
	const setDetailFieldState = useSetRecoilState(detailFieldState);
	const setCompetencyListInSubjectState = useSetRecoilState(competencyListInSubjectState);
	const setCourseByCompetencyInSubjectState = useSetRecoilState(courseByCompetencyInSubjectState);
	const setCourseDetailState = useSetRecoilState(couseDetailState);

	const getFilteredData = (fieldCode, responseData, offset) => {
		const prefixReq = fieldCode.substring(0, offset);
		const filteredData = responseData.filter((item) => prefixReq == item.fieldCode.substring(0, offset));

		return filteredData;
	};

	const fetchLargeField = () => {
		clientApi
			.get('data/fieldsLarge.json')
			.then((res) => {
				setLargeFieldState(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const fetchMiddleField = (requestMiddle) => {
		clientApi
			.get('data/fieldsMiddle.json', requestMiddle)
			.then((res) => {
				const filteredData = getFilteredData(requestMiddle.largeFieldCode, res.data, 2);
				setMiddleFieldState(filteredData);
				setSmallFieldState([]);
				setDetailFieldState([]);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetchSmallField = (requestSmall) => {
		clientApi
			.get('data/fieldsSmall.json', requestSmall)
			.then((res) => {
				const filteredData = getFilteredData(requestSmall.middleFieldCode, res.data, 4);
				setSmallFieldState(filteredData);
				setDetailFieldState([]);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetchDetailField = (requestDetail) => {
		clientApi
			.get('data/fieldsDetail.json', requestDetail)
			.then((res) => {
				const filteredData = getFilteredData(requestDetail.smallFieldCode, res.data, 6);
				setDetailFieldState(filteredData);
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
		fetchCourseDetail
	};
};

export default useClient;
