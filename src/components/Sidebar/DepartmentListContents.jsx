import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { selectedSubjectState, selectedFieldState, subjectsInFieldState } from '../../recoils/atoms';
import useField from '../../hooks/useField';

const SelectedDepartment = styled.button`
	min-width: 250px;
	height: 30px;
	margin: 5px 5px;
	font-size: 20px;
	cursor: pointer;
	font-weight: 600;
	background-color: ${(props) => (props.isSelected ? '#d3d3d3' : '#ffffff')};
	border: 1px solid #ccc;
	border-radius: 10px;
	width: auto;
	&:hover {
		background-color: #d3d3d3;
	}
`;

function DepartmentListContents() {
	const { fetchCoursesInFieldsAndSubjects, fetchCoursesInFields } = useField();
	const selectedField = useRecoilValue(selectedFieldState);
	const [selectedDepartment, setSelectedDepartment] = useRecoilState(selectedSubjectState);
	const subjects = useRecoilValue(subjectsInFieldState);

	const handleDepartmentClick = (fieldCode, subjectCode, subjectName) => {
		setSelectedDepartment({ subjectCode, subjectName });
		if (subjectCode > 0) {
			fetchCoursesInFieldsAndSubjects(fieldCode, subjectCode);
		} else {
			fetchCoursesInFields(fieldCode);
		}
	};

	if (!subjects.length) {
		return <SelectedDepartment isSelected={true} />;
	}

	return (
		<>
			<SelectedDepartment
				isSelected={selectedDepartment.subjectCode === -1}
				onClick={() => handleDepartmentClick(selectedField.detailField?.detailFieldCode, -1, '전체')}
			>
				전체 학과
			</SelectedDepartment>
			{subjects.map((subject) => {
				return (
					<SelectedDepartment
						key={subject.subjectCode}
						isSelected={selectedDepartment.subjectCode === subject.subjectCode}
						onClick={() =>
							handleDepartmentClick(
								selectedField.detailField?.detailFieldCode,
								subject.subjectCode,
								subject.subjectName
							)
						}
					>
						{subject.subjectName}
					</SelectedDepartment>
				);
			})}
		</>
	);
}

export default DepartmentListContents;
