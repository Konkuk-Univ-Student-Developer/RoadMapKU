import styled from 'styled-components';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedFieldLogState } from '@recoils';
import { useField } from '@hooks';
import { FaX, FaTrash } from 'react-icons/fa6';
import { Color, fadeIn } from '@styles';

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

const Title = styled.h2`
	font-size: 15px;
	color: ${Color.GREEN};
	margin-bottom: 10px;
`;

const SearchLogContainer = styled.div`
	gap: 5px;
	width: 100%;
	min-height: 75px;
	margin-bottom: 10px;
	background-color: white;
	border-radius: 4px;
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
	border-radius: 20px;
	cursor: pointer;

	&:hover {
		background-color: #f0f0f0;
	}
`;

const LogText = styled.span`
	font-size: 13px;
	color: ${Color.BLACK};
`;

const DeleteButton = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	font-size: 13px;
	display: flex;
	align-items: center;
	transition: transform 0.2s ease;
	color: ${Color.LIGHT_GREY};

	&:hover {
		transform: scale(1.3);
	}
`;

const DeleteAllButton = styled.div`
	width: 60px;
	cursor: pointer;
	color: ${Color.LIGHT_GREY};
	font-size: 15px;
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
					초기화
					<FaTrash />
				</DeleteAllButton>
			</TitleContainer>
			<SearchLogContainer>
				{selectedFieldLogList.map((field, index) => {
					const middleFieldName = String(field.middleField.middleField).trim();
					const smallFieldName = String(field.smallField.smallField).trim();
					const detailFieldName = String(field.detailField.detailField).trim();

					const restructuredFieldName = `${middleFieldName} > ${smallFieldName} > ${detailFieldName}`;

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
