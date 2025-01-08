import MainContainer from '../components/MainContainer';
import HowToContents from '../components/HowToPageContents/HowToContents';
import BackgroundContents from '../components/BackgroundContents/BackgroundContents';

function HowToPage() {
	return (
		<MainContainer>
			<BackgroundContents />
			<HowToContents />
		</MainContainer>
	);
}

export default HowToPage;
