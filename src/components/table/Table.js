import React from 'react';
import './Table.css';
import TableItem from './table-item/TableItem';
import withLibraryService from '../../hoc/withLibraryService';
import TableHeader from './table-header/TableHeader';
import { connect } from 'react-redux';
import compose from '../../utils/compose';

const Table = (props) => {
	
		return (
			<table className="table table-bordered">
				<TableHeader />
				<tbody>
					{
							props.library.books.map((item) => {
								return <TableItem key={item.id} item={item} />
							})
					}
				</tbody>
				</table>
		)
}


const mapStateToProps = (state) => {
  return {
    library: state.library
  }
}

export default compose(
	withLibraryService(),
	connect(mapStateToProps)
)(Table)
