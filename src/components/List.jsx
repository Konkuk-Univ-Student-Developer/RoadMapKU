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
	text-align: center;
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
	{ content: ['4-2'], row: 1, column: 9 }
];

const indexItems_my = [
	{ content: [''], row: 1, column: 1 },
	{ content: ['1-1'], row: 1, column: 2 },
	{ content: ['1-2'], row: 1, column: 3 },
	{ content: ['2-1'], row: 1, column: 4 },
	{ content: ['2-2'], row: 1, column: 5 },
	{ content: ['3-1'], row: 1, column: 6 },
	{ content: ['3-2'], row: 1, column: 7 },
	{ content: ['4-1'], row: 1, column: 8 },
	{ content: ['4-2'], row: 1, column: 9 }
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

const List = ({ show, courseItems }) => {
	const [roadMapItems, setRoadMapItems] = useState(indexItems_my);
	const [myItems, setMyItems] = useState(indexItems_my);
	const [lastIndex, setLastIndex] = useState(lastIndexList);
	const [maxRowValue, setMaxRowValue] = useState(0);

	useEffect(() => {
		const newItems = [...indexItems];
		setRoadMapItems(newItems);

		const rowValues = courseItems.map((item) => item.row);
		const maxRowValueFromCourseItems = Math.max(...rowValues);
		for (let i = 1; i < maxRowValueFromCourseItems; i++) {
			newItems.push({ content: [`${i}`], row: i + 1, column: 1 });
		}
		setRoadMapItems([...newItems]);
		setMaxRowValue(maxRowValueFromCourseItems);

		courseItems.forEach((item, index) => {
			setTimeout(() => {
				setRoadMapItems((prevItems) => {
					if (!prevItems.some((prevItem) => prevItem.content === item.content)) {
						return [...prevItems, item];
					}
					return prevItems;
				});
			}, index * 10);
		});
	}, [courseItems]);

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

	const [buttonDisabled, setButtonDisabled] = useState(false);
	const handleItemClickList = (item) => {
		if (item.unclickable || buttonDisabled) return;
		setButtonDisabled(true);
		removeItemFromList(item);
		setTimeout(() => {
			setButtonDisabled(false);
		}, 500);
	};
	const handleItemClickMyList = (item) => {
		if (item.unclickable || buttonDisabled) return;
		setButtonDisabled(true);
		removeItemFromMyList(item);
		setTimeout(() => {
			setButtonDisabled(false);
		}, 500);
	};

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
					onClick={() => handleItemClickList(item)}
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
					onClick={() => handleItemClickMyList(item)}
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

	// console.log('MaxRow: ', maxRowValue);

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
