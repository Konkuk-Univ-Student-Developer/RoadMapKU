import styled from 'styled-components';

const theme = {
	active: {
		on: 'color: black; font-weight: bold;',
		off: 'color: gray; font-weight: normal;'
	}
};

const HeaderContainer = styled.nav`
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

const HeaderBrand = styled.div`
	display: flex;
`;

const HeaderLinks = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;
	flex: 1; /* Allows the links section to grow and shrink */
`;

const HeaderLink = styled.a`
	text-decoration: none;
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

const ExtraLinks = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	gap: 1rem;
	color: gray;
	white-space: nowrap; /* Prevent wrapping */
	overflow: hidden; /* Hide overflow */
	text-overflow: ellipsis; /* Add ellipsis for overflowed text */
	padding-right: 20px; /* 우측 패딩 추가 */
`;

const ExtraLink = styled.a`
	color: gray;
	text-decoration: none;
	&:hover {
		color: black;
	}
`;

function Header() {
	const activeLink = '/'; // Example active link, replace with your logic for determining active link

	return (
		<HeaderContainer>
			<HeaderBrand>
				<img src="img/ku-logo.png" alt="KU Logo" style={{ height: '3rem', marginRight: '1rem' }} />
			</HeaderBrand>
			<HeaderLinks>
				<HeaderLink href="/" active={activeLink === '/'}>
					Home
				</HeaderLink>
				<HeaderLink href="/road-map" active={activeLink === '/voca-village'}>
					로드맵
				</HeaderLink>
				<HeaderLink href="/colleges" active={activeLink === '/colleges'}>
					대학/대학원
				</HeaderLink>
				<HeaderLink href="/academic" active={activeLink === '/academic'}>
					학사안내
				</HeaderLink>
			</HeaderLinks>
			<HeaderActions>
				<ExtraLinks>
					<ExtraLink href="/campus">캠퍼스</ExtraLink>
					<ExtraLink href="/service">KU Service</ExtraLink>
					<ExtraLink href="/language">Language</ExtraLink>
				</ExtraLinks>
			</HeaderActions>
		</HeaderContainer>
	);
}

export default Header;
