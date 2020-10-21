import React, { useState } from 'react';
import Axios from 'axios';

export default function MenuForm() {
    const [ menuname, setMenuname ] = useState<string>('');
    const [ alertVisible, setAlertVisible ] = useState<string>("none");
    const createMenu = () => {
        Axios.post('/menus', { menuname: menuname})
        .then((res) => {
           setAlertVisible("flex");
        })
        .catch((err) => console.log(err))
    }
    return (
        <>
        <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal">
        Create a New Menu
        </button>
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Create a Menu</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
            <form>
                <div className="form-group">
                    <label htmlFor="menuTitle">Menu Title</label>
                    <input 
                    type="text" 
                    name="menuname"
                    className="form-control" 
                    id="menuTitle" 
                    aria-describedby="menuHelp" 
                    placeholder="Enter Menu Title" 
                    value={menuname}
                    onChange={e => setMenuname(e.target.value)}
                    />
                    <small id="menuHelp" className="form-text text-muted">Please make it a single word</small>
                </div>
                </form>
                <div style={{display: alertVisible}}className="alert alert-primary" role="alert">Menu Created</div>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-info" onClick={createMenu}>Create Menu</button>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}
