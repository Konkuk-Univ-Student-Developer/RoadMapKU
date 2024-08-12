import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { selectedFieldState, subjectsInFieldState } from '../recoils/atoms';
import useField from '../hooks/useField';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 95%;
	height: 340px;
	background: #74ae96;
	border-radius: 10px;
	overflow: auto;
`;

const SelectedDepartment = styled.button`
	width: 95%;
	height: 50px;
	margin: 5px 0;
	font-size: 20px;
	cursor: pointer;
	font-weight: 600;
	color: black;
	background-color: #ffffff;
	border: 1px solid #ccc;
	border-radius: 10px;
	&: hover {
		background-color: #f1f1f1;
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
