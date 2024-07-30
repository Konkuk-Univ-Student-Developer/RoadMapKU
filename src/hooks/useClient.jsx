import useApi from './useApi';

const useClient = () => {
	const { clientApi } = useApi();

	const fetchTest = () => {
		clientApi.get('data/mockdata.json').then((res) => {
			console.log(res.data);
		});
	};

	const fetchLargeField = () => {
		clientApi.get('data/fieldsLarge.json').then((res) => {
			console.log(res.data);
		});
	};

	return { fetchTest, fetchLargeField };
};

export default useClient;
