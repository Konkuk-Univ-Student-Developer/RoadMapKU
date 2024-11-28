import styled from 'styled-components';
import MainContainer from '../components/MainContainer';
import CircleStyle from '../style/CircleStyle';
import logo_url from '../img/kumap_logo.png';
import character_url from './../img/KU_character.png';
import { fadeIn } from '../style/Frames';

const TitleContainer = styled.div`
	position: absolute;
	top: 40%;
	left: 50%;
	transform: translate(-40%, -50%);
	display: flex;
	justify-content: center;
	align-items: center;
	animation: ${fadeIn} 1s ease-in-out;
`;

const SubTitleContainer = styled.div`
	position: absolute;
	top: 55%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: 'Pretendard-semiBold';
	font-size: 1.5rem;
	user-select: none;
	gap: 0.5rem;
`;

function NewHome() {
	return (
		<MainContainer>
			<CircleStyle color={'rgba(234, 247, 239, 0.8)'} size={'50rem'} top={'-30%'} left={'-15%'} time={'8'} />
			<CircleStyle color={'rgba(237, 248, 241, 0.8)'} size={'16rem'} top={'22%'} left={'28%'} time={'6'} />
			<CircleStyle color={'rgba(214, 239, 224, 0.8)'} size={'10rem'} top={'31%'} left={'35%'} time={'5'} />
			<CircleStyle color={'rgba(232, 247, 238, 0.8)'} size={'25rem'} top={'5%'} left={'74%'} time={'7'} />
			<CircleStyle color={'rgba(221, 242, 229, 0.8)'} size={'6rem'} top={'25%'} left={'70%'} time={'4'} />
			<TitleContainer>
				<img alt="Kumap Logo" src={logo_url} style={{ width: '30rem', height: '10rem' }} />
				<img alt="Kumap Logo" src={character_url} style={{ width: '8rem', height: '9rem' }} />
			</TitleContainer>
			<SubTitleContainer>
				<div>진로를 탐색하고 추가하여</div>
				<div>나만의 로드맵을 만들어 보세요!</div>
			</SubTitleContainer>
		</MainContainer>
	);
}

export default NewHome;
