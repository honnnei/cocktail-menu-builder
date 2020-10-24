import React, { useState } from 'react';
import Axios from 'axios';

interface Alert {
    display: string;
    message: string;
}

const MenuForm: React.FC<{getMenusAgain: () => any}> = ({
    getMenusAgain
  }) => {
    const [ menuname, setMenuname ] = useState<string>('');
    const [ successAlertVisible, setSuccessAlertVisible ] = useState<Alert>({display: "none", message: ""});
    const [ errorAlertVisible, setErrorAlertVisible ] = useState<Alert>({display: "none", message: ""});
    
    const createMenu = () => {
        Axios.post('/menus', { menuname: menuname})
        .then((res) => {
           setSuccessAlertVisible({display: "flex", message: res.data.menuname});
           getMenusAgain();
        })
        .catch((err) => {
            setErrorAlertVisible({display: "flex", message: err.message})
            console.log(err);
        });
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
                </div>
                </form>
                <div style={{display: successAlertVisible.display}} className="alert alert-warning" role="alert">{successAlertVisible.message} Menu Created</div>
                <div style={{display: errorAlertVisible.display}} className="alert alert-danger" role="alert">{errorAlertVisible.message}</div>
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

export default MenuForm;
