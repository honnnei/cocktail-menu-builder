import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '../types/types';
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

        const addToMenu = async (menunameArg: string) => {
            try {
                const addDrink = await Axios.put(`/menus/drinks/add/${menunameArg}`, {id: id, name: name, image_url});
                console.log(addDrink);
            }
            catch {
                
            }
            
        }

        
    
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
                            <button className="dropdown-item" onClick={e => addToMenu(menu.menuname)}>{menu.menuname}</button>
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
