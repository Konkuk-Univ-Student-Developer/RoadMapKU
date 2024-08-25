import React from 'react';
import styled from 'styled-components';
import DepartmentList from './DepartmentList';
import FieldCategory from './FieldCategory';

const SidebarContainer = styled.div`
	gap: 10px;
	min-width: 320px;
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	background-color: #e6f0ec;
	border-radius: 10px;
	height: fit-content;
`;

const Sidebar = () => {
	return (
		<SidebarContainer>
			<FieldCategory />
			<DepartmentList />
		</SidebarContainer>
	);
};

export default Sidebar;
