import React from 'react';

export default function MenuForm() {
    return (
        <>
        <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal">
        Create a New Menu
        </button>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <p>this is modal</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-info" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-danger">Create Menu</button>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}
