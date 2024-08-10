import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { selectedFieldState, subjectsInFieldState } from '../recoils/atoms';
import useField from '../hooks/useField';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
	width: 100%;
	height: 330px;
	background: #ffffff;
	overflow: auto;
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
	const { fetchCoursesInFieldsAndSubjects, fetchCoursesInFields } = useField();
	const selectedField = useRecoilValue(selectedFieldState);
	const subjects = useRecoilValue(subjectsInFieldState);

	return (
		<Container>
			<SelectedDepartment onClick={() => fetchCoursesInFields(selectedField.fieldCode)}>
				해당 직군 전체 강좌
			</SelectedDepartment>
			{subjects.map((subject) => {
				return (
					<SelectedDepartment
						key={subject.subjectCode}
						onClick={() => {
							fetchCoursesInFieldsAndSubjects(selectedField.fieldCode, subject.subjectCode);
						}}
					>
						{subject.subjectName}
					</SelectedDepartment>
				);
			})}
		</Container>
	);
};

export default DepartmentList;
