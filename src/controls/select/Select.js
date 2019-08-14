import React, { Component } from 'react';
import './Select.css';

export default class Select extends Component {

	handleChange = (e) => {
		if (this.props.onChange)
			this.props.onChange(e.target.value);
	}

	render() {
		const { id, title, data, value } = this.props;

		return (

			<div className="form-group">
				<label htmlFor={id}>{title}</label>
				<select className="form-control" id={id} onChange={this.handleChange} value={value}>
					{
						data.map((item) => {
							return 	<option 
												key={item.value} 
												value={item.label}
											>
												{item.label}
											</option>
						})
					}
				</select>
			</div>
		)
	}
}