import React, { useEffect, useRef } from 'react';
import { useOutsideClick } from '@hooks';
import { ModalContainer } from '@Modal';
import * as L from '@Common/Modal/ModalStyles';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Modal({ onClose, children, width }) {
	const modalRef = useRef(null);
	const handleClose = () => {
		onClose?.();
	};

	useOutsideClick(modalRef, handleClose);

	useEffect(() => {
		const $body = document.querySelector('body');
		const originalOverflow = $body.style.overflow;
		$body.style.overflow = 'hidden';

		return () => {
			$body.style.overflow = originalOverflow;
		};
	}, []);

	return (
		<ModalContainer>
			<L.Overlay>
				<L.ModalWrap ref={modalRef} width={width}>
					<L.ButtonContainer>
						<i className="fa-solid fa-xmark" onClick={handleClose} style={{ cursor: 'pointer', fontSize: '30px' }}></i>
					</L.ButtonContainer>
					<L.Contents>{children}</L.Contents>
				</L.ModalWrap>
			</L.Overlay>
		</ModalContainer>
	);
}

export default Modal;
