import styled from 'styled-components';
import DepartmentList from './DepartmentList';
import FieldCategory from './FieldCategory';

const SidebarContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const SidebarContents = () => {
	return (
		<>
			<SidebarContainer>
				<FieldCategory />
				<DepartmentList />
			</SidebarContainer>
		</>
	);
};

export default SidebarContents;
