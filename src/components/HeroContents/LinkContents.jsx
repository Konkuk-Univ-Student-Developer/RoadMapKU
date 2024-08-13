import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LinkContainer = styled.div`
	gap: 10px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const LinkLabel = styled.div`
	cursor: pointer;
	font-size: 35px;
	text-decoration: underline;
`;

const LinkButton = styled.button`
	width: 400px;
	height: 100px;
	padding: 10px 20px;
	font-size: 45px;
	color: #fff;
	background-color: #036b3f;
	border: none;
	border-radius: 50px;
	cursor: pointer;
	&:hover {
		background-color: #02472a;
	}
`;
const LinkContents = () => {
	const navigate = useNavigate();
	return (
		<LinkContainer>
			<LinkLabel onClick={() => navigate('/manual')}>KUMAP 이란?</LinkLabel>
			<LinkButton onClick={() => navigate('/road-map')}>KUMAP 바로가기</LinkButton>
		</LinkContainer>
	);
};

export default LinkContents;
