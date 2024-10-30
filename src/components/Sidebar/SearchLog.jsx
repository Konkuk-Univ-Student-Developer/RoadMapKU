import styled from 'styled-components';
import { Title } from './FieldCategory';
import { useRecoilValue } from 'recoil';
import { selectedFieldLogState } from '../../recoils/atoms';

const SearchLogContainer = styled.div`
	width: 95%;
	margin-bottom: 5px;
	display: flex;
	flex-direction: column;
	align-items: start;
`;

const SearchLog = () => {
	const selectedFieldLogList = useRecoilValue(selectedFieldLogState);

	return (
		<SearchLogContainer>
			<Title>검색기록</Title>
			<div>
				{selectedFieldLogList.map((field, index) => {
					const restructuredFieldName = `${field.middleField.name} > ${field.smallField.name} > ${field.detailField.name}`;
					return <div key={index}>{restructuredFieldName}</div>;
				})}
			</div>
		</SearchLogContainer>
	);
};

export default SearchLog;
