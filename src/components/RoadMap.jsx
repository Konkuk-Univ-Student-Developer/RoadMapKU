import styled from 'styled-components';

const ShareButton = styled.a`
	position: fixed;
	right: 20px;
	bottom: 20px;
	padding: 10px 20px;
	background-color: #007bff;
	color: white;
	text-align: center;
	border-radius: 5px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	transition: background-color 0.3s;

	&:hover {
		background-color: #0056b3;
	}
`;

function RoadMap() {
	return (
		<>
			<h1>Road Map Page!</h1>
			<ShareButton>Share</ShareButton>
		</>
	);
}

export default RoadMap;
