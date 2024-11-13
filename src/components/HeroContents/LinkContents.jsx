import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LinkContainer = styled.div`
	gap: 25px;
	height: 100%;
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
	background-color: ${(props) => (props.option === 'white' ? 'white' : '#036b3f')};
	border: none;
	border-radius: 20px;
	cursor: pointer;
	transition: 0.1s ease-in;
	&:hover {
		background-color: ${(props) => (props.option === 'white' ? '#d3d3d3' : '#02472a')};
	}
`;
const LinkContents = () => {
	const navigate = useNavigate();
	return (
		<LinkContainer>
			<LinkButton onClick={() => navigate('/manual')} option={'white'}>
				KUMAP 이란?
			</LinkButton>
			<LinkButton onClick={() => navigate('/road-map')} option={'green'}>
				KUMAP 바로가기
			</LinkButton>
		</LinkContainer>
	);
};

export default LinkContents;
