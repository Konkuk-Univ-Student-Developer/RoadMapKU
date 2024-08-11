import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
//import Modal from './Modal/Modal'; // Modal 컴포넌트 임포트
import KuLogo from '../components/LogoFile/Kulogo';
import CourseDetail from './CourseDetail/CousreDetail';
import FieldCategoryInput from './FieldCategoryInput';

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

function Header() {
	const navigate = useNavigate();
	const [isOpen1, setIsOpen1] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const { pathname } = useLocation();

	const onClickButton1 = () => {
		setIsOpen1(true);
	};
	const onClickButton2 = () => {
		setIsOpen2(true);
	};
	//const haksuId = 'COAA83717';

	return (
		<>
			<HeaderContainer>
				<HeaderBrand>
					<KuLogo />
				</HeaderBrand>
				<HeaderLinks>
					<HeaderLink onClick={() => navigate('/')} active={pathname === '/'}>
						Home
					</HeaderLink>
					<HeaderLink onClick={() => navigate('/road-map')} active={pathname === '/road-map'}>
						로드맵
					</HeaderLink>
					<Button onClick={onClickButton2}>대학/대학원</Button>
					{isOpen2 && (
						<FieldCategoryInput
							onClose={() => {
								setIsOpen2(false);
							}}
						/>
					)}
					{/* {isOpen1 && (
						<CourseDetail
							onClose={() => {
								setIsOpen1(false);
							}}
							HaksuId={haksuId} // 변수로 전달
						/>
					)} */}
					<Button onClick={onClickButton1}>학사 안내</Button>
					{isOpen1 && (
						<CourseDetail
							onClose={() => {
								setIsOpen1(false);
							}}
						/>
					)}
				</HeaderLinks>
				<HeaderActions>
					<ExtraLinks>
						<ExtraLink onClick={() => navigate('/campus')}>캠퍼스</ExtraLink>
						<ExtraLink onClick={() => navigate('/service')}>KU Service</ExtraLink>
						<ExtraLink onClick={() => navigate('/language')}>Language</ExtraLink>
					</ExtraLinks>
					<HeaderBrand>
						<img src="img/ku-logo.png" alt="KU Logo" style={{ height: '3rem', marginRight: '1rem' }} />
					</HeaderBrand>
				</HeaderActions>
			</HeaderContainer>
			{/* <Modal show={showModal} width={800} closed={handleModalClose}>
				<CourseDetail />
			</Modal> */}
		</>
	);
}

export default Header;
