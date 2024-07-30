import React from 'react';
import styled from 'styled-components';
import SidebarContents from './SidebarContents';
import FieldCategoryInput from './FieldCategoryInput';

const SidebarContainer = styled.div`
	position: absolute;
	top: 4rem;
	left: 0;
	height: calc(100% - 7rem);
	width: 19rem;
	margin: 1rem;
	background-color: #f4f4f4;
	flex: 0;
	box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
	transition: transform 500ms ease-in-out;

	&.hidden {
		transform: translateX(-110%);
	}

	&.visible {
		transform: translateX(0);
	}
`;

const HideButton = styled.button`
	width: 3rem;
	height: 3rem;
	float: right;
	padding: 0.5rem;
	background-color: #4caf50;
	color: white;
	border: none;
	cursor: pointer;
	transition:
		top 200ms ease-in-out,
		left 200ms ease-in-out;
	position: absolute;

	&:hover {
		background-color: #45a049;
	}

	&.hidden {
		left: calc(100% + 2rem);
		transform: translateX(0) translateY(0);
	}

	&.visible {
		left: calc(100% - 3rem);
		transform: translateX(0) translateY(0);
	}
`;

const Sidebar = ({ show, toggleSidebar }) => {
	return (
		<SidebarContainer className={show ? 'visible' : 'hidden'}>
			<HideButton onClick={toggleSidebar} className={show ? 'visible' : 'hidden'}>
				{show ? '<<' : '>>'}
			</HideButton>
			<SidebarContents />
			<FieldCategoryInput />
		</SidebarContainer>
	);
};

export default Sidebar;
