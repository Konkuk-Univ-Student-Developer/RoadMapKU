import styled from 'styled-components';
import ProfileContents from './ProfileContents';

const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 500px;
	background-color: #e2efd3;
`;

const IntroductionProfileContents = () => {
	return (
		<Container>
			<ProfileContents name={'이성종'} role={'프론트엔드'} roleDatas={['놀기', '밥먹기', '노래듣기']} />
			<ProfileContents name={'이성종'} role={'프론트엔드'} roleDatas={['놀기', '밥먹기', '노래듣기']} />
			<ProfileContents name={'이성종'} role={'프론트엔드'} roleDatas={['놀기', '밥먹기', '노래듣기']} />
			<ProfileContents name={'이성종'} role={'프론트엔드'} roleDatas={['놀기', '밥먹기', '노래듣기']} />
			<ProfileContents name={'이성종'} role={'프론트엔드'} roleDatas={['놀기', '밥먹기', '노래듣기']} />
		</Container>
	);
};

export default IntroductionProfileContents;
