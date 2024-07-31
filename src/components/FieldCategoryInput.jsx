import { useEffect, useRef } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
	detailFieldState,
	largeFieldState,
	middleFieldState,
	selectedFieldState,
	smallFieldState
} from '../recoils/atoms';
import useClient from '../hooks/useClient';
import styled from 'styled-components';
import { FixButton } from './FieldCategory';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	background-color: #f9f9f9;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledSelect = styled.select`
	width: 100%;
	max-width: 300px;
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 4px;
	font-size: 16px;
	background-color: #fff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

	&:focus {
		border-color: #007bff;
		outline: none;
		box-shadow: 0 0 0 2px rgba(38, 143, 255, 0.2);
	}
`;

const FieldCategoryInput = () => {
	const largeRef = useRef();
	const middleRef = useRef();
	const smallRef = useRef();
	const detailRef = useRef();
	const largeFields = useRecoilValue(largeFieldState);
	const middleFields = useRecoilValue(middleFieldState);
	const smallFields = useRecoilValue(smallFieldState);
	const detailFields = useRecoilValue(detailFieldState);
	const setSelectedFields = useSetRecoilState(selectedFieldState);
	const { fetchLargeField, fetchMiddleField, fetchSmallField, fetchDetailField } = useClient();

	useEffect(() => {
		fetchLargeField();
	}, []);

	const selectLargeField = (e) => {
		const data = JSON.parse(e.target.value);
		const reqData = {
			largeFieldCode: data.fieldCode
		};
		fetchMiddleField(reqData);
	};

	const selectMiddleField = (e) => {
		const data = JSON.parse(e.target.value);
		const reqData = {
			middleFieldCode: data.fieldCode
		};
		fetchSmallField(reqData);
	};

	const selectSmallField = (e) => {
		const data = JSON.parse(e.target.value);
		const reqData = {
			smallFieldCode: data.fieldCode
		};
		fetchDetailField(reqData);
	};

	const submitHandler = () => {
		const selectedField = {};
		if (largeRef.current.value) {
			selectedField.largeField = JSON.parse(largeRef.current.value).largeField;
		}
		if (middleRef.current.value) {
			selectedField.middleField = JSON.parse(middleRef.current.value).middleField;
		}
		if (smallRef.current.value) {
			selectedField.smallField = JSON.parse(smallRef.current.value).smallField;
		}
		if (detailRef.current.value) {
			selectedField.detailField = JSON.parse(detailRef.current.value).detailField;
		}
		setSelectedFields(selectedField);
	};

	return (
		<Container>
			<StyledSelect ref={largeRef} onChange={selectLargeField}>
				{largeFields.map((item) => (
					<option key={item.fieldCode} value={JSON.stringify(item)}>
						{item.largeField}
					</option>
				))}
			</StyledSelect>
			<StyledSelect ref={middleRef} onChange={selectMiddleField} disabled={middleFields.length > 0 ? '' : 'disabled'}>
				<option value="">분야를 선택해주세요</option>
				{middleFields.map((item) => (
					<option key={item.fieldCode} value={JSON.stringify(item)}>
						{item.middleField}
					</option>
				))}
			</StyledSelect>
			<StyledSelect ref={smallRef} onChange={selectSmallField} disabled={smallFields.length > 0 ? '' : 'disabled'}>
				<option value="">분야를 선택해주세요</option>
				{smallFields.map((item) => (
					<option key={item.fieldCode} value={JSON.stringify(item)}>
						{item.smallField}
					</option>
				))}
			</StyledSelect>
			<StyledSelect ref={detailRef} disabled={detailFields.length > 0 ? '' : 'disabled'}>
				<option value="">분야를 선택해주세요</option>
				{detailFields.map((item) => (
					<option key={item.fieldCode} value={JSON.stringify(item)}>
						{item.detailField}
					</option>
				))}
			</StyledSelect>
			<FixButton onClick={submitHandler}>검색하기</FixButton>
		</Container>
	);
};

export default FieldCategoryInput;
