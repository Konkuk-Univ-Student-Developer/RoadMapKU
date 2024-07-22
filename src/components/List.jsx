import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { immergeBounce, dismissBounce, slideUp, slideDown } from '../Animation/Animation';
import Modal from './Modal/Modal';
import Backdrop from './Backdrop';

const Content = styled.div`
	margin-left: auto;
	display: flex;
	flex-direction: column;
	transition: width 500ms ease-in-out;

	&.with-sidebar {
		width: calc(100% - 20rem);
	}

	&.full-width {
		width: 100%;
	}
`;

const Title = styled.div`
	margin-right: auto;
	margin-left: 1rem;
	margin-top: 1rem;
	font-size: xx-large;
	font-weight: bolder;
`;

const ListContainer = styled.ul`
	margin-left: 20rem;
	margin: 1rem;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
	grid-auto-rows: minmax(2rem, auto);
	gap: 0.5rem;
`;

const ListItem = styled.li`
	box-sizing: border-box;
	border: 0.05rem solid black;
	border-radius: 0.2rem;
	background-color: white;
	font-size: small;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	grid-column: ${({ column }) => column};
	grid-row: ${({ row }) => row};
	cursor: ${({ unclickable }) => (unclickable ? 'default' : 'pointer')};

	&.unclickable {
		pointer-events: none;
		background-color: #7fbd95;
	}

	&.small-size {
		font-size: smaller;
	}

	&:hover,
	&:active {
		background-color: #a9d1b3;
	}

	&.BounceImmerge {
		animation: ${immergeBounce} 400ms ease-out forwards;
	}

	&.BounceDismiss {
		animation: ${dismissBounce} 400ms ease-out forwards;
	}

	&.SlideUp {
		animation: ${slideUp} 400ms ease-out forwards;
	}

	&.SlideDown {
		animation: ${slideDown} 400ms ease-out forwards;
	}
`;

const animationTiming = {
	enter: 1000,
	exit: 1000,
	appear: 1000
};

const indexItems = [
	{ content: [''], row: 1, column: 1 },
	{ content: ['1-1'], row: 1, column: 2 },
	{ content: ['1-2'], row: 1, column: 3 },
	{ content: ['2-1'], row: 1, column: 4 },
	{ content: ['2-2'], row: 1, column: 5 },
	{ content: ['3-1'], row: 1, column: 6 },
	{ content: ['3-2'], row: 1, column: 7 },
	{ content: ['4-1'], row: 1, column: 8 },
	{ content: ['4-2'], row: 1, column: 9 },
	{ content: ['1'], row: 2, column: 1 },
	{ content: ['2'], row: 3, column: 1 },
	{ content: ['3'], row: 4, column: 1 },
	{ content: ['4'], row: 5, column: 1 },
	{ content: ['5'], row: 6, column: 1 },
	{ content: ['6'], row: 7, column: 1 },
	{ content: ['7'], row: 8, column: 1 },
	{ content: ['8'], row: 9, column: 1 },
	{ content: ['9'], row: 10, column: 1 },
	{ content: ['10'], row: 11, column: 1 },
	{ content: ['11'], row: 12, column: 1 },
	{ content: ['12'], row: 13, column: 1 },
	{ content: ['13'], row: 14, column: 1 },
	{ content: ['14'], row: 15, column: 1 }
];

const initialItems = [
	{ content: ['C프로그래밍'], row: 3, column: 2, code: 100, newRow: 0 },
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

const lastIndexList = [
	{ semester: '1-1', index: 1, column: 2 },
	{ semester: '1-2', index: 1, column: 3 },
	{ semester: '2-1', index: 1, column: 4 },
	{ semester: '2-2', index: 1, column: 5 },
	{ semester: '3-1', index: 1, column: 6 },
	{ semester: '3-2', index: 1, column: 7 },
	{ semester: '4-1', index: 1, column: 8 },
	{ semester: '4-2', index: 1, column: 9 }
];

const List = ({ show }) => {
	const [roadMapItems, setRoadMapItems] = useState(indexItems);
	const [myItems, setMyItems] = useState(indexItems);
	const [lastIndex, setLastIndex] = useState(lastIndexList);

	useEffect(() => {
		initialItems.forEach((item, index) => {
			setTimeout(() => {
				setRoadMapItems((prevItems) => {
					if (!prevItems.some((prevItem) => prevItem.content === item.content)) {
						return [...prevItems, item];
					}
					return prevItems;
				});
			}, index * 10);
		});
	}, []);

	const addItemToMyList = (selectedItem) => {
		const updatedLastIndexList = lastIndex.map((item) => {
			if (item.column === selectedItem.column) {
				return { ...item, index: item.index + 1 };
			}
			return item;
		});

		const columnLastIndex = updatedLastIndexList.find((item) => item.column === selectedItem.column);

		const newItem = {
			content: selectedItem.content,
			row: selectedItem.row,
			column: selectedItem.column,
			code: selectedItem.code,
			newRow: columnLastIndex.index
		};

		setLastIndex(updatedLastIndexList);
		setMyItems((prevItems) => [...prevItems, newItem]);
	};

	const removeItemFromList = (selectedItem) => {
		setRoadMapItems((prevItems) => prevItems.filter((item) => item.code !== selectedItem.code));
		addItemToMyList(selectedItem);
	};

	const addItemToList = (selectedItem) => {
		const newItem = {
			content: selectedItem.content,
			row: selectedItem.row,
			column: selectedItem.column,
			code: selectedItem.code,
			newRow: 0
		};

		setRoadMapItems((prevItems) => [...prevItems, newItem]);
	};

	const removeItemFromMyList = (selectedItem) => {
		setMyItems((prevItems) => {
			const updatedItems = prevItems.filter((item) => item.code !== selectedItem.code);
			const updatedLastIndexList = lastIndex.map((item) => {
				if (item.column === selectedItem.column) {
					return { ...item, index: item.index - 1 };
				}
				return item;
			});

			updatedItems.forEach((item) => {
				if (item.column === selectedItem.column && item.newRow > selectedItem.newRow) {
					item.newRow -= 1;
				}
			});

			setLastIndex(updatedLastIndexList);
			return updatedItems;
		});

		addItemToList(selectedItem);
	};

	const [selectedItem, setSelectedItem] = useState(null);

	// const showModal = (item) => {
	// 	setSelectedItem(item);
	// };
	function closeModal() {
		setSelectedItem(null);
	}

	const listItems = roadMapItems.map((item) => {
		const isUnclickable = item.row === 1 || item.column === 1;
		const isIndexItems = item.column === 1;
		return (
			<CSSTransition
				key={item.code}
				timeout={animationTiming}
				mountOnEnter
				unmountOnExit
				classNames={{
					appear: 'BounceImmerge',
					enter: 'BounceImmerge',
					exit: 'BounceDismiss'
				}}
			>
				<ListItem
					className={`ListItem ${isUnclickable ? 'unclickable' : ''}
            ${isIndexItems ? 'small-size' : ''}
            `}
					// onClick={!isUnclickable ? () => showModal(index) : undefined}
					onClick={!isUnclickable ? () => removeItemFromList(item) : undefined}
					style={{
						gridColumn: item.column,
						gridRow: item.row,
						cursor: isUnclickable ? 'default' : 'pointer'
					}}
				>
					{item.content[0]}
				</ListItem>
			</CSSTransition>
		);
	});

	// TODO: myListItems 쌓이는 방식으로 처리하려면 List 형식으로 처리해야할 것 같음
	const myListItems = myItems.map((item) => {
		const isUnclickable = item.row === 1 || item.column === 1;
		const isIndexItems = item.column === 1;
		return (
			<CSSTransition
				key={item.code}
				timeout={animationTiming}
				mountOnEnter
				unmountOnExit
				classNames={{
					appear: 'BounceImmerge',
					enter: 'BounceImmerge',
					exit: 'BounceDismiss'
				}}
			>
				<ListItem
					className={`ListItem ${isUnclickable ? 'unclickable' : ''}
            ${isIndexItems ? 'small-size' : ''}
            `}
					// onClick={!isUnclickable ? () => showModal(item) : undefined}
					onClick={!isUnclickable ? () => removeItemFromMyList(item) : undefined}
					style={{
						gridColumn: item.column,
						gridRow: item.newRow,
						cursor: isUnclickable ? 'default' : 'pointer'
					}}
				>
					{item.content[0]}
				</ListItem>
			</CSSTransition>
		);
	});

	return (
		<Content className={`content ${show ? 'with-sidebar' : 'full-width'}`}>
			<Modal show={selectedItem !== null} item={selectedItem} closed={closeModal} />
			{selectedItem !== null && <Backdrop show={true} />}

			<Title>학과 로드맵</Title>
			<TransitionGroup component={ListContainer}>{listItems}</TransitionGroup>
			<Title>내 로드맵</Title>
			<TransitionGroup component={ListContainer}>{myListItems}</TransitionGroup>
		</Content>
	);
};

export default List;
