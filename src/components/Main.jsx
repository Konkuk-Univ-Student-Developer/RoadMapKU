import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import RoadMapContainer from './RoadMap/RoadMapContainer';

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
	width: 100%;
	// background-color: blueviolet;
`;

const Main = () => {
	const [showSidebar, setShowSidebar] = useState(true);

	const toggleSidebar = () => {
		setShowSidebar((prevShowSidebar) => !prevShowSidebar);
	};

	return (
		<Container>
			<MainContent>
				<Sidebar show={showSidebar} toggleSidebar={toggleSidebar} />
				<Content>
					<RoadMapContainer show={showSidebar} />
				</Content>
			</MainContent>
		</Container>
	);
};

export default Main;
