import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import List from './List';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const MainContent = styled.div`
	display: flex;
`;

const Content = styled.div`
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
					<List show={showSidebar} />
				</Content>
			</MainContent>
		</Container>
	);
};

export default Main;
