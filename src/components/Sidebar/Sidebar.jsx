import React from 'react';
import styled from 'styled-components';
import DepartmentList from './DepartmentList';
import FieldCategory from './FieldCategory';
import SearchBar from './SearchBar';

const SidebarContainer = styled.div`
	width: 85%;
	gap: 10px;
	min-width: 600px;
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #e6f0ec;
	border-radius: 10px;
	height: fit-content;
`;

const Sidebar = () => {
	return (
		<SidebarContainer>
			<SearchBar />
			<FieldCategory />
			<DepartmentList />
		</SidebarContainer>
	);
};

export default Sidebar;
