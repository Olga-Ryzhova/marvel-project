import { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

import useMarvelService from '../../services/MarvelService';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';

import './charList.scss';

const CharList = (props) => {
	const [charList, setCharList] = useState([]);
	const [newItemLoading, setNewItemLoading] = useState(false);
	const [offset, setOffset] = useState(198);
	const [charEnded, setCharEnded] = useState(false);

	// вызываем функцию
	const {loading, error, getAllCharacters} = useMarvelService();

	useEffect(() => {
		onRequest(offset, true); 
		
	}, []);

	// отправка запроса при клике на кнопку "LOAD MORE"
	const onRequest = (offset, initial) => {
		// функция, которая будет отвечать за процесс дозагрузки
		initial ? setNewItemLoading(false) : setNewItemLoading(true);
		getAllCharacters(offset)
			.then(onCharListLoaded)
	}
	
	const onCharListLoaded = (newCharList) => {
		let ended = false;
		if (newCharList.length < 9) {
			ended = true;
		}

		setCharList(charList => [...charList, ...newCharList]);
		setNewItemLoading(newItemLoading => false);
		setOffset(offset => offset + 9);
		setCharEnded(charEnded => ended);
	}

	// console.log('charList');
	

	// реализация ref
	const itemRefs = useRef([]);

	// фокусировка элемента
	const focusOnItem = (id) => {
		itemRefs.current.forEach(item => item.classList.remove('char__item_selected'));
		itemRefs.current[id].classList.add('char__item_selected');
		itemRefs.current[id].focus();
	}

	// Этот метод создан для оптимизации, 
	// чтобы не помещать такую конструкцию в метод render
	function renderItems(arr) {
		const items =  arr.map((item, i) => {
			let imgStyle = {'objectFit' : 'cover'};
			if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
					imgStyle = {'objectFit' : 'unset'};
			}
				
			return (
				<CSSTransition key={item.id} timeout={500} classNames="char__item">
					<li  
						className="char__item"
						ref={el => itemRefs.current[i] = el}  //использование ref
						tabIndex={0}   //возможность переключать персонажей через tab
						onClick={() => {
							props.onCharSelected(item.id);
							focusOnItem(i);
						}}
		
						// Обработчик событий onKeyUp:
						onKeyUp ={(e) => {  
							if (e.key === ' ' || e.key === "Enter") {
								props.onCharSelected(item.id);
								focusOnItem(i);
							}
						}}>
		
							<img src={item.thumbnail} alt={item.name} style={imgStyle}/>
							<div className="char__name">{item.name}</div>
					</li>
				</CSSTransition>
			)
		});
		
		// А эта конструкция вынесена для центровки спиннера/ошибки
		return (
			<ul className="char__grid">
				 <TransitionGroup component={null}>
						{items}
					</TransitionGroup>
			</ul>
		)
	}
		
	const items = renderItems(charList);

	const errorMessage = error ? <ErrorMessage/> : null;
	const spinner = loading && !newItemLoading ? <Spinner/> : null;

	return (
		<div className="char__list">
			{errorMessage}
			{spinner}
			{items}
			<button 
				className="button button__main button__long"
				disabled={newItemLoading}
				style={{'display': charEnded ? 'none' : 'block'}}
				onClick={() => onRequest(offset)}
				>
				<div className="inner">load more</div>
			</button> 
		</div>
	)
}

CharList.propTypes = {
	onCharSelected: PropTypes.func.isRequired
}

export default CharList;
