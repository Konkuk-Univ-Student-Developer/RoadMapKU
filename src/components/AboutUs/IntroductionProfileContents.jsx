import styled from 'styled-components';
import ProfileContents from './ProfileContents';
import { JiaRole, SejoonRole, SeugraeRole, SungjongRole, YeuenRole } from '@data';
import { JiaProfile, SejoonProfile, YeeunProfile, SungjongProfile, SeungraeProfile } from '@img';

const Container = styled.div`
	height: fit-content;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 1rem 0;
	background-color: rgba(214, 239, 224, 0.4);
`;

const ContentsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: flex-start;
`;

const IntroductionProfileContents = () => {
	return (
		<Container>
			<ContentsContainer>
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
					imageSize={{ width: '90px', height: '120px' }}
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
			</ContentsContainer>
		</Container>
	);
};

export default IntroductionProfileContents;
