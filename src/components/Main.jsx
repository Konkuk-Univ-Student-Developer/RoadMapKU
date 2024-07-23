import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import List from './List';

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const MainContent = styled.div`
	display: flex;
`;

const Content = styled.div`
	width: 100%;
	// background-color: blueviolet;
`;

const initialItems_com = [
	{ content: ['C프로그래밍'], row: 3, column: 2, code: 101, newRow: 0 },
	{ content: ['컴퓨터공학개론'], row: 11, column: 2, code: 102, newRow: 0 },
	{ content: ['테크니컬영어발표'], row: 12, column: 2, code: 103, newRow: 0 },

	{ content: ['JAVA프로그래밍'], row: 3, column: 3, code: 104, newRow: 0 },
	{ content: ['테크니컬영어말하기'], row: 12, column: 3, code: 105, newRow: 0 },

	{ content: ['웹프로그래밍'], row: 2, column: 4, code: 201, newRow: 0 },
	{ content: ['객체지향프로그래밍'], row: 3, column: 4, code: 202, newRow: 0 },
	{ content: ['자료구조'], row: 6, column: 4, code: 203, newRow: 0 },
	{ content: ['테크니컬영문독해'], row: 12, column: 4, code: 204, newRow: 0 },
	{ content: ['전공기초프로젝트1'], row: 13, column: 4, code: 205, newRow: 0 },
	{ content: ['오픈소스SW입문'], row: 14, column: 4, code: 206, newRow: 0 },

	{ content: ['소프트웨어공학'], row: 3, column: 5, code: 207, newRow: 0 },
	{ content: ['컴퓨테이션이론'], row: 4, column: 5, code: 208, newRow: 0 },
	{ content: ['시스템프로그래밍'], row: 5, column: 5, code: 209, newRow: 0 },
	{ content: ['알고리즘'], row: 6, column: 5, code: 210, newRow: 0 },
	{ content: ['컴퓨터회로'], row: 7, column: 5, code: 211, newRow: 0 },
	{ content: ['인공지능'], row: 10, column: 5, code: 212, newRow: 0 },
	{ content: ['데이터통신'], row: 11, column: 5, code: 213, newRow: 0 },
	{ content: ['랜덤프로세스개론'], row: 12, column: 5, code: 214, newRow: 0 },
	{ content: ['전공기초프로젝트2'], row: 13, column: 5, code: 215, newRow: 0 },

	{ content: ['모바일프로그래밍'], row: 2, column: 6, code: 301, newRow: 0 },
	{ content: ['객체지향개발방법론'], row: 3, column: 6, code: 302, newRow: 0 },
	{ content: ['프로그래밍언어론'], row: 4, column: 6, code: 303, newRow: 0 },
	{ content: ['운영체제'], row: 5, column: 6, code: 304, newRow: 0 },
	{ content: ['알고리즘연습'], row: 6, column: 6, code: 305, newRow: 0 },
	{ content: ['컴퓨터구조'], row: 7, column: 6, code: 306, newRow: 0 },
	{ content: ['컴퓨터그래픽스'], row: 8, column: 6, code: 307, newRow: 0 },
	{ content: ['데이터베이스'], row: 9, column: 6, code: 308, newRow: 0 },
	{ content: ['디지털영상처리'], row: 10, column: 6, code: 309, newRow: 0 },
	{ content: ['컴퓨터네트워크'], row: 11, column: 6, code: 310, newRow: 0 },
	{ content: ['시그널프로세싱'], row: 12, column: 6, code: 311, newRow: 0 },
	{ content: ['K-Lab프로젝트1'], row: 13, column: 6, code: 312, newRow: 0 },
	{ content: ['산학협력프로젝트1'], row: 14, column: 6, code: 313, newRow: 0 },
	{ content: ['오픈소스SW프로젝트1'], row: 15, column: 6, code: 314, newRow: 0 },

	{ content: ['클라우드웹서비스'], row: 2, column: 7, code: 315, newRow: 0 },
	{ content: ['소프트웨어아키텍쳐'], row: 3, column: 7, code: 316, newRow: 0 },
	{ content: ['컴파일러'], row: 4, column: 7, code: 317, newRow: 0 },
	{ content: ['클라우드컴퓨팅'], row: 5, column: 7, code: 318, newRow: 0 },
	{ content: ['암호학'], row: 6, column: 7, code: 319, newRow: 0 },
	{ content: ['병렬프로그래밍'], row: 7, column: 7, code: 320, newRow: 0 },
	{ content: ['고급컴퓨터그래픽스'], row: 8, column: 7, code: 321, newRow: 0 },
	{ content: ['데이터사이언스'], row: 9, column: 7, code: 322, newRow: 0 },
	{ content: ['기계학습'], row: 10, column: 7, code: 323, newRow: 0 },
	{ content: ['네트워크프로그래밍'], row: 11, column: 7, code: 324, newRow: 0 },
	{ content: ['멀티미디어공학'], row: 12, column: 7, code: 325, newRow: 0 },
	{ content: ['K-Lab프로젝트2'], row: 13, column: 7, code: 326, newRow: 0 },
	{ content: ['산학협력프로젝트2'], row: 14, column: 7, code: 327, newRow: 0 },
	{ content: ['오픈소스SW프로젝트2'], row: 15, column: 7, code: 328, newRow: 0 },

	{ content: ['클라우드IoT서비스'], row: 2, column: 8, code: 401, newRow: 0 },
	{ content: ['소프트웨어V&V'], row: 3, column: 8, code: 402, newRow: 0 },
	{ content: ['임베디드시스템소프트웨어'], row: 4, column: 8, code: 403, newRow: 0 },
	{ content: ['분산시스템및컴퓨팅'], row: 5, column: 8, code: 404, newRow: 0 },
	{ content: ['협동분산시스템'], row: 6, column: 8, code: 405, newRow: 0 },
	{ content: ['가상현실'], row: 7, column: 8, code: 406, newRow: 0 },
	{ content: ['HCI'], row: 8, column: 8, code: 407, newRow: 0 },
	{ content: ['컴퓨터비전'], row: 9, column: 8, code: 408, newRow: 0 },
	{ content: ['자연어처리'], row: 10, column: 8, code: 409, newRow: 0 },
	{ content: ['테크니컬영어글쓰기'], row: 12, column: 8, code: 410, newRow: 0 },
	{ content: ['졸업프로젝트1'], row: 13, column: 8, code: 411, newRow: 0 },

	{ content: ['웹기술및응용'], row: 2, column: 9, code: 412, newRow: 0 },
	{ content: ['차세대분산시스템'], row: 5, column: 9, code: 413, newRow: 0 },
	{ content: ['컴퓨터정보보안'], row: 6, column: 9, code: 414, newRow: 0 },
	{ content: ['게임프로그래밍'], row: 7, column: 9, code: 415, newRow: 0 },
	{ content: ['UX디자인'], row: 8, column: 9, code: 416, newRow: 0 },
	{ content: ['무선및이동네트워크'], row: 11, column: 9, code: 417, newRow: 0 },
	{ content: ['컴퓨터공학세미나'], row: 12, column: 9, code: 418, newRow: 0 },
	{ content: ['졸업프로젝트2'], row: 13, column: 9, code: 419, newRow: 0 }
];

const initialItems_ex = [
	{ content: ['동해물과'], row: 3, column: 2, code: 501, newRow: 0 },

	{ content: ['백두산이'], row: 3, column: 3, code: 502, newRow: 0 },

	{ content: ['마르고'], row: 2, column: 4, code: 601, newRow: 0 },
	{ content: ['닳도록'], row: 3, column: 4, code: 602, newRow: 0 },
	{ content: ['무궁화'], row: 6, column: 4, code: 603, newRow: 0 },

	{ content: ['하느님이'], row: 3, column: 5, code: 607, newRow: 0 },
	{ content: ['보우하사'], row: 4, column: 5, code: 608, newRow: 0 },
	{ content: ['우리나라만세'], row: 5, column: 5, code: 609, newRow: 0 },
	{ content: ['남산위에'], row: 6, column: 5, code: 610, newRow: 0 },
	{ content: ['저소나무'], row: 7, column: 5, code: 611, newRow: 0 },

	{ content: ['철갑을두른듯'], row: 2, column: 6, code: 701, newRow: 0 },
	{ content: ['바람서리'], row: 3, column: 6, code: 702, newRow: 0 },
	{ content: ['불멸함은'], row: 4, column: 6, code: 703, newRow: 0 },
	{ content: ['우리기상일세'], row: 5, column: 6, code: 704, newRow: 0 },
	{ content: ['가을하늘'], row: 6, column: 6, code: 705, newRow: 0 },
	{ content: ['공활한데'], row: 7, column: 6, code: 706, newRow: 0 },
	{ content: ['높고구름없이'], row: 8, column: 6, code: 707, newRow: 0 },
	{ content: ['밝은달은'], row: 9, column: 6, code: 708, newRow: 0 },

	{ content: ['우리가슴'], row: 2, column: 7, code: 715, newRow: 0 },
	{ content: ['일편단심일세'], row: 3, column: 7, code: 716, newRow: 0 },
	{ content: ['이기상과'], row: 4, column: 7, code: 717, newRow: 0 },
	{ content: ['이마음으로'], row: 5, column: 7, code: 718, newRow: 0 },
	{ content: ['충성을'], row: 6, column: 7, code: 719, newRow: 0 },
	{ content: ['다하여'], row: 7, column: 7, code: 720, newRow: 0 },
	{ content: ['괴로우나'], row: 8, column: 7, code: 721, newRow: 0 },
	{ content: ['즐거우나'], row: 9, column: 7, code: 722, newRow: 0 },

	{ content: ['나라사랑하세'], row: 2, column: 8, code: 801, newRow: 0 },
	{ content: ['무궁화'], row: 3, column: 8, code: 802, newRow: 0 },
	{ content: ['삼천리'], row: 4, column: 8, code: 803, newRow: 0 },
	{ content: ['화려강산'], row: 5, column: 8, code: 804, newRow: 0 },
	{ content: ['대한사람'], row: 6, column: 8, code: 805, newRow: 0 },
	{ content: ['대한으로'], row: 7, column: 8, code: 806, newRow: 0 },
	{ content: ['길이'], row: 8, column: 8, code: 807, newRow: 0 },
	{ content: ['보전하세'], row: 9, column: 8, code: 808, newRow: 0 },

	{ content: ['lorem ipsum'], row: 2, column: 9, code: 812, newRow: 0 },
	{ content: ['lorem ipsum'], row: 5, column: 9, code: 813, newRow: 0 },
	{ content: ['lorem ipsum'], row: 6, column: 9, code: 814, newRow: 0 },
	{ content: ['lorem ipsum'], row: 7, column: 9, code: 815, newRow: 0 },
	{ content: ['lorem ipsum'], row: 8, column: 9, code: 816, newRow: 0 }
];

const Main = () => {
	const [showSidebar, setShowSidebar] = useState(true);
	const [courseItems, setCourseItems] = useState(initialItems_com);
	const [buttonDisabled, setButtonDisabled] = useState(false);

	const toggleSidebar = () => {
		setShowSidebar((prevShowSidebar) => !prevShowSidebar);
	};
	const toggleCourseItems = () => {
		if (buttonDisabled) return;
		setButtonDisabled(true);

		setCourseItems((prevItems) => (prevItems === initialItems_com ? initialItems_ex : initialItems_com));

		setTimeout(() => {
			setButtonDisabled(false);
		}, 1000);
	};

	return (
		<Container>
			<MainContent>
				<Sidebar show={showSidebar} toggleSidebar={toggleSidebar} />
				<Content>
					<button onClick={toggleCourseItems}>Toggle Course Items</button>
					<List show={showSidebar} courseItems={courseItems} />
				</Content>
			</MainContent>
		</Container>
	);
};

export default Main;
