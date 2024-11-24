import styled from 'styled-components';
import { Title } from './FieldCategory';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedFieldLogState } from '../../recoils/atoms';
import useField from '../../hooks/useField';
import { FaX, FaTrash } from 'react-icons/fa6';
import { fadeIn } from '../../style/Frames';

const Container = styled.div`
	width: 95%;
	display: flex;
	flex-direction: column;
	align-items: center;
	animation: ${fadeIn} 0.2s ease-in-out;
`;

const TitleContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const SearchLogContainer = styled.div`
	gap: 5px;
	width: 98%;
	min-height: 75px;
	margin-bottom: 10px;
	padding: 0.5% 1%;
	background-color: white;
	border-radius: 4px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	display: flex;
	flex-direction: row;
	align-items: start;
	flex-wrap: wrap;
`;

const LogItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px;
	background-color: white;
	border: 1.5px solid #c0c0c0;
	border-radius: 20px;
	cursor: pointer;

	&:hover {
		background-color: #f0f0f0;
	}
`;

const LogText = styled.span`
	font-size: 13px;
	color: black;
`;

const DeleteButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	font-size: 13px;
	display: flex;
	align-items: center;
	transition: transform 0.2s ease;
	color: #8e8e8e;

	&:hover {
		transform: scale(1.3);
	}
`;

const DeleteAllButton = styled.div`
	width: 140px;
	cursor: pointer;
	color: #036b3f;
	font-size: 15px;
	font-weight: 700;
	display: flex;
	align-items: center;
	justify-content: space-between;

	&:hover {
		color: #d9534f;
	}
`;

const SearchLog = () => {
	const selectedFieldLogList = useRecoilValue(selectedFieldLogState);
	const setSelectedFieldLogList = useSetRecoilState(selectedFieldLogState);
	const { fetchLogFields } = useField();

	const handleDelete = (index) => {
		setSelectedFieldLogList((prevLog) => prevLog.filter((_, logIndex) => logIndex !== index));
	};

	const onClickDeleteAllLogs = () => setSelectedFieldLogList([]);

	return (
		<Container>
			<TitleContainer>
				<Title>검색기록</Title>
				<DeleteAllButton onClick={onClickDeleteAllLogs}>
					모든 검색기록 삭제
					<FaTrash />
				</DeleteAllButton>
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
								<FaX />
							</DeleteButton>
						</LogItem>
					);
				})}
			</SearchLogContainer>
		</Container>
	);
};

export default SearchLog;
