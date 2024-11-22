import React, { useState } from 'react';
import styled from 'styled-components';
import FieldSearchBar from './FieldSearchBar/FieldSearchBar';
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
	const [showFieldSearchBar, setShowFieldSearchBar] = useState(true);

	const toggleFieldSearchBar = () => {
		setShowFieldSearchBar((prevShowFieldSearchBar) => !prevShowFieldSearchBar);
	};

	return (
		<>
			<Container>
				<FieldSearchBar show={showFieldSearchBar} toggleFieldSearchBar={toggleFieldSearchBar} />
				<Content>
					<RoadMapContainer />
				</Content>
			</Container>
		</>
	);
};

export default Main;
