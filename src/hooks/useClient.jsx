import { useSetRecoilState } from 'recoil';
import useApi from './useApi';
import { competencyListInSubjectState, courseByCompetencyInSubjectState, courseDetailState } from '../recoils/atoms';

const useClient = () => {
	const { serverApi } = useApi();
	const setCompetencyListInSubjectState = useSetRecoilState(competencyListInSubjectState);
	const setCourseByCompetencyInSubjectState = useSetRecoilState(courseByCompetencyInSubjectState);
	const setCourseDetailState = useSetRecoilState(courseDetailState);

	const fetchCompetencyListInSubject = () => {
		serverApi
			.get('data/competencyListInSubjectData.json')
			.then((res) => {
				setCompetencyListInSubjectState(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const fetchCourseByCompetencyInSubject = () => {
		serverApi
			.get('data/courseByCompetencyInSubjectData.json')
			.then((res) => {
				setCourseByCompetencyInSubjectState(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const fetchCourseDetail = () => {
		serverApi
			.get('data/courseDetail.json')
			.then((res) => {
				setCourseDetailState(res.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return {
		fetchCompetencyListInSubject,
		fetchCourseByCompetencyInSubject,
		fetchCourseDetail
	};
};

export default useClient;
