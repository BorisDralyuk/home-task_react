import BookState from "./state";
import {  SET_TITLE,
					SET_AUTHOR,
					SET_PRICE,
					SET_DESCRIPTION,
					SET_COUNT,
					SET_PUBLISHER,
					SET_LANGUAGE,
				  CLEAR_BOOK } from "./actions";

const BookReducer = (state = BookState, actions) => {
	switch(actions.type){
		case SET_TITLE: {
			return {...state, title: actions.payload}
		} 
		case SET_AUTHOR: {
			return { ...state, author: actions.payload }
		} 
		case SET_PRICE: {
			return { ...state, price: actions.payload }
		} 
		case SET_DESCRIPTION: {
			return { ...state, description: actions.payload }
		} 
		case SET_COUNT: {
			return { ...state, count: actions.payload }
		} 
		case SET_PUBLISHER: {
			return { ...state, publisher: actions.payload }
		} 
		case SET_LANGUAGE: {
			return { ...state, language: actions.payload }
		} 
		case CLEAR_BOOK: {
			return {	title: '',
								author: '',
								price: 0,
								description: '',
								count: 0,
								publisher: '',
								language: 'English'
							}
		}
		default: return state;
	}
}

export default BookReducer;