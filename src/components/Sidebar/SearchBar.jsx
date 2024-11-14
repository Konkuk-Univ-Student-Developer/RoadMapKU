import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import useField from '../../hooks/useField';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { allFieldDataState, selectedFieldLogState } from '../../recoils/atoms';
import { FaSearch } from 'react-icons/fa';

const SearchBarContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	position: relative;
`;

const SearchBarContent = styled.div`
	width: 95%;
	height: 40px;
	padding: 0 5px;
	margin-top: 10px;
	border: 1px solid #ddd;
	border-radius: 8px;
	background-color: white;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const SearchBarInput = styled.input`
	border: none;
	border-radius: 8px;
	background-color: white;
	width: 100%;
	font-size: 16px;
	outline: none;
`;

const SearchIcon = styled(FaSearch)`
	width: 40px;
`;

const SuggestionsContainer = styled.div`
	position: absolute;
	top: 90%;
	left: 2%;
	width: 96%;
	background-color: white;
	border: 1px solid #ddd;
	border-radius: 8px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	margin-top: 4px;
	max-height: 200px;
	overflow-y: auto;
	z-index: 1000;
`;

const SuggestionItem = styled.div`
	padding: 10px;
	cursor: pointer;
	transition: background-color 0.2s;

	&:hover {
		background-color: #f0f0f0;
	}
`;

const SearchBar = () => {
	const { fetchAllFields, fetchLogFields } = useField();
	const [userInput, setUserInput] = useState('');
	const [isFocused, setIsFocused] = useState(false);
	const allFieldData = useRecoilValue(allFieldDataState);
	const setSelectedFieldLog = useSetRecoilState(selectedFieldLogState);
	const containerRef = useRef(null);

	useEffect(() => {
		fetchAllFields();

		const handleClickOutside = (event) => {
			if (containerRef.current && !containerRef.current.contains(event.target)) {
				setIsFocused(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	const filteredFields = allFieldData.filter((field) => field.detailFieldCode && field.detailField.includes(userInput));

	const onSuggestionItemClick = ({ middleField, smallField, detailField, detailFieldCode }) => {
		const restructuredFieldData = {
			middleField: { middleField },
			smallField: { middleField, smallField },
			detailField: { detailFieldCode, detailField }
		};

		fetchLogFields(restructuredFieldData);
		setSelectedFieldLog((prevState) => {
			const isDuplicate = prevState.some(
				(item) => item.detailField.detailFieldCode === restructuredFieldData.detailField.detailFieldCode
			);

			if (isDuplicate) return prevState;

			const newLog = [restructuredFieldData, ...prevState];
			if (newLog.length > 5) {
				newLog.pop();
			}
			return newLog;
		});
		setIsFocused(false);
	};

	return (
		<SearchBarContainer>
			<SearchBarContent>
				<SearchBarInput
					type="text"
					placeholder="직군을 입력해주세요"
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					onFocus={() => setIsFocused(true)}
				/>
				<SearchIcon />
			</SearchBarContent>
			{isFocused && filteredFields.length > 0 && (
				<SuggestionsContainer ref={containerRef}>
					{filteredFields.map((field, index) => (
						<SuggestionItem
							key={index}
							onClick={() => onSuggestionItemClick(field)}
						>{`${field.middleField} > ${field.smallField} > ${field.detailField}`}</SuggestionItem>
					))}
				</SuggestionsContainer>
			)}
		</SearchBarContainer>
	);
};

export default SearchBar;
