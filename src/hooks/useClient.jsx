import useApi from './useApi';

const useClient = () => {
	const { clientApi } = useApi();

	const fetchTest = () => {
		clientApi.get('data/mockdata.json').then((res) => {
			console.log(res.data);
		});
	};

	return { fetchTest };
};

export default useClient;
