import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { selectedSubjectState, selectedFieldState, subjectsInFieldState } from '../../../recoils/atoms';
import useField from '../../../hooks/useField';
import { Color } from '../../../style/Color';

const SelectedDepartment = styled.div.attrs(({ subjectName, fieldCode }) => ({
	id: `selected_dept_${subjectName} - field_code_${fieldCode}`
}))`
	width: 15.2%;
	margin: 5px 5px;
	padding: 8px;
	cursor: pointer;
	background: ${({ $isSelected }) => ($isSelected ? Color.HOVER_GREEN : 'white')};
	color: ${({ $isSelected }) => ($isSelected ? Color.GREEN : Color.BLACK)};
	border-radius: 4px;
	text-align: center;
	font-size: 14px;
	overflow: hidden;
	text-overflow: ellipsis;
	&:hover {
		background-color: ${Color.HOVER_GREEN};
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

	return (
		<>
			{subjects.length > 0 && (
				<SelectedDepartment
					$isSelected={selectedDepartment.subjectCode === -1}
					onClick={() => handleDepartmentClick(selectedField.detailField?.detailFieldCode, -1, '전체')}
				>
					전체 학과
				</SelectedDepartment>
			)}
			{subjects.map((subject) => {
				return (
					<SelectedDepartment
						key={subject.subjectCode}
						$isSelected={selectedDepartment.subjectCode === subject.subjectCode}
						subjectName={subject.subjectName}
						fieldCode={selectedField.detailField?.detailFieldCode}
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
