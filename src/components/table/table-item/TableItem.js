import React, { Component }  from 'react';
import './TableItem.css';

export default class TableItem extends Component {

	state = {
		open: false
	}

	handleClick = () => {
		this.setState((state)=>{
			return {
				open: !state.open
			}
		})
	}

	render() {
		const { id, 
						title,
						author,
						price,
						description,
						count,
						publisher,
						language} = this.props.item;
		const colapsId = `collapseExample_${id}`;
		const refcColapsId = `#collapseExample_${id}`

		return(
		<React.Fragment>
				<tr >
					<td >{id}</td>
					<td >{title}</td>
					<td >{count}</td>
					<td >{price}</td>
					<td >
						<a data-toggle="collapse" href={refcColapsId} onClick={this.handleClick} role="button" aria-expanded="false" aria-controls="collapseExample">
							{
								(this.state.open) 
									? <i className="fa fa-angle-up"></i>
									: <i className="fa fa-angle-down"></i>
							}
						</a>
					</td>
				</tr>
				<tr>
					<td colSpan="5" style={{ 'padding': '0px' }}>
						<div className="collapse" id={colapsId}>
							<div className="card-item">
								<p>Title: {title}</p>
								<p>Author: {author}</p>
								<p>Price: {price}</p>
								<p>Count: {count}</p>
								<p>Publisher: {publisher}</p>
								<p>Language: {language}</p>
								<p>Description: {description}</p>
  						</div>
						</div>
					</td>
				</tr>
			</React.Fragment>
		)
	}
}