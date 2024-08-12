import React from 'react';
import styled from 'styled-components';
import SidebarContents from './SidebarContents';
import FieldCategoryInput from './FieldCategoryInput';
import { useRecoilValue } from 'recoil';
import { showFieldInputState } from '../recoils/atoms';

const SidebarContainer = styled.div`
	position: absolute;
	top: 4rem;
	left: 0;
	height: calc(100% - 7rem);
	width: 19rem;
	margin: 1rem;
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
