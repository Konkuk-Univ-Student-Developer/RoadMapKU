import { useSetRecoilState } from 'recoil';
import useApi from './useApi';
import { detailFieldState, largeFieldState, middleFieldState, smallFieldState } from '../recoils/atoms';

const useClient = () => {
	const { clientApi } = useApi();
	const setLargeFieldState = useSetRecoilState(largeFieldState);
	const setMiddleFieldState = useSetRecoilState(middleFieldState);
	const setSmallFieldState = useSetRecoilState(smallFieldState);
	const setDetailFieldState = useSetRecoilState(detailFieldState);

	const fetchTest = () => {
		clientApi.get('data/mockdata.json').then((res) => {
			console.log(res.data);
		});
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
				const prefixReq = requestMiddle.largeFieldCode.substring(0, 2);
				const filteredData = res.data.filter((item) => prefixReq == item.fieldCode.substring(0, 2));
				setMiddleFieldState(filteredData);
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
				setSmallFieldState(filteredData);
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
				setDetailFieldState(filteredData);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return { fetchTest, fetchLargeField, fetchMiddleField, fetchSmallField, fetchDetailField };
};

export default useClient;
