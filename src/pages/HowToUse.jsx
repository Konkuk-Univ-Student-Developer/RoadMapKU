import { MainContainer } from '@Common';
import { HowToUseContents } from '@HowToUse';
import { BackgroundContents } from '@Background';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

function HowToUse() {
	return (
		<MainContainer>
			<Container>
				<BackgroundContents />
				<HowToUseContents />
			</Container>
		</MainContainer>
	);
}

export default HowToUse;
