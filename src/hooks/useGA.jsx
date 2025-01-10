import ReactGA from 'react-ga4';

const useGA = () => {
	const sendClickShareUrl = () => {
		ReactGA.event({
			category: 'Button',
			action: 'share_url',
			label: '링크로 공유'
		});
	};

	const sendClickShareScreenshot = () => {
		ReactGA.event({
			category: 'Button',
			action: 'share_screenshot',
			label: '스크린샷으로 저장'
		});
	};

	const sendAddMyRoadMap = (cellData) => {
		ReactGA.event({
			category: 'Button',
			action: 'add_my_roadmap',
			label: `${cellData.courseName} 추가`
		});
	};

	const sendRemoveMyRoadMap = (cellData) => {
		ReactGA.event({
			category: 'Button',
			action: 'remove_my_roadmap',
			label: `${cellData.courseName} 삭제`
		});
	};

	const sendSearchField = (fieldData) => {
		ReactGA.event({
			category: 'Button',
			action: 'search_field',
			label: `${fieldData.detailField} 검색`
		});
	};

	const sendSelectField = (fieldData) => {
		ReactGA.event({
			category: 'Button',
			action: 'select_field',
			label: `${fieldData.detailField} 선택`
		});
	};

	const sendSelectDept = (deptData) => {
		ReactGA.event({
			category: 'Button',
			action: 'select_dept',
			label: `${deptData.subjectName} 선택`
		});
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
