import React, { useState } from 'react';
import styled from 'styled-components';
import DepartmentList from './DepartmentList';
import SearchBar from './SearchBar';
import FieldInput from './FieldInput';
import SearchLog from './SearchLog';

const FieldSearchBarContainer = styled.div`
	width: 85%;
	gap: 10px;
	min-width: 600px;
	margin-top: 5rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	height: fit-content;
	box-shadow:
		0 2px 5px rgba(0, 0, 0, 0.1),
		0 1px 3px rgba(0, 0, 0, 0.08);
	border: 1px solid silver;
`;

const FieldSearchBar = () => {
	const [isShowDepartAndLog, setIsShowDepartAndLog] = useState(false);

	return (
		<FieldSearchBarContainer>
			<SearchBar showHandler={setIsShowDepartAndLog} />
			<FieldInput showHandler={setIsShowDepartAndLog} />
			{isShowDepartAndLog && (
				<>
					<DepartmentList />
					<SearchLog />
				</>
			)}
		</FieldSearchBarContainer>
	);
};

export default FieldSearchBar;
