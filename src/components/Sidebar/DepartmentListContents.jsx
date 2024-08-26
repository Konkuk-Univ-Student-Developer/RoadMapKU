import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { selectedFieldState, selectedSubjectState } from '../../recoils/atoms';
import useField from '../../hooks/useField';

const SelectedDepartment = styled.button`
	width: 95%;
	height: 50px;
	margin: 5px 0;
	font-size: 20px;
	cursor: pointer;
	font-weight: 600;
	color: black;
	background-color: ${(props) => (props.isSelected ? '#d3d3d3' : '#ffffff')};
	border: 1px solid #ccc;
	border-radius: 10px;
	&:hover {
		background-color: #d3d3d3;
	}
`;

function DepartmentListContents({ subjects }) {
	const { fetchCoursesInFieldsAndSubjects, fetchCoursesInFields } = useField();
	const selectedField = useRecoilValue(selectedFieldState);
	const [selectedDepartment, setSelectedDepartment] = useRecoilState(selectedSubjectState);

	const handleDepartmentClick = (fieldCode, subjectCode, subjectName) => {
		setSelectedDepartment({ subjectCode, subjectName });
		if (subjectCode > 0) {
			fetchCoursesInFieldsAndSubjects(fieldCode, subjectCode);
		} else {
			fetchCoursesInFields(fieldCode);
		}
	};

	if (!subjects.length) {
		return <SelectedDepartment isSelected={true}>해당하는 학과가 없습니다</SelectedDepartment>;
	}

	return (
		<>
			<SelectedDepartment
				isSelected={selectedDepartment.subjectCode === -1}
				onClick={() => handleDepartmentClick(selectedField.fieldCode, -1, '전체')}
			>
				해당 직군 전체 강좌
			</SelectedDepartment>
			{subjects.map((subject) => {
				return (
					<SelectedDepartment
						key={subject.subjectCode}
						isSelected={selectedDepartment.subjectCode === subject.subjectCode}
						onClick={() => handleDepartmentClick(selectedField.fieldCode, subject.subjectCode, subject.subjectName)}
					>
						{subject.subjectName}
					</SelectedDepartment>
				);
			})}
		</>
	);
}

export default DepartmentListContents;