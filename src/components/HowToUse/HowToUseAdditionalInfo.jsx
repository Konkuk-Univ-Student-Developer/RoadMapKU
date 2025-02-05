import React from 'react';
import styled from 'styled-components';
import { Color } from '@styles';
import { Pic1, Pic2 } from '@img';

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

const ContentsContainer = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-self: center;
	align-items: center;
	flex-grow: 1;
`;

const Step = styled.h2`
	font-size: 2rem;
	font-weight: 800;
	margin-bottom: 1rem;
	color: ${Color.TEXT_BLACK};
`;

const StepTitle2 = styled.h3`
	font-size: 1.3rem;
	font-weight: 600;
	margin-bottom: 1rem;
	margin-top: 1rem;
	color: ${Color.TEXT_BLACK};
`;

const StepContent = styled.h3`
	font-size: 1.2rem;
	font-weight: 500;
	margin-bottom: 1rem;
	margin-top: 1rem;
	color: ${Color.TEXT_BLACK};
	line-height: 1.5;
	text-align: center;
`;

const Illustration = styled.img`
	height: auto;
	max-width: 60%;
	margin-bottom: 1rem;
	border-radius: 0.4rem;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
`;

const FeaturesContainer = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 80%;
	box-sizing: border-box;
`;

const FeaturePicture = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

function HowToUseContents() {
	return (
		<Container>
			<ContentsContainer>
				<Step>추가 기능</Step>
				<FeaturesContainer>
					<FeaturePicture>
						<StepTitle2>상세정보 열람</StepTitle2>
						<Illustration src={Pic1} alt="상세정보 소개" />

						<StepContent>수업을 클릭하면 해당 수업 정보와 수강바구니 경쟁률을 확인할 수 있습니다.</StepContent>
					</FeaturePicture>

					<FeaturePicture>
						<StepTitle2>사진 저장과 공유</StepTitle2>
						<Illustration src={Pic2} alt="공유기능 소개" />
						<StepContent>
							하단 사진 버튼을 클릭해 내 로드맵을 사진으로 저장할 수 있으며,
							<br />
							URL로 공유도 가능합니다.
						</StepContent>
					</FeaturePicture>
				</FeaturesContainer>
			</ContentsContainer>
		</Container>
	);
}

export default HowToUseContents;
