import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import character_circle_url from '../../img/kumap_logo_circle.png';

const LinkContainer = styled.div`
	transform: translate(-6rem, 0);
	padding-top: 4rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 4rem;
`;

const CharacterContainer = styled.div`
	position: relative;
	top: -4.5rem;
	left: 8.5rem;
	z-index: -1;
`;

const LinkButton = styled.button`
	width: 350px;
	height: 100px;
	padding: 10px 20px;
	font-family: 'Pretendard-semiBold';
	font-size: 30px;
	color: ${(props) => (props.option === 'white' ? '#036b3f' : 'white')};
	background-color: ${(props) => (props.option === 'white' ? 'white' : '#036b3f')};
	border: 2px solid #036b3f;
	border-radius: 20px;
	cursor: pointer;
	transition: 0.1s ease-in;
	&:hover {
		background-color: ${(props) => (props.option === 'white' ? '#d3d3d3' : '#02472a')};
		border: 2px solid #02472a;
	}
`;
const LinkContents = () => {
	const navigate = useNavigate();
	return (
		<LinkContainer>
			<CharacterContainer>
				<img alt="Kumap Character" src={character_circle_url} style={{ width: '7rem' }} />
			</CharacterContainer>

			<LinkButton onClick={() => navigate('/manual')} option={'white'}>
				KUMAP 설명보기
			</LinkButton>
			<LinkButton onClick={() => navigate('/road-map')} option={'green'}>
				KUMAP 바로가기
			</LinkButton>
		</LinkContainer>
	);
};

export default LinkContents;
