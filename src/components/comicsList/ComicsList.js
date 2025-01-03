/* eslint-disable no-unreachable */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../spinner/Spinner';
import ErrorMessage from '../errorMessage/ErrorMessage';
import useMarvelService from '../../services/MarvelService';

import './comicsList.scss';
//установка контента на странице
const setContent = (process, Component, newItemLoading) => {
  switch (process) {
    case 'waiting':
      return <Spinner/>;
      break;
    case 'loading':
      return newItemLoading ? <Component/> : <Spinner/>;
      break;
    case 'confirmed':
      return <Component/>;
      break;
    case 'error':
      return <ErrorMessage/>;
      break;
    default:
      throw new Error('Unexpected process state');
  }
}

const ComicsList = (props) => {
	const [comicsList, setComicsList] = useState([]);
	const [newItemLoading, setnewItemLoading] = useState(false);
	const [offset, setOffset] = useState(340);
	const [comicsEnded , setComicsEnded] = useState(false);

	// вызываем функцию
	const {loading, error, getAllComics, process, setProcess} = useMarvelService();

	useEffect(() => {
		onRequest(offset, true);
	}, []);

	// отправка запроса при клике на кнопку "LOAD MORE"
	const onRequest = (offset, initial) => {
		// функция, которая будет отвечать за процесс дозагрузки
		initial ? setnewItemLoading(false) : setnewItemLoading(true);
		getAllComics(offset)
			.then(onComicsListLoaded)
			.then(() => setProcess('confirmed'))
	}

	const onComicsListLoaded = (newComicsList) => {
		let ended = false;
		if (newComicsList.length < 8) {
			ended = true;
		}

		setComicsList(comicsList => [...comicsList, ...newComicsList]);
		setnewItemLoading(newItemLoading => false);
		setOffset(offset => offset + 8);
		setComicsEnded(comicsEnded => ended);
	}

	function renderItems(arr) {
		const items  = arr.map((item, i) => {
			return (
				<li 
					className="comics__item"
					key={item.id}>
					<Link to={`/comics/${item.id}`}>
						<img src={item.thumbnail} alt={item.title} className="comics__item-img"/>
						<div className="comics__item-name">{item.title}</div>
						<div className="comics__item-price">{item.price}</div>
					</Link>
				</li>
			)
		})

		return (
			<ul className="comics__grid">
				{items}
			</ul>
		)
	}

	return (
		<div className="comics__list">
				{setContent(process, () => renderItems(comicsList), newItemLoading)}
				<button className="button button__main button__long"
				disabled={newItemLoading}
				style={{'display': comicsEnded ? 'none' : 'block'}}
				onClick={() => onRequest(offset)}>
					<div className="inner">load more</div>
				</button>
		</div>
	)
}

export default ComicsList;