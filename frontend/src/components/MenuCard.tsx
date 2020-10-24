import React, { useState } from 'react';
import { DrinkDetailsEdited, Menu } from '../types/types';
import Axios from 'axios';

interface MenuC {
    menuname: string,
    drinks: DrinkDetailsEdited[],
    getMenusAgain: () => any
}

const MenuCard: React.FC<MenuC> = ({
    menuname, 
    drinks, 
    getMenusAgain
  }) => {

    const [ comments, setComments ] = useState<string[]>([]);
    const [ commentInput, setCommentInput ] = useState<string>('');

    const createComment = () => {
        let array = [...comments, commentInput];
        setComments(array);
    }

    const deleteMenu = async (menunameArg: string) => {

        const toDelete = window.confirm(`Are you sure you want to delete ${menunameArg} menu?`);

        if (toDelete) {
            try {
                const deletedMenu = await Axios.delete(`/menus/${menunameArg}`);
                getMenusAgain();
            }
            catch {
    
            }
        }
    }

    return (
        <div className="card" style={{width: '18rem'}}>
            <img src='https://image.flaticon.com/icons/svg/165/165979.svg' className="card-img-top" alt={'picture of a cocktail'} />
            <div className="card-body">
                <h5 className="card-title">{menuname}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
            {drinks ? drinks.map((drink: any) => <li className="list-group-item">{drink.name}</li>) : null }
            </ul>
            <div className="card-body">
                <button className="btn btn-outline-dark" onClick={e => deleteMenu(menuname)}>Delete Menu</button>
            </div>
        </div>
    )
}

export default MenuCard;
