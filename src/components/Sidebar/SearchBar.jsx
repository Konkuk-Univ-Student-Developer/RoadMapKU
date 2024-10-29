import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useField from '../../hooks/useField';
import { useRecoilValue } from 'recoil';
import { allFieldDataState } from '../../recoils/atoms';

const SearchBarContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	position: relative;
`;

const SearchBarContent = styled.input`
	width: 90%;
	height: 40px;
	padding: 0 12px;
	margin-top: 10px;
	border: 1px solid #ddd;
	border-radius: 8px;
	background-color: #f9f9f9;
	font-size: 16px;
	outline: none;
	transition: all 0.3s ease;

	&:focus {
		border-color: #4a90e2;
		background-color: #fff;
		box-shadow: 0 0 5px rgba(74, 144, 226, 0.5);
	}
`;

const SuggestionsContainer = styled.div`
	position: absolute;
	top: 90%;
	left: 5%;
	width: 90%;
	background-color: white;
	border: 1px solid #ddd;
	border-radius: 8px;
	box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
	margin-top: 5px;
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
	const { fetchAllFields } = useField();
	const [userInput, setUserInput] = useState('');
	const [isFocused, setIsFocused] = useState(false);
	const allFieldData = useRecoilValue(allFieldDataState);

	useEffect(() => {
		fetchAllFields();
	}, []);

	const filteredFields = allFieldData.filter((field) => field.includes(userInput));

	return (
		<SearchBarContainer>
			<SearchBarContent
				type="text"
				placeholder="직군을 입력해주세요"
				value={userInput}
				onChange={(e) => setUserInput(e.target.value)}
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
			/>
			{isFocused && userInput && filteredFields.length > 0 && (
				<SuggestionsContainer>
					{filteredFields.map((field, index) => (
						<SuggestionItem key={index}>{field}</SuggestionItem>
					))}
				</SuggestionsContainer>
			)}
		</SearchBarContainer>
	);
};

export default SearchBar;
