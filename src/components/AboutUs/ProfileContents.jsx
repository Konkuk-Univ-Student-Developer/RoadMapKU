import styled from 'styled-components';
import { Color } from '@styles';

const Container = styled.div`
	display: flex;
	width: 300px;
	height: 70%;
	flex-direction: column;
	justify-content: flex-start;
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
	font-size: 20px;
	font-weight: 600;
	color: ${Color.TEXT_BLACK};
`;

const DepartLabel = styled.div`
	margin: 5px 0;
	font-size: 15px;
	font-weight: 600;
	color: ${Color.TEXT_BLACK};
`;

const RoleLabel = styled.div`
	font-size: 15px;
	color: ${Color.TEXT_BLACK};
`;

const ProfileUl = styled.ul`
	margin-top: 30px;
	width: 60%;
	color: ${Color.TEXT_BLACK};
`;

const ProfileLi = styled.li`
	padding: 5px 0;
	font-size: 15px;
	color: ${Color.TEXT_BLACK};
`;

const ProfileContents = ({
	name,
	role,
	roleDatas,
	srcUrl,
	depart,
	imageSize = {
		width: '150px',
		height: '150px'
	}
}) => {
	return (
		<Container>
			<img {...imageSize} src={srcUrl} alt="팀원 이미지" />
			<LabelContainer>
				<NameLabel>{name}</NameLabel>
				<DepartLabel>{depart}</DepartLabel>
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
