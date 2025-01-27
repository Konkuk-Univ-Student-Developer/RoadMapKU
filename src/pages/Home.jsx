import React from 'react';
import styled from 'styled-components';
import { MainContainer, LinkContents } from '@Common';
import { KumapLogo, KUBook, Road } from '@img';
import { ImmergeBackgroundContents, HomeBackGroundContents } from '@Background';
import { fadeIn } from '@styles';

const PageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
`;

const TitleContainer = styled.div`
	width: 100%;
	padding-top: 15%;
	display: flex;
	justify-content: center;
	align-items: center;
	user-select: none;
	z-index: 2;
	opacity: 0;
	animation: ${fadeIn} 1s ease-in-out forwards;
	animation-delay: 0.3s;
`;

const SubTitleContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: 'Pretendard-semiBold';
	font-size: 1.5rem;
	user-select: none;
	gap: 0.5rem;
	animation-delay: 0.5s;
	z-index: 2;
	opacity: 0;
	animation: ${fadeIn} 1s ease-in-out forwards;
	animation-delay: 0.6s;
`;

const RoadContainer = styled.div`
	transform: translateX(-15%) translateY(-85%);
	display: flex;
	justify-content: center;
	align-items: center;
	animation-delay: 1s;
	z-index: 1;
	opacity: 0;
	animation: ${fadeIn} 1s ease-in-out forwards;
	animation-delay: 0.9s;
`;

function Home() {
	return (
		<MainContainer>
			<PageContainer>
				<HomeBackGroundContents />
				<TitleContainer>
					<img alt="Kumap Logo" src={KumapLogo} style={{ width: '25%' }} />
					<img alt="Kumap Character" src={KUBook} style={{ width: '7%' }} />
				</TitleContainer>
				<SubTitleContainer>
					<div>진로를 탐색하고 수업을 추가하여</div>
					<div>나만의 로드맵을 만들어 보세요!</div>
				</SubTitleContainer>
				<LinkContents />
				<RoadContainer>
					<img alt="Road Image" src={Road} style={{ width: '100%' }} />
				</RoadContainer>
				<ImmergeBackgroundContents />
			</PageContainer>
		</MainContainer>
	);
}

export default Home;
