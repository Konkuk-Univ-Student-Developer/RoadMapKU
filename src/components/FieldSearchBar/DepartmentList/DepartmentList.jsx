import styled from 'styled-components';
import { fadeIn } from '../../../style/Frames';
import DepartmentListContents from './DepartmentListContents';
import { Color } from '../../../style/Color';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	animation: ${fadeIn} 0.2s ease-in-out;
`;

const DepartmentContainer = styled.div`
	margin: 10px 0;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	width: 95%;
	background: white;
	border-radius: 4px;
	overflow: auto;
	white-space: nowrap;
`;

const TitleContainer = styled.div`
	width: 95%;
	display: flex;
	align-items: flex-start;
`;

const Title = styled.h2`
	font-size: 15px;
	color: ${Color.GREEN};
	margin-bottom: 10px;
`;

const DepartmentList = () => {
	return (
		<Container>
			<TitleContainer>
				<Title style={{ marginBottom: '0' }}>학과선택</Title>
			</TitleContainer>
			<DepartmentContainer>
				<DepartmentListContents />
			</DepartmentContainer>
		</Container>
	);
};

export default DepartmentList;
