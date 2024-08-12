import React from 'react';
import styled from 'styled-components';
import SidebarContents from './SidebarContents';
import FieldCategoryInput from './FieldCategoryInput';
import { useRecoilValue } from 'recoil';
import { showFieldInputState } from '../recoils/atoms';

const SidebarContainer = styled.div`
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	width: 400px;
	height: 800px;
	background-color: #e6f0ec;
	border-radius: 10px;
`;

const Sidebar = () => {
	const isShowFieldCategoryInput = useRecoilValue(showFieldInputState);
	return (
		<SidebarContainer>
			<SidebarContents />
			{isShowFieldCategoryInput && <FieldCategoryInput />}
		</SidebarContainer>
	);
};

export default Sidebar;
