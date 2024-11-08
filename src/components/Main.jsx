import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar/Sidebar';
import RoadMapContainer from './RoadMap/RoadMapContainer';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Content = styled.div`
	padding-top: 5rem;
	width: 100%;
	display: flex;
	justify-content: center;
`;

const Main = () => {
	const [showSidebar, setShowSidebar] = useState(true);

	const toggleSidebar = () => {
		setShowSidebar((prevShowSidebar) => !prevShowSidebar);
	};

	return (
		<>
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
