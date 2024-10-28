import styled from 'styled-components';

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

const SearchBar = () => {
	return <SearchBarContent type="text" placeholder="직군을 입력해주세요" />;
};

export default SearchBar;
