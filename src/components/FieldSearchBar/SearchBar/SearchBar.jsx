import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import useField from '../../../hooks/useField';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { allFieldDataState, selectedFieldLogState, selectedFieldState } from '../../../recoils/atoms';
import { FaSearch, FaAngleDoubleDown, FaAngleDoubleUp } from 'react-icons/fa';
import { Color } from '../../../style/Color';

const SearchBarContainer = styled.div`
	width: 95%;
	display: flex;
	justify-content: center;
	position: relative;
	margin-bottom: ${({ $isToggleOn }) => !$isToggleOn && '10px'};
`;

const SearchBarContent = styled.div`
	width: 100%;
	height: 40px;
	padding: 0 5px;
	margin-top: 10px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	border-radius: 4px;
	background-color: white;

	display: flex;
	align-items: center;
	justify-content: space-between;

	border: ${({ $isFocused }) => ($isFocused ? `1px solid ${Color.GREEN}` : '1px solid silver')};
`;

const SearchBarInput = styled.input`
	border: none;
	border-radius: 8px;
	background-color: white;
	width: 100%;
	font-size: 14px;
	outline: none;
`;

const SearchIcon = styled(FaSearch)`
	width: 40px;
`;

const ToggleDownIcon = styled(FaAngleDoubleDown)`
	width: 40px;
	cursor: pointer;

	&:hover {
		transform: scale(1.3);
	}
`;

const ToggleUpIcon = styled(FaAngleDoubleUp)`
	width: 40px;
	cursor: pointer;

	&:hover {
		transform: scale(1.3);
	}
`;

const SuggestionsContainer = styled.div`
	position: absolute;
	top: 90%;
	width: 100%;
	background-color: white;
	border: 1px solid #ddd;
	border-radius: 8px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	margin-top: 4px;
	max-height: 200px;
	overflow-y: auto;
	z-index: 1000;
`;

const SuggestionItem = styled.div.attrs(({ searchField }) => ({
	id: `field_name_${searchField}`
}))`
	padding: 10px;
	cursor: pointer;
	transition: background-color 0.2s;

	&:hover {
		background-color: #f0f0f0;
	}
`;

const HighlightedText = styled.span`
	background-color: yellow;
	color: black;
`;

const highlightText = (text, query) => {
	if (!query) return text;

	const parts = text.split(new RegExp(`(${query})`, 'gi'));
	return parts.map((part, index) => (part === query ? <HighlightedText key={index}>{part}</HighlightedText> : part));
};

const SearchBar = ({ showHandler, isToggleOn, setIsToggleOn }) => {
	const { fetchAllFields, fetchLogFields } = useField();
	const [userInput, setUserInput] = useState('');
	const [isFocused, setIsFocused] = useState(false);
	const allFieldData = useRecoilValue(allFieldDataState);
	const selectedField = useRecoilValue(selectedFieldState);
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

	const onSuggestionItemClick = (field) => {
		if (selectedField?.detailField?.detailFieldCode === field.detailFieldCode) {
			setIsFocused(false);
			return;
		}
		const restructuredFieldData = {
			middleField: {
				middleField: field.middleField,
				middleFieldCode: field.middleFieldCode
			},
			smallField: { smallField: field.smallField, smallFieldCode: field.smallFieldCode },
			detailField: { detailField: field.detailField, detailFieldCode: field.detailFieldCode }
		};

		fetchLogFields(restructuredFieldData);
		setSelectedFieldLog((prevState) => {
			const isDuplicate = prevState.some(
				(item) => item.detailField.detailFieldCode === restructuredFieldData.detailField.detailFieldCode
			);

			if (isDuplicate) return prevState;

			const newLog = [...prevState, restructuredFieldData];
			if (newLog.length > 5) {
				newLog.shift();
			}
			return newLog;
		});
		setIsFocused(false);
		showHandler(true);
		setIsToggleOn(true);
	};

	const toggleClickHandler = (event) => {
		event.stopPropagation();
		setIsToggleOn((prev) => !prev);
	};

	const onSearchBarContentClickHandler = () => {
		setIsFocused(true);
	};

	return (
		<SearchBarContainer $isToggleOn={isToggleOn}>
			<SearchBarContent $isFocused={isFocused} onClick={onSearchBarContentClickHandler}>
				<SearchBarInput
					type="text"
					placeholder="직군을 입력해주세요"
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					onFocus={() => setIsFocused(true)}
				/>
				<SearchIcon />
				{!isToggleOn ? <ToggleDownIcon onClick={toggleClickHandler} /> : <ToggleUpIcon onClick={toggleClickHandler} />}
			</SearchBarContent>

			{isFocused && filteredFields.length > 0 && (
				<SuggestionsContainer ref={containerRef}>
					{filteredFields.map((field, index) => {
						const middleFieldName = String(field.middleField).trim();
						const smallFieldName = String(field.smallField).trim();
						const detailFieldName = String(field.detailField).trim();

						const structuredField = `${middleFieldName} > ${smallFieldName} > ${detailFieldName}`;

						return (
							<SuggestionItem searchField={field.detailField} key={index} onClick={() => onSuggestionItemClick(field)}>
								{highlightText(structuredField, userInput)}
							</SuggestionItem>
						);
					})}
				</SuggestionsContainer>
			)}
		</SearchBarContainer>
	);
};

export default SearchBar;
