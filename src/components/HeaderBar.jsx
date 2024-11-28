import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import KUMAPLogo from './LogoFile/Kulogo';

const theme = {
	active: {
		on: 'color: black; font-weight: bold;',
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
	display: flex;
`;

const HeaderLinks = styled.div`
	width: 70%;
	padding-left: 1rem;
	display: flex;
	align-items: start;
	gap: 2rem;
`;

const HeaderLink = styled.a`
	padding: 0 5px;
	cursor: pointer;
	text-decoration: none;
	user-select: none;
	font-family: Pretendard-semiBold;
	${({ $active }) => ($active ? theme.active.on : theme.active.off)}

	&:hover {
		color: black;
	}
`;

const HeaderActions = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	overflow: hidden;
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
							<KUMAPLogo />
						</HeaderBrand>
						<HeaderLinks>
							<HeaderLink onClick={() => navigate('/manual')} $active={pathname === '/manual'}>
								소개
							</HeaderLink>

							<HeaderLink onClick={() => navigate('/howtopage')} $active={pathname === '/howtopage'}>
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
							<img src="img/ku-logo.png" alt="KU Logo" style={{ height: '3rem' }} />
						</HeaderBrand>
					</HeaderActions>
				</HeaderContent>
			</HeaderContainer>
		</>
	);
}

export default HeaderBar;
