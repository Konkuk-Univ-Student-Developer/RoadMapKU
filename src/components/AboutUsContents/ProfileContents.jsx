import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	width: 300px;
	height: 100%;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const LabelContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const NameLabel = styled.div`
	font-size: 30px;
	font-weight: 600;
`;

const RoleLabel = styled.div`
	font-size: 20px;
`;

const ProfileUl = styled.ul`
	margin-top: 30px;
	width: 60%;
`;

const ProfileLi = styled.li`
	font-size: 20px;
`;

const ProfileContents = ({ name, role, roleDatas, srcUrl }) => {
	return (
		<Container>
			<img width={'150px'} height={'150px'} src={srcUrl} alt="팀원 이미지" />
			<LabelContainer>
				<NameLabel>{name}</NameLabel>
				<RoleLabel>{role}</RoleLabel>
				<ProfileUl>
					{roleDatas.map((item, index) => {
						return <ProfileLi key={index}>{item}</ProfileLi>;
					})}
				</ProfileUl>
			</LabelContainer>
		</Container>
	);
};

export default ProfileContents;
