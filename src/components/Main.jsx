import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar/Sidebar';
import RoadMapContainer from './RoadMap/RoadMapContainer';
import FieldCategoryInput from './Modal/FieldCategoryInput';
import { showFieldInputState } from '../recoils/atoms';
import { useRecoilState } from 'recoil';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Content = styled.div`
	padding-top: 5rem;
	width: 100%;
`;

const Main = () => {
	const [showSidebar, setShowSidebar] = useState(true);
	const [isShowFieldCategoryInput, setIsShowFieldCategoryInput] = useRecoilState(showFieldInputState);

	const toggleSidebar = () => {
		setShowSidebar((prevShowSidebar) => !prevShowSidebar);
	};

	return (
		<>
			{isShowFieldCategoryInput && (
				<FieldCategoryInput
					onClose={() => {
						setIsShowFieldCategoryInput(false);
					}}
				/>
			)}
			<Container>
				<Sidebar show={showSidebar} toggleSidebar={toggleSidebar} />
				<Content>
					<RoadMapContainer />
				</Content>
			</Container>
		</>
	);
};

export default Main;
