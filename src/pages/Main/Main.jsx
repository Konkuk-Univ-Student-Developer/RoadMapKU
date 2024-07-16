import React, { useState } from 'react';
import './Main.css';
import Sidebar from '../../components/Sidebar/Sidebar';
import List from '../../components/List/List';

const Main = () => {
	const [showSidebar, setShowSidebar] = useState(true);

	const toggleSidebar = () => {
		setShowSidebar((prevShowSidebar) => !prevShowSidebar);
	};

	return (
		<div className="container">
			<div className="main-content">
				<Sidebar show={showSidebar} toggleSidebar={toggleSidebar} />
				<div className="content">
					<List show={showSidebar} />
				</div>
			</div>
		</div>
	);
};

export default Main;
