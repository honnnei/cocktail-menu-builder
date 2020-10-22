import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DrinkDetailsEdited, getMenuData } from '../api/API';
import { Menu } from './DrinkInfo';
import Axios from 'axios';

    type Props = {
        id: string;
        name: string;
        image_url: string;
        currentMenus: Menu[];
    }
    
    const DrinkCard: React.FC<Props> = ({
    id, 
    name,  
    image_url, 
    currentMenus
    }) => {

        
    
    return (
        <div className="drink-card card" style={{width: "18rem"}}>
            <img src={image_url} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><Link to={`/cocktails/${id}`} className="card-link text-dark">Recipe Details</Link></li>
                    <li className="list-group-item">
                    <div className="dropdown">
                        <button className="btn btn-outline-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Add to Menu
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            {currentMenus ? currentMenus.map((menu) => (
                            <a className="dropdown-item" onClick={e => console.log(menu.menuname)}>{menu.menuname}</a>
                            )) : ""}
                        </div>
                    </div>
                    </li>
                </ul>
            </div>
        </div>

                    
    )
}

export default DrinkCard;
