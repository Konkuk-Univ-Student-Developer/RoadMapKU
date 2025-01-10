import ReactGA from 'react-ga4';

const useGA = () => {
	const sendClickShareUrl = () => {
		const params = { category: 'Button', label: '링크로 공유' };
		ReactGA.event('share_url', params);
	};

	const sendClickShareScreenshot = () => {
		const params = { category: 'Button', label: '스크린샷으로 저장' };
		ReactGA.event('share_screenshot', params);
	};

	const sendAddMyRoadMap = (cellData) => {
		const params = { category: 'Button', label: `${cellData.courseName} 추가`, ...cellData };
		ReactGA.event('add_my_roadmap', params);
	};

	const sendRemoveMyRoadMap = (cellData) => {
		const params = { category: 'Button', label: `${cellData.courseName} 삭제`, ...cellData };
		ReactGA.event('remove_my_roadmap', params);
	};

	const sendSearchField = (fieldData) => {
		const params = { category: 'Button', label: `${fieldData.detailField} 검색`, ...fieldData };
		ReactGA.event('search_field', params);
	};

	const sendSelectField = (fieldData) => {
		const params = { category: 'Button', label: `${fieldData.detailField} 선택`, ...fieldData };
		ReactGA.event('select_field', params);
	};

	const sendSelectDept = (deptData) => {
		const params = { category: 'Button', label: `${deptData.subjectName} 선택`, ...deptData };
		ReactGA.event('select_dept', params);
	};

	return {
		sendClickShareUrl,
		sendClickShareScreenshot,
		sendAddMyRoadMap,
		sendRemoveMyRoadMap,
		sendSearchField,
		sendSelectField,
		sendSelectDept
	};
};

export default useGA;
