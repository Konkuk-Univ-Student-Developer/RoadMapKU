import ReactGA from 'react-ga4';

const useGA = () => {
	const sendClickShareUrl = (selectedMyTableContents) => {
		ReactGA.send({
			hitType: 'event',
			eventCategory: 'Button',
			eventAction: 'share_url',
			eventLabel: '링크로 공유',
			customData: selectedMyTableContents
		});
	};

	const sendClickShareScreenshot = (selectedMyTableContents) => {
		ReactGA.send({
			hitType: 'event',
			eventCategory: 'Button',
			eventAction: 'share_screenshot',
			eventLabel: '스크린샷으로 저장',
			customData: selectedMyTableContents
		});
	};

	const sendAddMyRoadMap = (cellData) => {
		ReactGA.send({
			hitType: 'event',
			eventCategory: 'Button',
			eventAction: 'add_my_roadmap',
			eventLabel: `${cellData.courseName} 추가`,
			customData: cellData
		});
	};

	const sendRemoveMyRoadMap = (cellData) => {
		ReactGA.send({
			hitType: 'event',
			eventCategory: 'Button',
			eventAction: 'remove_my_roadmap',
			eventLabel: `${cellData.courseName} 삭제`,
			customData: cellData
		});
	};

	const sendSearchField = (fieldData) => {
		ReactGA.send({
			hitType: 'event',
			eventCategory: 'Button',
			eventAction: 'search_field',
			eventLabel: `${fieldData.detailField} 검색`,
			customData: fieldData
		});
	};

	const sendSelectField = (fieldData) => {
		ReactGA.send({
			hitType: 'event',
			eventCategory: 'Button',
			eventAction: 'select_field',
			eventLabel: `${fieldData.detailField} 선택`,
			customData: fieldData
		});
	};

	return {
		sendClickShareUrl,
		sendClickShareScreenshot,
		sendAddMyRoadMap,
		sendRemoveMyRoadMap,
		sendSearchField,
		sendSelectField
	};
};

export default useGA;
