import React, { useState } from 'react';
import { DrinkDetailsEdited, Menu } from '../types/types';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import PDF from './PDF';

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

    const [ currentDrinkIndex, setCurrentDrinkIndex ] = useState<number>(-1);

    const handleMouseEnter = (drinkindex: number) => {
        setCurrentDrinkIndex(drinkindex);
    }

    const handleMouseLeave = (drinkindex: number) => {
        setCurrentDrinkIndex(-1);
    }


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
            try {
                const drink = await Axios.put(`/menus/drinks/delete/${menu}/${drinkIndex}`);
                console.log(drink);
                getMenusAgain();
            } catch (error) {
            console.log(error);
            }
    }

    return (
        <div className="card" style={{width: '30rem'}}>
            <img src={drinks[0] ? drinks[0].image_url : 'https://image.flaticon.com/icons/svg/165/165979.svg'} className="card-img-top" alt={'picture of a cocktail'} />
            <div className="card-body">
                <h5 className="card-title">{menuname}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <ul className="list-group list-group-flush">
            {drinks ? drinks.map((drink: any, index:number) => (
                <li className="list-group-item">
                    <Link to={`/cocktails/${drink.id}`} className="card-link text-dark">
                        {drink.name}
                    </Link>
                    <button onClick={e => deleteDrink(menuname, index)} type="button" className="close" aria-label="Delete" onMouseEnter={e => handleMouseEnter(index)} onMouseLeave={e => handleMouseLeave(index)}>
                        <span aria-hidden="true">&times;</span>
                        {/* <p style={currentDrinkIndex === index ? {display: "flex"} : {display: "none"}} z-index={2}>This will delete this drink off this menu.</p> */}
                    </button>
                    <div>
                        <p className="text-danger text-capitalize">{drink.drinkIngredients?.map((d: string) => `${d} ` )}</p>
                    </div>
                </li>
            )) : null }
            </ul>
            <div className="card-body">
                <button className="btn btn-outline-dark" onClick={e => deleteMenu(menuname)}>Delete Menu</button>
            </div>
            <Link to={`/menu-view/${menuname}`} className="btn btn-outline-dark">
                        View Menu
                    </Link>
        </div>
    )
}

export default MenuCard;
