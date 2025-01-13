import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { KonkukUnivLogo, KumapLogo } from '@img';
import styled from 'styled-components';
import { Color } from '@styles';

const theme = {
	active: {
		on: `color: ${Color.BLACK}; font-weight: bold;`,
		off: 'color: gray; font-weight: normal;'
	}
};

const HeaderContainer = styled.nav`
	height: 70px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 50;
	background-color: white;
`;

const HeaderContent = styled.div`
	min-width: 600px;
	width: 85%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: white;
	box-sizing: border-box;
`;

const ContentContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const HeaderBrand = styled.a`
	cursor: pointer;
	user-select: none;
	display: flex;
`;

const HeaderLinks = styled.div`
	width: 70%;
	padding-left: 1rem;
	display: flex;
	align-items: start;
	gap: 2rem;
`;

const HeaderLink = styled.div`
	padding: 0 5px;
	cursor: pointer;
	text-decoration: none;
	user-select: none;
	font-family: Pretendard-semiBold;
	${({ $active }) => ($active ? theme.active.on : theme.active.off)}

	&:hover {
		color: ${Color.BLACK};
	}
`;

const HeaderActions = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	overflow: hidden;
`;

const KumapLogoImage = styled.img.attrs({ src: KumapLogo, alt: '쿠맵 로고' })`
	width: 140px;
	height: 50px;
	margin-right: 20px;
`;

const KonkukUnivLogoImage = styled.img.attrs({ src: KonkukUnivLogo, alt: '건국대학교 로고' })`
	height: 50px;
	width: 140px;
`;

function HeaderBar() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	return (
		<>
			<HeaderContainer>
				<HeaderContent>
					<ContentContainer>
						<HeaderBrand onClick={() => navigate('/')}>
							<KumapLogoImage />
						</HeaderBrand>
						<HeaderLinks>
							<HeaderLink onClick={() => navigate('/manual')} $active={pathname === '/manual'}>
								소개
							</HeaderLink>

							<HeaderLink onClick={() => navigate('/how-to-use')} $active={pathname === '/how-to-use'}>
								사용법
							</HeaderLink>

							<HeaderLink onClick={() => navigate('/road-map')} $active={pathname === '/road-map'}>
								KUMAP
							</HeaderLink>

							<HeaderLink onClick={() => navigate('/about-us')} $active={pathname === '/about-us'}>
								쿠스디는?
							</HeaderLink>
						</HeaderLinks>
					</ContentContainer>

					<HeaderActions>
						<HeaderBrand href="https://www.konkuk.ac.kr/konkuk/index.do">
							<KonkukUnivLogoImage />
						</HeaderBrand>
					</HeaderActions>
				</HeaderContent>
			</HeaderContainer>
		</>
	);
}

export default HeaderBar;
