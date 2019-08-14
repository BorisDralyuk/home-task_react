const ADD_BOOK = 'ADD_BOOK';
const SET_LIBRARY = 'SET_LIBRARY';

const addBook = (payload) => {
	return {
		payload: payload,
		type: ADD_BOOK
	}
}
const setLibrary = (payload) => {
	return {
		payload: payload,
		type: SET_LIBRARY
	}
}

export {
	ADD_BOOK,
	SET_LIBRARY,

	addBook,
	setLibrary
}