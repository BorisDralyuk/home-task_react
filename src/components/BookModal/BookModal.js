import React, { Component } from 'react';
import Input from '../../controls/input/Input';
import TextArea from '../../controls/text-area/TextArea';
import Select from '../../controls/select/Select';
import Modal from '../modal/Modal';
import withLibraryService from '../../hoc/withLibraryService';
import { connect } from 'react-redux';
import {  setTitle,
					setAuthor,
					setPrice,
					setDescription,
					setCount,
					setPublisher,
					setLanguage,
					clearBook } from '../../redux/book/actions';

import { addBook } from '../../redux/library/actions';
import './BookModal.css';
import store from '../../redux/store';
import compose from '../../utils/compose';


class BookModal extends Component {
	
	reg = (func, e) => {
		const regexp = new RegExp(`^-?[0-9]*$`);
		if (regexp.test(e)) {
			func(e)
		}
	}

	onChangeCount = (e) => {
		this.reg(this.props.setCount, e)
	}

	onChangePrice = (e) => {
		this.reg(this.props.setPrice, e)
	}

	handleAddBook = () => {
		this.props.addBook(store.getState().book);
		this.props.clearBook();
	}

	handleClouse = () => {
		this.props.clearBook();
	}

	render() {
		const { getLanguages } = this.props.libraryService
		const { title,
						author,
						price,
						description,
						count,
						publisher,
						language } = this.props.book;
		const { setTitle,
						setAuthor,
						setDescription,
						setLanguage,
						setPublisher} = this.props;
						
		return (
			<div className="BookModal">
				<Modal onAddBook={this.handleAddBook} onClouse={this.handleClouse} titleBtn="Add book" titleModal="New Book">
					<Input id="book-title" title="Title" value={title} onChange={setTitle} />
					<Input id="book-author" title="Author" value={author} onChange={setAuthor} />
					<Input id="book-publisher" title="Publisher" value={publisher} onChange={setPublisher} />
					<Select id="book-language" title="Language" data={getLanguages()} value={language} onChange={setLanguage} />
					<Input id="book-price" title="Price" value={price} onChange={this.onChangePrice} />
					<Input id="book-count" title="Count" value={count} onChange={this.onChangeCount} />
					<TextArea id="book-description" title="Description" value={description} onChange={setDescription} />
				</Modal>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		book: state.book,
		library: state.library
	}
}

const mapDispatchToProps = {
	setTitle,
	setAuthor,
	setPrice,
	setDescription,
	setCount,
	setPublisher,
	setLanguage,
	clearBook,
	addBook
}

export default compose(
	withLibraryService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookModal)
