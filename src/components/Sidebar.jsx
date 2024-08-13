import React from 'react';
import styled from 'styled-components';
import SidebarContents from './SidebarContents';
import FieldCategoryInput from './FieldCategoryInput';
import { useRecoilState } from 'recoil';
import { showFieldInputState } from '../recoils/atoms';

const SidebarContainer = styled.div`
	min-width: 320px;
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	height: 750px;
	background-color: #e6f0ec;
	border-radius: 10px;
`;

const Sidebar = () => {
	const [isShowFieldCategoryInput, setIsShowFieldCategoryInput] = useRecoilState(showFieldInputState);
	return (
		<SidebarContainer>
			<SidebarContents />
			{isShowFieldCategoryInput && (
				<FieldCategoryInput
					onClose={() => {
						setIsShowFieldCategoryInput(false);
					}}
				/>
			)}
		</SidebarContainer>
	);
};

export default Sidebar;
