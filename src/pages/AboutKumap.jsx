import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AboutKumapContents from '../components/AboutKumapContents/AboutKumapContens';
import AboutCompetencyContents from '../components/AboutKumapContents/AboutCompetencyContents';
import ConclusionContents from '../components/AboutKumapContents/ConclusionContents';
import MainContainer from '../components/MainContainer';
import Footer from '../components/Footer/Footer';

const HeaderContainer = styled.header`
	padding-top: 100px;
	text-align: center;
	margin-bottom: 0;
`;

const Title = styled.h1`
	font-size: 4em;
	font-weight: bold;
	text-align: left;
	padding-left: 100px;
	color: #056a3f;
`;

const SubContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const LinkContainer = styled.div`
	gap: 25px;
	height: 30rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
		<MainContainer>
			<HeaderContainer>
				<Title>KUMAP 소개</Title>
			</HeaderContainer>
			<SubContainer>
				<AboutKumapContents />
				<AboutCompetencyContents />
				<ConclusionContents />
				<LinkContainer>
					<LinkButton onClick={() => navigate('/howtopage')} option={'white'}>
						How to use?
					</LinkButton>
					<LinkButton onClick={() => navigate('/road-map')} option={'green'}>
						KUMAP 바로가기
					</LinkButton>
				</LinkContainer>
			</SubContainer>
			<Footer />
		</MainContainer>
	);
};

export default AboutKumap;
