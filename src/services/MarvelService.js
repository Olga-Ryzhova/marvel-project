import { useHttp } from "../hooks/http.hook";

const useMarvelService = () => {
	// импортируем все переменные, которые есть в хуке useHttp
	const {request, clearError, process, setProcess } = useHttp();
	
	// начальное название API
	const _apiBase = 'https://gateway.marvel.com:443/v1/public/';
	// мой ключ
	const _apiKey = 'apikey=129b3670ad033d82bbeb6ea2a1095d5c';
	//базовый отступ  у персонажей
	const _baseOffset = 650;

	//базовый отступ у комиксов
	const _baseOffsetComics = 340;

	// получение всех персонажей
	const getAllCharacters = async (offset = _baseOffset) => {
		const res = await request(`${_apiBase}characters?limit=9&offset=${offset}&${_apiKey}`);
		return res.data.results.map(_transformCharacter);
	}

	// получение одного персонжа
	const getCharacter = async (id) => {
		const res = await request(`${_apiBase}characters/${id}?${_apiKey}`);
		return _transformCharacter(res.data.results[0]);
	}

	// получение всех комиксов
	const getAllComics = async (offset = _baseOffsetComics) => {
		const res = await request(`${_apiBase}comics?limit=8&offset=${offset}&${_apiKey}`);
		return res.data.results.map(_transformComics);
	}

	// получение одного комикса
	const getComic = async (id) => {
		const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
		return _transformComics(res.data.results[0]);
	};

	// получение персонажа при поиске
	const getCharacterByName = async (name) => {
		const res = await request(`${_apiBase}characters?name=${name}&${_apiKey}`);
		return res.data.results.map(_transformCharacter);
	};

  // трансформация персонажа
  const _transformCharacter = (char) => {	
		return {
						id: char.id,
						name: char.name,
						description: char.description ? `${char.description.slice(0, 210)}...` : 'There is no description for this character',
						thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
						homepage: char.urls[0].url,
						wiki: char.urls[1].url,
						comics: char.comics.items,
		}
  }

	// трансформация данных с комиксами
	const _transformComics = (comics) => {
		return {
			id: comics.id,
			title: comics.title,
			description: comics.description || "There is no description",
			pageCount: comics.pageCount
				? `${comics.pageCount} p.`
				: "No information about the number of pages",
			thumbnail: comics.thumbnail.path + '.' + comics.thumbnail.extension,
			language: comics.textObjects[0]?.language || "en-us",
			price: comics.prices[0].price
				? `${comics.prices[0].price}$`
				: "not available",
			homepage: comics.urls[0].url,
		}
	}

	// возвращаем объект из функции
	return { 
		clearError, 
		process,
		setProcess,
		getAllCharacters, 
		getCharacterByName, 
		getCharacter, 
		getAllComics, 
		getComic};
}

export default useMarvelService;


