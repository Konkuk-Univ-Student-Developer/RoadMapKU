import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AboutKumapContents from '../components/AboutKumapContents/AboutKumapContents';
import AboutCompetencyContents from '../components/AboutKumapContents/AboutCompetencyContents';
import ConclusionContents from '../components/AboutKumapContents/ConclusionContents';
import Footer from '../components/Footer/Footer';
import { Header, SectionsContainer } from 'react-fullpage';
import HeaderBar from '../components/HeaderBar';
import { fullPageOptions } from './AboutUs';

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
	color: ${(props) => (props.option === 'white' ? '#036b3f' : 'white')};
	background-color: ${(props) => (props.option === 'white' ? '#eeeeee' : '#036b3f')};
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
