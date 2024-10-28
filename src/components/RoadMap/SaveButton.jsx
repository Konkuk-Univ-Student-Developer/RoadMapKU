import styled from 'styled-components';
import { Icon } from '@iconify/react';
import bxCamera from '@iconify-icons/bx/bx-camera';
import { IoMdDownload } from 'react-icons/io';
import { FaLink } from 'react-icons/fa6';

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

	background-color: #036b3f;
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
		color: #036b3f;
		background-color: #f4f4f4;
		cursor: default;
	}
`;

const CaptureBtn = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition-duration: 0.3s;

	background-color: #036b3f;
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

const UrlBtn = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition-duration: 0.3s;

	background-color: #036b3f;
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

const SaveButton = ({ onClickURL, onClickCapture }) => {
	return (
		<Btn>
			<UrlBtn onClick={onClickURL}>
				<FaLink />
			</UrlBtn>
			<CaptureBtn onClick={onClickCapture}>
				<Icon icon={bxCamera} />
			</CaptureBtn>
			<DownloadBtn>
				<IoMdDownload />
			</DownloadBtn>
		</Btn>
	);
};

export default SaveButton;