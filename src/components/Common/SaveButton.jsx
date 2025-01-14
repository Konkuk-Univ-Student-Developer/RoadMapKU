import styled from 'styled-components';
import { Tooltip } from 'react-tooltip';
import { Icon } from '@iconify/react';
import bxCamera from '@iconify-icons/bx/bx-camera';
import { FaShareSquare } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';
import { Color } from '@styles';
import { encodeData } from '../Common/Utils';
import { toast } from 'react-toastify';
import { useApi } from '../../hooks/';
import { useRecoilValue } from 'recoil';
import { selectedMyTableContentsState, selectedFieldState } from '../../recoils/atoms';
import html2canvas from 'html2canvas';

const Btn = styled.button`
	position: fixed;
	bottom: 0.5rem;
	right: 1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	width: 5rem;
	height: 5rem;
	border: none;
	overflow: hidden;
	transition-duration: 0.3s;
	background-color: transparent;

	/* Hover effect on button width */
	&:hover {
		height: 14rem;
	}
`;

const DownloadBtn = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	transition-duration: 0.3s;

	background-color: ${Color.GREEN};
	color: white;
	border: none;
	border-radius: 50%;
	width: 4rem;
	height: 4rem;
	font-size: 24px;
	cursor: pointer;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

	/* Hover effect on sign */
	${Btn}:hover & {
		margin-top: 9rem;
		color: ${Color.GREEN};
		background-color: #f4f4f4;
		cursor: default;
	}
`;

const CaptureBtn = styled.div.attrs({
	id: 'share_capture_screenshot'
})`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition-duration: 0.3s;

	background-color: ${Color.GREEN};
	color: white;
	border: none;
	border-radius: 50%;
	width: 4rem;
	height: 4rem;
	font-size: 24px;
	cursor: pointer;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

	/* Hover effect on sign */
	${Btn}:hover & {
		margin-top: 4.5rem;
		opacity: 1;
	}

	&:hover {
		background-color: #02472a;
	}
`;

const UrlBtn = styled.div.attrs({
	id: 'share_copy_url'
})`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition-duration: 0.3s;

	background-color: ${Color.GREEN};
	color: white;
	border: none;
	border-radius: 50%;
	width: 4rem;
	height: 4rem;
	font-size: 24px;
	cursor: pointer;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

	/* Hover effect on comment */
	${Btn}:hover & {
		opacity: 1;
	}

	&:hover {
		background-color: #02472a;
	}
`;

const SaveButton = ({ roadmapContentRef }) => {
	const { serverApi } = useApi();

	const selectedMyTableContents = useRecoilValue(selectedMyTableContentsState);
	const selectedFieldData = useRecoilValue(selectedFieldState);

	// URL Button Click 이벤트
	const handleURLButtonClick = () => {
		const myTableDataString = JSON.stringify(selectedMyTableContents);
		const encodedMyTableData = encodeData(myTableDataString);

		const selectedFieldDataString = JSON.stringify(selectedFieldData);
		const encodedSelectedFieldData = encodeData(selectedFieldDataString);

		const baseURL = serverApi.defaults.baseURL;
		const newUrl = `${baseURL}/road-map?myTableData=${encodedMyTableData}&selectedFieldData=${encodedSelectedFieldData}`;
		notify_url('주소가 복사되었습니다.');

		navigator.clipboard.writeText(newUrl).catch((error) => console.log(error));
	};

	// 스크린샷 Button Click 이벤트
	const handleCaptureButtonClick = () => {
		if (roadmapContentRef.current) {
			html2canvas(roadmapContentRef.current)
				.then((canvas) => {
					const link = document.createElement('a');
					link.href = canvas.toDataURL('image/png');
					link.download = 'roadmap.png';
					link.click();
				})
				.catch((error) => {
					console.error('Error capturing the element:', error);
				});
		} else {
			console.error('Roadmap content is not available');
		}
		notify_url('스크린샷을 저장하였습니다.');
	};

	const notify_url = (text) => toast.success(text);

	return (
		<>
			<Btn>
				<UrlBtn data-tooltip-content="Copy URL" data-tooltip-id="url" onClick={handleURLButtonClick}>
					<FaLink style={{ pointerEvents: 'none' }} />
				</UrlBtn>
				<CaptureBtn data-tooltip-content="Save as PNG" data-tooltip-id="capture" onClick={handleCaptureButtonClick}>
					<Icon style={{ pointerEvents: 'none' }} icon={bxCamera} />
				</CaptureBtn>
				<DownloadBtn>
					<FaShareSquare />
				</DownloadBtn>
			</Btn>
			<Tooltip id="url" place="left" opacity={0.6} />
			<Tooltip id="capture" place="left" opacity={0.6} />
		</>
	);
};

export default SaveButton;
