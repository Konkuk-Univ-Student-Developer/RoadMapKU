import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './List.css';
import '../../Animation/Animation.css';

import Modal from '../Modal/Modal';
import Backdrop from '../Backdrop/Backdrop';

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
	{ content: ['C프로그래밍'], row: 3, column: 2 },
	{ content: ['컴퓨터공학개론'], row: 11, column: 2 },
	{ content: ['테크니컬영어발표'], row: 12, column: 2 },

	{ content: ['JAVA프로그래밍'], row: 3, column: 3 },
	{ content: ['테크니컬영어말하기'], row: 12, column: 3 },

	{ content: ['웹프로그래밍'], row: 2, column: 4 },
	{ content: ['객체지향프로그래밍'], row: 3, column: 4 },
	{ content: ['자료구조'], row: 6, column: 4 },
	{ content: ['테크니컬영문독해'], row: 12, column: 4 },
	{ content: ['전공기초프로젝트1'], row: 13, column: 4 },
	{ content: ['오픈소스SW입문'], row: 14, column: 4 },

	{ content: ['소프트웨어공학'], row: 3, column: 5 },
	{ content: ['컴퓨테이션이론'], row: 4, column: 5 },
	{ content: ['시스템프로그래밍'], row: 5, column: 5 },
	{ content: ['알고리즘'], row: 6, column: 5 },
	{ content: ['컴퓨터회로'], row: 7, column: 5 },
	{ content: ['인공지능'], row: 10, column: 5 },
	{ content: ['데이터통신'], row: 11, column: 5 },
	{ content: ['랜덤프로세스개론'], row: 12, column: 5 },
	{ content: ['전공기초프로젝트2'], row: 13, column: 5 },

	{ content: ['모바일프로그래밍'], row: 2, column: 6 },
	{ content: ['객체지향개발방법론'], row: 3, column: 6 },
	{ content: ['프로그래밍언어론'], row: 4, column: 6 },
	{ content: ['운영체제'], row: 5, column: 6 },
	{ content: ['알고리즘연습'], row: 6, column: 6 },
	{ content: ['컴퓨터구조'], row: 7, column: 6 },
	{ content: ['컴퓨터그래픽스'], row: 8, column: 6 },
	{ content: ['데이터베이스'], row: 9, column: 6 },
	{ content: ['디지털영상처리'], row: 10, column: 6 },
	{ content: ['컴퓨터네트워크'], row: 11, column: 6 },
	{ content: ['시그널프로세싱'], row: 12, column: 6 },
	{ content: ['K-Lab프로젝트1'], row: 13, column: 6 },
	{ content: ['산학협력프로젝트1'], row: 14, column: 6 },
	{ content: ['오픈소스SW프로젝트1'], row: 15, column: 6 },

	{ content: ['클라우드웹서비스'], row: 2, column: 7 },
	{ content: ['소프트웨어아키텍쳐'], row: 3, column: 7 },
	{ content: ['컴파일러'], row: 4, column: 7 },
	{ content: ['클라우드컴퓨팅'], row: 5, column: 7 },
	{ content: ['암호학'], row: 6, column: 7 },
	{ content: ['병렬프로그래밍'], row: 7, column: 7 },
	{ content: ['고급컴퓨터그래픽스'], row: 8, column: 7 },
	{ content: ['데이터사이언스'], row: 9, column: 7 },
	{ content: ['기계학습'], row: 10, column: 7 },
	{ content: ['네트워크프로그래밍'], row: 11, column: 7 },
	{ content: ['멀티미디어공학'], row: 12, column: 7 },
	{ content: ['K-Lab프로젝트2'], row: 13, column: 7 },
	{ content: ['산학협력프로젝트2'], row: 14, column: 7 },
	{ content: ['오픈소스SW프로젝트2'], row: 15, column: 7 },

	{ content: ['클라우드IoT서비스'], row: 2, column: 8 },
	{ content: ['소프트웨어V&V'], row: 3, column: 8 },
	{ content: ['임베디드시스템소프트웨어'], row: 4, column: 8 },
	{ content: ['분산시스템및컴퓨팅'], row: 5, column: 8 },
	{ content: ['협동분산시스템'], row: 6, column: 8 },
	{ content: ['가상현실'], row: 7, column: 8 },
	{ content: ['HCI'], row: 8, column: 8 },
	{ content: ['컴퓨터비전'], row: 9, column: 8 },
	{ content: ['자연어처리'], row: 10, column: 8 },
	{ content: ['테크니컬영어글쓰기'], row: 12, column: 8 },
	{ content: ['졸업프로젝트1'], row: 13, column: 8 },

	{ content: ['웹기술및응용'], row: 2, column: 9 },
	{ content: ['차세대분산시스템'], row: 5, column: 9 },
	{ content: ['컴퓨터정보보안'], row: 6, column: 9 },
	{ content: ['게임프로그래밍'], row: 7, column: 9 },
	{ content: ['UX디자인'], row: 8, column: 9 },
	{ content: ['무선및이동네트워크'], row: 11, column: 9 },
	{ content: ['컴퓨터공학세미나'], row: 12, column: 9 },
	{ content: ['졸업프로젝트2'], row: 13, column: 9 }
];

const List = ({ show }) => {
	const [items, setItems] = useState(indexItems);

	useEffect(() => {
		initialItems.forEach((item, index) => {
			setTimeout(() => {
				setItems((prevItems) => {
					if (!prevItems.some((prevItem) => prevItem.content === item.content)) {
						return [...prevItems, item];
					}
					return prevItems;
				});
			}, index * 10);
		});
	}, []);

	// const addItemHandler = () => {
	//   const newItem = { content: `항목 ${items.length + 1}`, row: Math.floor(items.length / 4) + 1, column: (items.length % 4) + 1 };
	//   setItems((prevItems) => [...prevItems, newItem]);
	// };

	// const removeItemHandler = (selIndex) => {
	//   setItems((prevItems) => prevItems.filter((_, index) => index !== selIndex));
	// };

	const [selectedItem, setSelectedItem] = useState(null);

	const showModal = (index) => {
		setSelectedItem(items[index].content);
	};
	function closeModal() {
		setSelectedItem(null);
	}

	const listItems = items.map((item, index) => {
		const isUnclickable = item.row === 1 || item.column === 1;
		const isIndexItems = item.column === 1;
		return (
			<CSSTransition
				key={index}
				timeout={animationTiming}
				mountOnEnter
				unmountOnExit
				classNames={{
					appear: 'BounceImmerge',
					enter: 'BounceImmerge',
					exit: 'BounceDismiss'
				}}
			>
				<li
					className={`ListItem ${isUnclickable ? 'unclickable' : ''}
            ${isIndexItems ? 'small-size' : ''}
            `}
					onClick={!isUnclickable ? () => showModal(index) : undefined}
					style={{
						gridColumn: item.column,
						gridRow: item.row,
						cursor: isUnclickable ? 'default' : 'pointer'
					}}
				>
					{item.content[0]}
				</li>
			</CSSTransition>
		);
	});

	return (
		<div className={`content ${show ? 'with-sidebar' : 'full-width'}`}>
			<Modal show={selectedItem !== null} content={selectedItem} closed={closeModal} />
			{selectedItem !== null && <Backdrop show={true} />}

			<div className="title">내 로드맵</div>
			<TransitionGroup component="ul" className="List">
				{listItems}
			</TransitionGroup>
			<TransitionGroup component="ul" className="List">
				{listItems}
			</TransitionGroup>
		</div>
	);
};

export default List;
