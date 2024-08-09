import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { subjectesInField } from '../recoils/atoms';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
	width: 100%;
`;

const SelectedDepartment = styled.button`
	width: 85%;
	margin-top: 20px;
	padding: 10px 10px;
	font-size: 18px;
	cursor: pointer;
	color: #333;
	background-color: #f1f1f1;
	border: 1px solid #ccc;
	border-radius: 5px;
	&: hover {
		background-color: #ffffff;
	}
`;

const DepartmentList = () => {
	const subjects = useRecoilValue(subjectesInField);

	return (
		<Container>
			{subjects.map((subject) => {
				return <SelectedDepartment key={subject.subjectCode}>{subject.subjectName}</SelectedDepartment>;
			})}
		</Container>
	);
};

export default DepartmentList;
