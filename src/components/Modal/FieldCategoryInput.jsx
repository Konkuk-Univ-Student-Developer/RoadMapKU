import { useEffect, useRef } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
	detailFieldState,
	largeFieldState,
	middleFieldState,
	selectedFieldState,
	selectedSubjectState,
	showFieldInputState,
	smallFieldState
} from '../../recoils/atoms';
import styled from 'styled-components';

import Modal from './Modal';
import useField from '../../hooks/useField';
import { Color } from '../../style/Color';

const Container = styled.div`
	width: 90%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 20px;
	background-color: white;
	border-radius: 8px;
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

export const Title = styled.h2`
	color: ${Color.GREEN}
	font-size: 1.7rem;
	margin: 1rem;
	padding-bottom: 2rem;
`;

const SelectContainer = styled.div`
	width: 100%;
	gap: 15px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const Button = styled.button`
	margin-top: 15px;
	width: 200px;
	padding: 10px 20px;
	font-size: 16px;
	color: #fff;
	background-color: ${Color.GREEN};
	border: none;
	border-radius: 5px;
	cursor: pointer;
	&:hover {
		background-color: #02472a;
	}
`;

function FieldCategoryInput({ onClose }) {
	const largeRef = useRef();
	const middleRef = useRef();
	const smallRef = useRef();
	const detailRef = useRef();
	const largeFields = useRecoilValue(largeFieldState);
	const middleFields = useRecoilValue(middleFieldState);
	const smallFields = useRecoilValue(smallFieldState);
	const detailFields = useRecoilValue(detailFieldState);
	const [selectedFields, setSelectedFields] = useRecoilState(selectedFieldState);
	const setShowFieldInput = useSetRecoilState(showFieldInputState);
	const setSubjectsState = useSetRecoilState(selectedSubjectState);
	const {
		fetchLargeField,
		fetchMiddleField,
		fetchSmallField,
		fetchDetailField,
		fetchSubjectsInField,
		fetchCoursesInFields,
		resetFields
	} = useField();

	useEffect(() => {
		fetchLargeField();
	}, []);

	const selectLargeField = (e) => {
		if (!e.target.value) {
			alert('유효하지 않은 대분류 입니다.');
			resetFields('large');
			return;
		}
		const data = JSON.parse(e.target.value);
		fetchMiddleField(data);
	};

	const selectMiddleField = (e) => {
		if (!e.target.value) {
			alert('유효하지 않은 중분류 입니다.');
			resetFields('middle');
			return;
		}
		const data = JSON.parse(e.target.value);
		fetchSmallField(data);
	};

	const selectSmallField = (e) => {
		if (!e.target.value) {
			alert('유효하지 않은 소분류 입니다.');
			resetFields('small');
			return;
		}
		const data = JSON.parse(e.target.value);
		fetchDetailField(data);
	};

	const submitHandler = () => {
		const selectedField = {};

		if (largeRef.current.value) {
			selectedField.fieldCode = JSON.parse(largeRef.current.value).fieldCode;
			selectedField.largeField = JSON.parse(largeRef.current.value).largeField;
		} else {
			alert('대분류를 입력해주세요');
			return;
		}

		if (middleRef.current.value) {
			selectedField.fieldCode = JSON.parse(middleRef.current.value).fieldCode;
			selectedField.middleField = JSON.parse(middleRef.current.value).middleField;
		}

		if (smallRef.current.value) {
			selectedField.fieldCode = JSON.parse(smallRef.current.value).fieldCode;
			selectedField.smallField = JSON.parse(smallRef.current.value).smallField;
		}

		if (detailRef.current.value) {
			selectedField.fieldCode = JSON.parse(detailRef.current.value).fieldCode;
			selectedField.detailField = JSON.parse(detailRef.current.value).detailField;
		}
		fetchCoursesInFields(selectedField.fieldCode);
		setSelectedFields(selectedField);
		setSubjectsState({ subjectName: '전체', subjectCode: -1 });
		fetchSubjectsInField(selectedField.fieldCode);
		setShowFieldInput(false);
	};

	return (
		<Modal onClose={onClose}>
			<Container>
				<div>
					<Title>직군을 선택해주세요</Title>
				</div>
				<SelectContainer>
					<StyledSelect ref={largeRef} onChange={selectLargeField}>
						<option value="">대분류를 선택해주세요</option>
						{largeFields.map((item) => (
							<option
								key={item.fieldCode}
								value={JSON.stringify(item)}
								selected={item.largeField === selectedFields.largeField}
							>
								{item.largeField}
							</option>
						))}
					</StyledSelect>
					<StyledSelect
						ref={middleRef}
						onChange={selectMiddleField}
						disabled={middleFields.length > 0 ? '' : 'disabled'}
					>
						<option value="">중분류를 선택해주세요</option>
						{middleFields.map((item) => (
							<option
								key={item.fieldCode}
								value={JSON.stringify(item)}
								selected={item.middleField === selectedFields.middleField}
							>
								{item.middleField}
							</option>
						))}
					</StyledSelect>
					<StyledSelect ref={smallRef} onChange={selectSmallField} disabled={smallFields.length > 0 ? '' : 'disabled'}>
						<option value="">소분류를 선택해주세요</option>
						{smallFields.map((item) => (
							<option
								key={item.fieldCode}
								value={JSON.stringify(item)}
								selected={item.smallField === selectedFields.smallField}
							>
								{item.smallField}
							</option>
						))}
					</StyledSelect>
					<StyledSelect ref={detailRef} disabled={detailFields.length > 0 ? '' : 'disabled'}>
						<option value="">세분류를 선택해주세요</option>
						{detailFields.map((item) => (
							<option
								key={item.fieldCode}
								value={JSON.stringify(item)}
								selected={item.detailField === selectedFields.detailField}
							>
								{item.detailField}
							</option>
						))}
					</StyledSelect>
				</SelectContainer>
				<Button onClick={submitHandler} style={{ marginTop: '3rem' }}>
					검색하기
				</Button>
			</Container>
		</Modal>
	);
}

export default FieldCategoryInput;
