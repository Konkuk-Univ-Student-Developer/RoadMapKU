import ReactGA from 'react-ga4';

const useGA = () => {
	const sendClickShareUrl = () => {
		ReactGA.send({
			hitType: 'event',
			eventCategory: 'Button',
			eventAction: 'share_url',
			eventLabel: '링크로 공유'
		});
	};

	const sendClickShareScreenshot = () => {
		ReactGA.send({
			hitType: 'event',
			eventCategory: 'Button',
			eventAction: 'share_screenshot',
			eventLabel: '스크린샷으로 저장'
		});
	};

	const sendAddMyRoadMap = (cellData) => {
		ReactGA.send({
			hitType: 'event',
			eventCategory: 'Button',
			eventAction: 'add_my_roadmap',
			eventLabel: `${cellData.courseName} 추가`,
			value: cellData
		});
	};

	const sendRemoveMyRoadMap = (cellData) => {
		ReactGA.send({
			hitType: 'event',
			eventCategory: 'Button',
			eventAction: 'remove_my_roadmap',
			eventLabel: `${cellData.courseName} 삭제`,
			value: cellData
		});
	};

	return { sendClickShareUrl, sendClickShareScreenshot, sendAddMyRoadMap, sendRemoveMyRoadMap };
};

export default useGA;
