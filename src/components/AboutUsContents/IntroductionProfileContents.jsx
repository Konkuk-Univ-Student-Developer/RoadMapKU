import styled from 'styled-components';
import ProfileContents from './ProfileContents';
import { JiaRole, SejoonRole, SeugraeRole, SungjongRole, YeuenRole } from '../../data/RoleData';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	flex-grow: 1;
	background-color: #e2efd3;
`;

const IntroductionProfileContents = () => {
	return (
		<Container>
			<ProfileContents
				srcUrl={'./../img/JiaProfile.png'}
				name={'김지아'}
				role={'기획'}
				roleDatas={JiaRole}
				depart={'경영학과'}
			/>
			<ProfileContents
				srcUrl={'./../img/SejoonProfile.png'}
				name={'박세준'}
				role={'백엔드'}
				roleDatas={SejoonRole}
				depart={'컴퓨터공학부'}
			/>
			<ProfileContents
				srcUrl={'./../img/YeeunProfile.png'}
				name={'김예은'}
				role={'프론트엔드'}
				roleDatas={YeuenRole}
				depart={'스마트ICT융합공학과'}
			/>
			<ProfileContents
				srcUrl={'./../img/SungjongProfile.png'}
				name={'이성종'}
				role={'프론트엔드'}
				roleDatas={SungjongRole}
				depart={'컴퓨터공학부'}
			/>
			<ProfileContents
				srcUrl={'./../img/SeungraeProfile.png'}
				name={'하승래'}
				role={'프론트엔드'}
				roleDatas={SeugraeRole}
				depart={'컴퓨터공학부'}
			/>
		</Container>
	);
};

export default IntroductionProfileContents;
