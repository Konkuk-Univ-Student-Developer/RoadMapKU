import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const DropdownContainer = styled.div`
	position: absolute;
	font-family: 'Pretendard-regular';
	cursor: pointer;
	background-color: white;
	border: 1px solid #ccc;
	border-radius: 4px;
	box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
	z-index: 1000;
	min-width: 150px;
	padding: 10px;
	width: 1rem;
`;

const DropdownPortal = ({ x, y, children, onClose, cellRef }) => {
	const dropdownRef = useRef(null);
	useEffect(() => {
		// 창 크기 변경 또는 드롭다운 외부 클릭 시 창 닫음
		const handleOutsideOrResize = (event) => {
			if (
				event.type === 'resize' || // 창 크기 변경
				(dropdownRef.current &&
					!dropdownRef.current.contains(event.target) &&
					cellRef.current && //현재 클릭된 셀은 제외 (따로 처리)
					!cellRef.current.contains(event.target))
			) {
				onClose();
			}
		};

		// 외부 클릭과 창 크기 변경 감지
		document.addEventListener('mousedown', handleOutsideOrResize);
		window.addEventListener('resize', handleOutsideOrResize);

		return () => {
			document.removeEventListener('mousedown', handleOutsideOrResize);
			window.removeEventListener('resize', handleOutsideOrResize);
		};
	}, [onClose, cellRef]);

	return ReactDOM.createPortal(
		<DropdownContainer ref={dropdownRef} style={{ top: y, left: x }} className="dropdown-container">
			{children}
		</DropdownContainer>,
		document.body
	);
};

export default DropdownPortal;
