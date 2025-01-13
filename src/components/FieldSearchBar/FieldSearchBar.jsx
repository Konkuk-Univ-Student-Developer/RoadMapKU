import React, { useState } from 'react';
import styled from 'styled-components';
import { SearchLog, DepartmentList, SearchBar, FieldInput } from '@FieldSearchBar';
import { Color } from '@styles';
import { useRecoilState } from 'recoil';
import { isShowDepartAndLogState } from '@recoils';

const FieldSearchBarContainer = styled.div`
	width: 85%;
	gap: 10px;
	min-width: 600px;
	margin-top: 30px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	height: fit-content;
	border: 1px solid ${Color.LIGHT_GREY};
`;

const FieldSearchBar = () => {
	const [isShowDepartAndLog, setIsShowDepartAndLog] = useRecoilState(isShowDepartAndLogState);
	const [isToggleOn, setIsToggleOn] = useState(true);

	return (
		<FieldSearchBarContainer>
			<SearchBar showHandler={setIsShowDepartAndLog} isToggleOn={isToggleOn} setIsToggleOn={setIsToggleOn} />
			{isToggleOn && (
				<>
					<FieldInput showHandler={setIsShowDepartAndLog} isShowDepartAndLog={isShowDepartAndLog} />
					{isShowDepartAndLog && (
						<>
							<DepartmentList />
							<SearchLog />
						</>
					)}
				</>
			)}
		</FieldSearchBarContainer>
	);
};

export default FieldSearchBar;
