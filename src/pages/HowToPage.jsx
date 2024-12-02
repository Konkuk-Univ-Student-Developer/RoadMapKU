import HeaderBar from '../components/HeaderBar';
import HowTo from './HowTo';
import { Header } from 'react-fullpage';

function HowToPage() {
	return (
		<>
			<Header>
				<HeaderBar />
			</Header>
			<HowTo />
		</>
	);
}

export default HowToPage;
