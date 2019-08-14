import React, { Component } from 'react';
import './Input.css';

export default class Input extends Component {

	handleChange = (e) => {
		if (this.props.onChange)
			this.props.onChange(e.target.value);
	}

	render() {

		const { id, title, value } = this.props;

		return (
			<div className="form-group">
				<label htmlFor={id}>{title}</label>
				<input id={id} type="text" className="form-control" onChange={this.handleChange} value={value} />
  		</div>
		)
	}
}