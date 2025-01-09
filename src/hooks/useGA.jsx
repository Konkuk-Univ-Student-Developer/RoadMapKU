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

	return { sendClickShareUrl, sendClickShareScreenshot };
};

export default useGA;
