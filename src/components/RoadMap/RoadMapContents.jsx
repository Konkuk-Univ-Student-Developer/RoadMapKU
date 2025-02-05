import React, { useRef } from 'react';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SaveButton } from '@Common';
import { MyMapTable, RoadMapTable, CourseCreditTable } from '@Table';

const Container = styled.div`
	min-width: 50rem;
	width: 87%;
	display: flex;
	flex-direction: column;
`;

const MyRoadMapContainer = styled.div`
	padding-top: 10px;
`;

const RoadMapContents = () => {
	const myRoadmapContentRef = useRef(null);

	return (
		<Container>
			<RoadMapTable />
			<MyRoadMapContainer ref={myRoadmapContentRef} id="roadmap-content">
				<MyMapTable />
				<CourseCreditTable />
			</MyRoadMapContainer>
			<SaveButton myRoadmapContentRef={myRoadmapContentRef}></SaveButton>
			<ToastContainer
				position="bottom-center"
				limit={2}
				closeButton={false}
				autoClose={2000}
				hideProgressBar
				newestOnTop
				pauseOnHover={false}
				pauseOnFocusLoss={false}
			/>
		</Container>
	);
};

export default RoadMapContents;
