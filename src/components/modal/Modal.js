import React from 'react';
import './Modal.css';

const Modal = (props) => {

	const { titleBtn, titleModal} = props;

	return (
		<div className="Modal">

			<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
				{titleBtn}
			</button>

			<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">{titleModal}</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="content">
								{
									props.children
								}
							</div>
      			</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={props.onClouse}>Close</button>
							<button type="button" className="btn btn-primary" data-dismiss="modal" onClick={props.onAddBook}>Save</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;
