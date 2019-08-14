const SET_TITLE = 'SET_TITLE';
const SET_AUTHOR = 'SET_AUTHOR';
const SET_PRICE = 'SET_PRICE';
const SET_DESCRIPTION = 'SET_DESCRIPTION';
const SET_COUNT = 'SET_COUNT';
const SET_PUBLISHER = 'SET_PUBLISHER';
const SET_LANGUAGE = 'SET_LANGUAGE';

const CLEAR_BOOK = 'CLEAR_BOOK';

const setTitle = (payload) => {
	return {
		payload: payload,
		type: SET_TITLE
	}
}

const setAuthor = (payload) => {
	return {
		payload: payload,
		type: SET_AUTHOR
	}
}

const setPrice = (payload) => {
	return {
		payload: payload,
		type: SET_PRICE
	}
}

const setDescription = (payload) => {
	return {
		payload: payload,
		type: SET_DESCRIPTION
	}
}

const setCount = (payload) => {
	return {
		payload: payload,
		type: SET_COUNT
	}
}

const setPublisher = (payload) => {
	return {
		payload: payload,
		type: SET_PUBLISHER
	}
}

const setLanguage = (payload) => {
	return {
		payload: payload,
		type: SET_LANGUAGE
	}
}

const clearBook = () => {
	return {
		type: CLEAR_BOOK
	}
}

export {
	SET_TITLE,
	SET_AUTHOR,
	SET_PRICE,
	SET_DESCRIPTION,
	SET_COUNT,
	SET_PUBLISHER,
	SET_LANGUAGE,
	CLEAR_BOOK,

	setTitle,
	setAuthor,
	setPrice,
	setDescription,
	setCount,
	setPublisher,
	setLanguage,

	clearBook
}
