import useApi from './useApi';

const useClient = () => {
	const { clientApi } = useApi();

	const fetchTest = () => {
		clientApi.get('data/mockdata.json').then((res) => {
			console.log(res.data);
		});
	};

	const fetchLargeField = () => {
		clientApi
			.get('data/fieldsLarge.json')
			.then((res) => {
				console.log(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const fetchMiddleField = (requestMiddle) => {
		clientApi
			.get('data/fieldsMiddle.json', requestMiddle)
			.then((res) => {
				const prefixReq = requestMiddle.largeFieldCode.substring(0, 2);
				const filteredData = res.data.filter((item) => prefixReq == item.fieldCode.substring(0, 2));
				console.log(filteredData);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetchSmallField = (requestSmall) => {
		clientApi
			.get('data/fieldsSmall.json', requestSmall)
			.then((res) => {
				const prefixReq = requestSmall.middleFieldCode.substring(0, 4);
				const filteredData = res.data.filter((item) => prefixReq == item.fieldCode.substring(0, 4));
				console.log(filteredData);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const fetchDetailField = (requestDetail) => {
		clientApi
			.get('data/fieldsDetail.json', requestDetail)
			.then((res) => {
				const prefixReq = requestDetail.smallFieldCode.substring(0, 6);
				const filteredData = res.data.filter((item) => prefixReq == item.fieldCode.substring(0, 6));
				console.log(filteredData);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return { fetchTest, fetchLargeField, fetchMiddleField, fetchSmallField, fetchDetailField };
};

export default useClient;
