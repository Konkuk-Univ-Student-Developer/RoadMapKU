import axios from 'axios';

const useApi = () => {
	const clientApi = axios.create({
		baseURL: process.env.REACT_APP_API == 'development' ? 'http://localhost:3000/' : 'http://203.252.168.41:8080/'
	});

	return { clientApi };
};

export default useApi;
