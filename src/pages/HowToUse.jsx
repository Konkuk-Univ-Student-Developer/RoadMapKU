import { MainContainer, Footer } from '@Common';
import { HowToUseStep1, HowToUseStep2, HowToUseStep3, HowToUseAdditionalInfo } from '@HowToUse';
import { BackgroundContents } from '@Background';
import styled from 'styled-components';

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow: hidden;
`;

const ContentsContainer = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	overflow-y: auto;
	z-index: 1;
`;

const SubContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const LastContainer = styled.div`
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

function HowToUse() {
	return (
		<MainContainer>
			<Container>
				<BackgroundContents />
				<ContentsContainer>
					<SubContainer>
						<HowToUseStep1 />
					</SubContainer>
					<SubContainer>
						<HowToUseStep2 />
					</SubContainer>
					<SubContainer>
						<HowToUseStep3 />
					</SubContainer>

					<SubContainer>
						<LastContainer>
							<HowToUseAdditionalInfo />
						</LastContainer>
						<Footer />
					</SubContainer>
				</ContentsContainer>
			</Container>
		</MainContainer>
	);
}

export default HowToUse;
