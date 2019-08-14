import React from 'react';

const TableHeader = () => {
		return (
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Title</th>
					<th scope="col">Count</th>
					<th scope="col">Price</th>
					<th style={{'width': '30px'}}></th>
				</tr>
			</thead>
		)
}

export default TableHeader;