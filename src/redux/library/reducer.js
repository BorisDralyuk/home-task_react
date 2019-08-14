import LibraryState from "./state";
import { ADD_BOOK, SET_LIBRARY } from "./actions";

const LibraryReducer = (state = LibraryState, actions) => {
	switch (actions.type) {
		case SET_LIBRARY: {
			return { ...state, books: actions.payload };
		}
		case ADD_BOOK: {
			const newBook = { ...actions.payload, id: state.books.length + 1}
			const b = [...state.books, newBook];
			return { ...state, books: b };
		}
		default: return state;
	}
}

export default LibraryReducer;