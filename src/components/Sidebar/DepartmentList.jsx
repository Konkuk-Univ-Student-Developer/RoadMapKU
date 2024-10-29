import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { subjectsInFieldState } from '../../recoils/atoms';
import { Title } from './FieldCategory';
import DepartmentListContents from './DepartmentListContents';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const DepartmentContainer = styled.div`
	margin: 10px 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	width: 95%;
	background: white;
	border-radius: 10px;
	overflow: auto;
	white-space: nowrap;
	box-shadow:
		0 2px 5px rgba(0, 0, 0, 0.1),
		0 1px 3px rgba(0, 0, 0, 0.08);
`;

const TitleContainer = styled.div`
	width: 95%;
	display: flex;
	align-items: flex-start;
`;

const DepartmentList = () => {
	const subjects = useRecoilValue(subjectsInFieldState);

	return (
		<Container>
			<TitleContainer>
				<Title style={{ marginBottom: '0' }}>학과 리스트</Title>
			</TitleContainer>
			<DepartmentContainer>
				<DepartmentListContents subjects={subjects} />
			</DepartmentContainer>
		</Container>
	);
};

export default DepartmentList;
