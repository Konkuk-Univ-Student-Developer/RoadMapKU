import ReactGA from 'react-ga4';

const useGA = () => {
	const sendClickShareUrl = (selectedMyTableContents) => {
		ReactGA.event({
			category: 'Button',
			action: 'share_url',
			label: '링크로 공유',
			...selectedMyTableContents
		});
	};

	const sendClickShareScreenshot = (selectedMyTableContents) => {
		ReactGA.event({
			category: 'Button',
			action: 'share_screenshot',
			label: '스크린샷으로 저장',
			...selectedMyTableContents
		});
	};

	const sendAddMyRoadMap = (cellData) => {
		ReactGA.event({
			category: 'Button',
			action: 'add_my_roadmap',
			label: `${cellData.courseName} 추가`,
			...cellData
		});
	};

	const sendRemoveMyRoadMap = (cellData) => {
		ReactGA.event({
			category: 'Button',
			action: 'remove_my_roadmap',
			label: `${cellData.courseName} 삭제`,
			...cellData
		});
	};

	const sendSearchField = (fieldData) => {
		ReactGA.event({
			category: 'Button',
			action: 'search_field',
			label: `${fieldData.detailField} 검색`,
			...fieldData
		});
	};

	const sendSelectField = (fieldData) => {
		ReactGA.event({
			category: 'Button',
			action: 'select_field',
			label: `${fieldData.detailField} 선택`,
			...fieldData
		});
	};

	const sendSelectDept = (deptData) => {
		ReactGA.event({
			category: 'Button',
			action: 'select_dept!',
			label: `${deptData.subjectName} 선택`,
			...deptData
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
