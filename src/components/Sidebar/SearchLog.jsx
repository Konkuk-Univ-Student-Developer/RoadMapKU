import styled from 'styled-components';
import { Title } from './FieldCategory';
import { useRecoilValue } from 'recoil';
import { selectedFieldLogState } from '../../recoils/atoms';
import useField from '../../hooks/useField';

const SearchLogContainer = styled.div`
	width: 95%;
	margin-bottom: 5px;
	display: flex;
	flex-direction: column;
	align-items: start;
`;

const SearchLog = () => {
	const selectedFieldLogList = useRecoilValue(selectedFieldLogState);
	const { fetchLogFields } = useField();

	return (
		<SearchLogContainer>
			<Title>검색기록</Title>
			<div>
				{selectedFieldLogList.map((field, index) => {
					const restructuredFieldName = `${field.middleField.middleField} > ${field.smallField.smallField} > ${field.detailField.detailField}`;
					return (
						<div key={index} onClick={() => fetchLogFields(field)}>
							{restructuredFieldName}
						</div>
					);
				})}
			</div>
		</SearchLogContainer>
	);
};

export default SearchLog;
