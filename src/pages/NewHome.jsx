import styled from 'styled-components';
import MainContainer from '../components/MainContainer';
import CircleStyle from '../style/CircleStyle';
import logo_url from '../img/kumap_logo.png';
import character_url from './../img/KU_character.png';
import road_url from './../img/road.png';
import LinkContents from '../components/HomeContents/LinkContents';
import { fadeIn } from '../style/Frames';

const PageContainer = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

const TitleContainer = styled.div`
	padding-top: 25rem;
	display: flex;
	justify-content: center;
	align-items: center;
	animation: ${fadeIn} 1s ease-in-out;
	z-index: 1;
`;

const SubTitleContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: 'Pretendard-semiBold';
	font-size: 1.5rem;
	user-select: none;
	gap: 0.5rem;
	z-index: 1;
`;

const RoadContainer = styled.div`
	transform: translate(-24rem, -16rem);
	display: flex;
	justify-content: center;
	align-items: center;
	animation: ${fadeIn} 1s ease-in-out;
	z-index: -1;
`;

function NewHome() {
	return (
		<MainContainer>
			<CircleStyle color={'rgba(234, 247, 239, 0.8)'} size={'50rem'} top={'-30%'} left={'-15%'} time={'8'} />
			<CircleStyle color={'rgba(237, 248, 241, 0.7)'} size={'16rem'} top={'22%'} left={'25%'} time={'6'} />
			<CircleStyle color={'rgba(214, 239, 224, 0.6)'} size={'10rem'} top={'30%'} left={'32%'} time={'5'} />
			<CircleStyle color={'rgba(232, 247, 238, 0.7)'} size={'25rem'} top={'5%'} left={'74%'} time={'7'} />
			<CircleStyle color={'rgba(221, 242, 229, 0.8)'} size={'6rem'} top={'25%'} left={'70%'} time={'4'} />

			<PageContainer>
				<TitleContainer>
					<img alt="Kumap Logo" src={logo_url} style={{ width: '30rem', height: '10rem' }} />
					<img alt="Kumap Character" src={character_url} style={{ width: '8rem', height: '9rem' }} />
				</TitleContainer>
				<SubTitleContainer>
					<div>진로를 탐색하고 추가하여</div>
					<div>나만의 로드맵을 만들어 보세요!</div>
				</SubTitleContainer>
				<LinkContents />
				<RoadContainer>
					<img alt="Road Image" src={road_url} style={{ width: '120rem', height: '20rem' }} />
				</RoadContainer>
			</PageContainer>
		</MainContainer>
	);
}

export default NewHome;
