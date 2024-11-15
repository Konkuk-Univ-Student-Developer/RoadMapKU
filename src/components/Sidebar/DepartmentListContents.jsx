import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { selectedSubjectState, selectedFieldState, subjectsInFieldState } from '../../recoils/atoms';
import useField from '../../hooks/useField';

const SelectedDepartment = styled.button`
	min-width: 250px;
	margin: 5px 5px;
	font-family: inherit;
	padding: 8px;
	cursor: pointer;
	background-color: ${(props) => (props.isSelected ? '#d3d3d3' : '#f2f2f2')};
	border-radius: 4px;
	text-align: center;
	font-size: large;
	border: none;

	&:hover {
		background-color: #e0e0e0;
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
		return <SelectedDepartment style={{ height: '37.5px' }} isSelected={true} />;
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
