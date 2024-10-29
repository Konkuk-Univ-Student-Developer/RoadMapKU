import styled from 'styled-components';
import { Title } from './FieldCategory';

const SearchLogContainer = styled.div`
	width: 95%;
	display: flex;
	flex-direction: column;
	align-items: start;
`;

const SearchLog = () => {
	return (
		<SearchLogContainer>
			<Title>검색기록</Title>
			<div>log</div>
		</SearchLogContainer>
	);
};

export default SearchLog;
