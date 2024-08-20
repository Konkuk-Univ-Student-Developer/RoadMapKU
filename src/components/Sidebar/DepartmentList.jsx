import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { selectedFieldState, selectedSubjectState, subjectsInFieldState } from '../../recoils/atoms';
import useField from '../../hooks/useField';
import { Title } from './FieldCategory';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const DepartmentContainer = styled.div`
	margin: 10px 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 95%;
	height: 310px;
	background: #036b3f;
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
	background-color: ${(props) => (props.isSelected ? '#d3d3d3' : '#ffffff')};
	border: 1px solid #ccc;
	border-radius: 10px;
	&:hover {
		background-color: #d3d3d3;
	}
`;

const TitleContainer = styled.div`
	width: 90%;
	display: flex;
	align-items: flex-start;
`;

const DepartmentList = () => {
	const { fetchCoursesInFieldsAndSubjects, fetchCoursesInFields } = useField();
	const selectedField = useRecoilValue(selectedFieldState);
	const subjects = useRecoilValue(subjectsInFieldState);

	const [selectedDepartment, setSelectedDepartment] = useRecoilState(selectedSubjectState);

	const handleDepartmentClick = (fieldCode, subjectCode, subjectName) => {
		setSelectedDepartment({ subjectCode, subjectName });
		if (subjectCode > 0) {
			fetchCoursesInFieldsAndSubjects(fieldCode, subjectCode);
		} else {
			fetchCoursesInFields(fieldCode);
		}
	};

	return (
		<Container>
			<TitleContainer>
				<Title style={{ marginBottom: '0' }}>학과 리스트</Title>
			</TitleContainer>
			<DepartmentContainer>
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
			</DepartmentContainer>
		</Container>
	);
};

export default DepartmentList;
