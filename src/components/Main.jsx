import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar/Sidebar';
import RoadMapContainer from './RoadMap/RoadMapContainer';
import FieldCategoryInput from './Modal/FieldCategoryInput';
import { showFieldInputState } from '../recoils/atoms';
import { useRecoilState } from 'recoil';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const MainContent = styled.div`
	min-width: 1200px;
	display: flex;
`;

const Content = styled.div`
	padding-top: 5rem;
	width: calc(100% - 320px);
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
				<MainContent>
					<Sidebar show={showSidebar} toggleSidebar={toggleSidebar} />
					<Content>
						<RoadMapContainer />
					</Content>
				</MainContent>
			</Container>
		</>
	);
};

export default Main;
