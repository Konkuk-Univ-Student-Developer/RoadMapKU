import styled from 'styled-components';
import DepartmentList from './DepartmentList';
import FieldCategory from './FieldCategory';

const SidebarContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
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
