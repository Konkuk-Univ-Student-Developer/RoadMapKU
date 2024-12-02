import styled from 'styled-components';
import ProfileContents from './ProfileContents';
import { JiaRole, SejoonRole, SeugraeRole, SungjongRole, YeuenRole } from '../../data/RoleData';
import JiaProfile from '../../img/JiaProfile.png';
import SejoonProfile from '../../img/SejoonProfile.png';
import YeeunProfile from '../../img/YeeunProfile.png';
import SungjongProfile from '../../img/SungjongProfile.png';
import SeungraeProfile from '../../img/SeungraeProfile.png';

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
			<ProfileContents srcUrl={JiaProfile} name={'김지아'} role={'기획'} roleDatas={JiaRole} depart={'경영학과'} />
			<ProfileContents
				srcUrl={SejoonProfile}
				name={'박세준'}
				role={'백엔드'}
				roleDatas={SejoonRole}
				depart={'컴퓨터공학부'}
			/>
			<ProfileContents
				srcUrl={YeeunProfile}
				name={'김예은'}
				role={'프론트엔드'}
				roleDatas={YeuenRole}
				depart={'스마트ICT융합공학과'}
			/>
			<ProfileContents
				srcUrl={SungjongProfile}
				name={'이성종'}
				role={'프론트엔드'}
				roleDatas={SungjongRole}
				depart={'컴퓨터공학부'}
			/>
			<ProfileContents
				srcUrl={SeungraeProfile}
				name={'하승래'}
				role={'프론트엔드'}
				roleDatas={SeugraeRole}
				depart={'컴퓨터공학부'}
			/>
		</Container>
	);
};

export default IntroductionProfileContents;
