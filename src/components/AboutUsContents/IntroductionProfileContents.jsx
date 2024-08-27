import styled from 'styled-components';
import ProfileContents from './ProfileContents';
import { JiaRole, SejoonRole, SeugraeRole, SungjongRole, YeuenRole } from '../../data/RoleData';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 550px;
	background-color: #e2efd3;
`;

const IntroductionProfileContents = () => {
	return (
		<Container>
			<ProfileContents srcUrl={'./../img/JiaProfile.png'} name={'김지아'} role={'기획'} roleDatas={JiaRole} />
			<ProfileContents srcUrl={'./../img/SejoonProfile.png'} name={'박세준'} role={'백엔드'} roleDatas={SejoonRole} />
			<ProfileContents srcUrl={'./../img/YeeunProfile.png'} name={'김예은'} role={'프론트엔드'} roleDatas={YeuenRole} />
			<ProfileContents
				srcUrl={'./../img/SungjongProfile.png'}
				name={'이성종'}
				role={'프론트엔드'}
				roleDatas={SungjongRole}
			/>
			<ProfileContents
				srcUrl={'./../img/SeungraeProfile.png'}
				name={'하승래'}
				role={'프론트엔드'}
				roleDatas={SeugraeRole}
			/>
		</Container>
	);
};

export default IntroductionProfileContents;
