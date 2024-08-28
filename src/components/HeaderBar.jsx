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
	min-width: 1200px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 50;
	padding: 10px 20px;
	background-color: white;
	border-bottom: 1px solid #e5e7eb;
	box-sizing: border-box; /* Ensure padding does not cause overflow */
`;

const HeaderBrand = styled.a`
	cursor: pointer;
	display: flex;
`;

const HeaderLinks = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	flex: 1; /* Allows the links section to grow and shrink */
`;

const HeaderLink = styled.a`
	cursor: pointer;
	text-decoration: none;
	user-select: none;
	${(props) => (props.active ? theme.active.on : theme.active.off)}
	&:hover {
		color: black;
	}
`;

const HeaderActions = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	overflow: hidden; /* Ensure no overflow issues */
`;

export const Button = styled.button`
	background-color: #036b3f; /* main color */
	display: flex;
	align-items: center;
	justify-content: center;
	color: white;
	font-size: 0.875rem;
	font-weight: normal;
	border-radius: 0.375rem;
	padding: 0.5rem 1.25rem;
	transition: background-color 0.2s ease-in-out;
	cursor: pointer;
	&:hover {
		background-color: #059669; /* darker green on hover */
	}
`;

function HeaderBar() {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	return (
		<>
			<HeaderContainer>
				<HeaderBrand onClick={() => navigate('/')}>
					<KUMAPLogo />
				</HeaderBrand>
				<HeaderLinks>
					<HeaderLink onClick={() => navigate('/')} active={pathname === '/'}>
						홈
					</HeaderLink>

					<HeaderLink onClick={() => navigate('/manual')} active={pathname === '/manual'}>
						소개
					</HeaderLink>

					<HeaderLink onClick={() => navigate('/howtopage')} active={pathname === '/howtopage'}>
						사용법
					</HeaderLink>

					<HeaderLink onClick={() => navigate('/road-map')} active={pathname === '/road-map'}>
						KUMAP
					</HeaderLink>

					<HeaderLink onClick={() => navigate('/about-us')} active={pathname === '/about-us'}>
						쿠스디는?
					</HeaderLink>
				</HeaderLinks>
				<HeaderActions>
					<HeaderBrand href="https://www.konkuk.ac.kr/konkuk/index.do">
						<img src="img/ku-logo.png" alt="KU Logo" style={{ height: '3rem', marginRight: '1rem' }} />
					</HeaderBrand>
				</HeaderActions>
			</HeaderContainer>
		</>
	);
}

export default HeaderBar;
