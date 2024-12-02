import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import KumapWhiteImage from '../../img/kumapWhite.png';

const Container = styled.div`
	height: 20vh;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: ${({ $customHeight }) => $customHeight || '150px'};
	background-color: #0a3711;
	z-index: 3;
`;

const SubContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;
	width: 70%;
`;

const TextContainer = styled.div`
	gap: 10px;
	width: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: ${({ $align }) => $align || 'flex-start'};
`;

const Text = styled.div`
	color: white;
	font-size: ${({ $size }) => $size || '30px'};
	font-weight: ${({ $weight }) => $weight || '600'};
	cursor: ${({ $pointer }) => ($pointer ? 'pointer' : '')};
`;

const KumapWhiteLogo = styled.img`
	width: 180px;
	height: 80px;
	margin-right: 20px;
`;

const Footer = ({ customHeight }) => {
	const navigate = useNavigate();
	return (
		<Container $customHeight={customHeight}>
			<SubContainer>
				<KumapWhiteLogo src={KumapWhiteImage} alt="Kumap White Logo" />
				<TextContainer>
					<Text $size={'20px'}>Konkuk</Text>
					<Text $size={'15px'} $weight={'200'}>
						<a style={{ color: 'white', textDecoration: 'none' }} href="https://www.konkuk.ac.kr/konkuk/index.do">
							Konkuk University
						</a>
					</Text>
					<Text $size={'15px'} $weight={'200'}>
						<a style={{ color: 'white', textDecoration: 'none' }} href="https://bulletins.konkuk.ac.kr/ko-KR/">
							건국대학교 온라인 요람
						</a>
					</Text>
				</TextContainer>
				<TextContainer>
					<Text $size={'20px'}>Learn More</Text>
					<Text $pointer={true} $size={'15px'} $weight={'200'} onClick={() => navigate('/')}>
						KUMAP
					</Text>
					<Text $pointer={true} $size={'15px'} $weight={'200'} onClick={() => navigate('/howtopage')}>
						KUMAP 이란?
					</Text>
				</TextContainer>
				<TextContainer>
					<Text $size={'20px'}>Contact Us</Text>
					<Text $pointer={true} $size={'15px'} $weight={'200'}>
						Email: kusd@konkuk.ac.kr
					</Text>
				</TextContainer>
			</SubContainer>
		</Container>
	);
};

export default Footer;
