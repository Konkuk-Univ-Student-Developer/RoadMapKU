import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: 100%;
	flex-grow: 1;
	height: ${(props) => (props.customHeight ? props.customHeight : '')};
	background-color: #0a3711;
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
	align-items: ${(props) => props.align || 'flex-start'};
`;

const Text = styled.div`
	color: white;
	font-size: ${(props) => props.size || '30px'};
	font-weight: ${(props) => props.weight || '600'};
	cursor: ${(props) => (props.pointer ? 'pointer' : '')};
	font-family: 'Pretendard-regular';
`;

const Footer = ({ customHeight }) => {
	const navigate = useNavigate();
	return (
		<Container customHeight={customHeight}>
			<SubContainer>
				<TextContainer align={'center'}>
					<Text size={'50px'}>KUMAP</Text>
					<Text size={'20px'}>꿈찾기 로드맵</Text>
				</TextContainer>
				<TextContainer>
					<Text size={'20px'}>Konkuk</Text>
					<Text size={'15px'} weight={'200'}>
						<a style={{ color: 'white', textDecoration: 'none' }} href="https://www.konkuk.ac.kr/konkuk/index.do">
							Konkuk University
						</a>
					</Text>
					<Text size={'15px'} weight={'200'}>
						<a style={{ color: 'white', textDecoration: 'none' }} href="https://bulletins.konkuk.ac.kr/ko-KR/">
							건국대학교 온라인 요람
						</a>
					</Text>
				</TextContainer>
				<TextContainer>
					<Text size={'20px'}>Learn More</Text>
					<Text pointer={true} size={'15px'} weight={'200'} onClick={() => navigate('/')}>
						KUMAP
					</Text>
					<Text pointer={true} size={'15px'} weight={'200'} onClick={() => navigate('/howtopage')}>
						KUMAP 이란?
					</Text>
				</TextContainer>
				<TextContainer>
					<Text size={'20px'}>Contact Us</Text>
					<Text size={'15px'} weight={'200'}>
						정보운영팀 전화번호: 02-450-3905
					</Text>
				</TextContainer>
			</SubContainer>
		</Container>
	);
};

export default Footer;
