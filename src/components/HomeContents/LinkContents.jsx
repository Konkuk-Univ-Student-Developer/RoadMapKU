import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import character_circle_url from '../../img/kumap_logo_circle.png';
import { fadeIn, trembleBounce, trembleRotate } from '../../style/Frames';

const LinkContainer = styled.div`
	transform: translate(-6rem, 0);
	padding-top: 4rem;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 4rem;
	z-index: 2;
	opacity: 0;
	animation: ${fadeIn} 1s ease-in-out forwards;
	animation-delay: 1.2s;
`;

const CharacterContainer = styled.div`
	position: relative;
	top: -4.5rem;
	left: 8.5rem;
	z-index: -1;
	user-select: none;

	${(props) =>
		props.$isHovered &&
		css`
			animation: ${trembleRotate} 0.4s ease-in-out;
		`}
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
	user-select: none;
	transition: 0.1s ease-in;
	&:hover {
		animation: ${trembleBounce} 0.4s ease-in-out;
	}
`;
const LinkContents = () => {
	const navigate = useNavigate();
	const [isHovered, setIsHovered] = useState(false);

	const handleMouseEnter = () => setIsHovered(true);
	const handleMouseLeave = () => setIsHovered(false);
	return (
		<LinkContainer>
			<CharacterContainer $isHovered={isHovered}>
				<img alt="Kumap Character" src={character_circle_url} style={{ width: '7rem' }} />
			</CharacterContainer>

			<LinkButton
				onClick={() => navigate('/manual')}
				option={'white'}
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				KUMAP 설명보기
			</LinkButton>
			<LinkButton onClick={() => navigate('/road-map')} option={'green'}>
				KUMAP 바로가기
			</LinkButton>
		</LinkContainer>
	);
};

export default LinkContents;
