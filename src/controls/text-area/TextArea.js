import React, { Component } from 'react';
import './TextArea.css';

export default class TextArea extends Component {

	handleChange = (e) => {
		if (this.props.onChange)
			this.props.onChange(e.target.value);
	}

	render() {
		const { id, title, value } = this.props;

		return (
			<div className="form-group">
				<label htmlFor={id}>{title}</label>
				<textarea className="form-control" id={id} onChange={this.handleChange} value={value} rows="3"></textarea>
			</div>
		)
	}
}