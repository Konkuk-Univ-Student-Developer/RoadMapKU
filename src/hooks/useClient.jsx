import useApi from './useApi';

const useClient = () => {
	const { clientApi } = useApi();

	const fetchTest = () => {
		clientApi.get('data/mockdata.json').then((res) => {
			console.log(res.data);
		});
	};

	const fetchCourseByCompetencyInSubjectData = () => {
		clientApi.get('data/courseByCompetencyInSubjectData.json').then((res) => {
			console.log(res.data);
		});
	};

	return { fetchTest, fetchCourseByCompetencyInSubjectData };
};

export default useClient;
