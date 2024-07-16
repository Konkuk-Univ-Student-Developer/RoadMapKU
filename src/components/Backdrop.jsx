import React from 'react';
import styled, { css } from 'styled-components';

const BackdropContainer = styled.div`
	position: fixed;
	z-index: 100;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.8);
	${(props) =>
		props.show
			? css`
					display: block;
				`
			: css`
					display: none;
				`}
`;

const Backdrop = (props) => {
	return <BackdropContainer show={props.show} />;
};

export default Backdrop;
