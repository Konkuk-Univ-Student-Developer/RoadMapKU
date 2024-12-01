import axios from 'axios';

const useApi = () => {
	const serverApi = axios.create({
		baseURL: 'https://kumap.konkuk.ac.kr'
	});

	return { serverApi };
};

export default useApi;
