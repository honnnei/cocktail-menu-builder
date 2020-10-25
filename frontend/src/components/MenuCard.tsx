import React, { useState } from 'react';
import { DrinkDetailsEdited, Menu } from '../types/types';
import { Link } from 'react-router-dom';
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


    const deleteMenu = async (menunameArg: string) => {

        const toDelete = window.confirm(`Are you sure you want to delete ${menunameArg} menu?`);

        if (toDelete) {
            try {
                const deletedMenu = await Axios.delete(`/menus/${menunameArg}`);
                getMenusAgain();
            }
            catch (error) {
                console.log(error);
            }
        }
    }

    const deleteDrink = async (menu: string, drinkIndex: number) => {
        const deleted = window.confirm("Do you want to delete this drink?");

        if (deleted) {
            try {
                const drink = await Axios.put(`/menus/drinks/delete/${menu}/${drinkIndex}`);
                console.log(drink);
                getMenusAgain();
            } catch (error) {
            console.log(error);
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
            {drinks ? drinks.map((drink: any, index:number) => (
            <li className="list-group-item"><Link to={`/cocktails/${drink.id}`} className="card-link text-dark">{drink.name}</Link><button onClick={e => deleteDrink(menuname, index)} type="button" className="close" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button></li>
            )) : null }
            </ul>
            <div className="card-body">
                <button className="btn btn-outline-dark" onClick={e => deleteMenu(menuname)}>Delete Menu</button>
            </div>
        </div>
    )
}

export default MenuCard;
