import styled from 'styled-components';
import { Title } from './FieldCategory';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedFieldLogState } from '../../recoils/atoms';
import useField from '../../hooks/useField';
import { FaTrashAlt } from 'react-icons/fa';

const Container = styled.div`
	width: 95%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const TitleContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: flex-start;
`;

const SearchLogContainer = styled.div`
	width: 100%;
	margin-bottom: 10px;
	background-color: white;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const LogItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 10px;
	margin: 5px 0;
	width: 95%;
	background-color: #ffffff;
	border: 1px solid #e0e0e0;
	border-radius: 6px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
	cursor: pointer;
	transition: background-color 0.2s ease;

	&:hover {
		background-color: #f0f0f0;
	}
`;

const LogText = styled.span`
	font-size: 14px;
	color: black;
`;

const DeleteButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	color: #d9534f;
	font-size: 16px;
	display: flex;
	align-items: center;

	&:hover {
		color: #c9302c;
	}
`;

const SearchLog = () => {
	const selectedFieldLogList = useRecoilValue(selectedFieldLogState);
	const setSelectedFieldLogList = useSetRecoilState(selectedFieldLogState);
	const { fetchLogFields } = useField();

	const handleDelete = (index) => {
		setSelectedFieldLogList((prevLog) => prevLog.filter((_, logIndex) => logIndex !== index));
	};

	return (
		<Container>
			<TitleContainer>
				<Title>검색기록</Title>
			</TitleContainer>
			<SearchLogContainer>
				{selectedFieldLogList.map((field, index) => {
					const restructuredFieldName = `${field.middleField.middleField} > ${field.smallField.smallField} > ${field.detailField.detailField}`;
					return (
						<LogItem key={index} onClick={() => fetchLogFields(field)}>
							<LogText>{restructuredFieldName}</LogText>
							<DeleteButton
								onClick={(e) => {
									e.stopPropagation();
									handleDelete(index);
								}}
							>
								<FaTrashAlt />
							</DeleteButton>
						</LogItem>
					);
				})}
			</SearchLogContainer>
		</Container>
	);
};

export default SearchLog;
