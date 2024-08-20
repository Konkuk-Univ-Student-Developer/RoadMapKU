import styled from 'styled-components';

const Container = styled.div`
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const MainTitle = styled.div`
	font-size: 100px;
	font-weight: 800;
`;

const SubTitle = styled.p`
	font-size: 50px;
	font-weight: 700;
	color: #056a3f;
`;

const Description = styled.div`
	font-size: 40px;
	font-weight: 500;
`;

const AboutUsContents = () => {
	return (
		<Container>
			<MainTitle>About Us</MainTitle>
			<SubTitle>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, porro explicabo, voluptatibus aspernatur
				totam natus consectetur ullam optio corporis mollitia sint. Dolorem beatae repellendus laboriosam fugiat,
				quisquam provident illo suscipit!
			</SubTitle>

			<Description>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, eveniet sequi! Laudantium, dolorum. Alias
				consectetur quidem, vero error eum doloremque optio. Quas assumenda aut optio ad quam adipisci voluptates
				magnam?
			</Description>
		</Container>
	);
};

export default AboutUsContents;
