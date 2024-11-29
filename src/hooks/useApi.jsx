import axios from 'axios';

const useApi = () => {
	const serverApi = axios.create({
		baseURL: 'http://203.252.168.41:8080/'
	});

	return { serverApi };
};

export default useApi;
