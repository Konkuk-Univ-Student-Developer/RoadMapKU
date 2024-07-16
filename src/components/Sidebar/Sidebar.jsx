import React from 'react';
import './Sidebar.css';

const Sidebar = ({ show, toggleSidebar }) => {
	return (
		<div className={`sidebar ${show ? 'visible' : 'hidden'}`}>
			<button onClick={toggleSidebar} className={`toggle-button ${show ? 'visible' : 'hidden'}`}>
				{show ? '<<' : '>>'}
			</button>
			<div>Sidebar Content</div>
		</div>
	);
};

export default Sidebar;
