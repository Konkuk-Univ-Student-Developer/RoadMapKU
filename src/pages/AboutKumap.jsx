import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AboutKumapContents from '../components/AboutKumapContents/AboutKumapContents';
import AboutCompetencyContents from '../components/AboutKumapContents/AboutCompetencyContents';
import ConclusionContents from '../components/AboutKumapContents/ConclusionContents';
import Footer from '../components/Footer/Footer';
import { Header, SectionsContainer } from 'react-fullpage';
import HeaderBar from '../components/HeaderBar';
import { Color } from '../style/Color';

export const fullPageOptions = {
	sectionClassName: 'section',
	anchors: ['sectionOne', 'sectionTwo', 'sectionThree'],
	scrollBar: false,
	navigation: true,
	verticalAlign: false,
	sectionPaddingTop: '50px',
	sectionPaddingBottom: '50px',
	arrowNavigation: true
};

const SubContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: stretch;
`;

const LastContainer = styled.div`
	height: 85vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: white;
`;

const LinkContainer = styled.div`
	gap: 25px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
`;

const LinkButton = styled.button`
	width: 400px;
	height: 100px;
	padding: 10px 20px;
	font-size: 30px;
	color: ${(props) => (props.option === 'white' ? Color.GREEN : 'white')};
	background-color: ${(props) => (props.option === 'white' ? '#eeeeee' : Color.GREEN)};
	border: none;
	border-radius: 20px;
	cursor: pointer;
	transition: 0.1s ease-in;
	&:hover {
		background-color: ${(props) => (props.option === 'white' ? '#d3d3d3' : '#02472a')};
	}
`;

const AboutKumap = () => {
	const navigate = useNavigate();
	return (
		<>
			<Header>
				<HeaderBar />
			</Header>
			<SectionsContainer {...fullPageOptions}>
				<SubContainer>
					<AboutKumapContents />
				</SubContainer>
				<SubContainer>
					<AboutCompetencyContents />
				</SubContainer>
				<SubContainer>
					<LastContainer>
						<ConclusionContents />
						<LinkContainer>
							<LinkButton onClick={() => navigate('/howtopage')} option={'white'}>
								KUMAP 사용법
							</LinkButton>
							<LinkButton onClick={() => navigate('/road-map')} option={'green'}>
								KUMAP 바로가기
							</LinkButton>
						</LinkContainer>
					</LastContainer>
					<Footer />
				</SubContainer>
			</SectionsContainer>
		</>
	);
};

export default AboutKumap;
