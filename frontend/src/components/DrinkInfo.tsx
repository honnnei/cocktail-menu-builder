import React, { useState, useEffect } from 'react';
import { DrinkDetailsEdited, getMenuData } from '../api/API';
import Axios from 'axios';

export type Menu = {
  drinks: DrinkDetailsEdited[];
  menuname: string
}

type Props = {
  id: string,
  alcoholic: string,
  category: string,
  name: string,
  glass: string,
  image_url: string,
  instructions: string,
  drinkIngredients: string[],
}

const DrinkInfo: React.FC<Props> = ({
  id, 
  alcoholic, 
  category, 
  name, 
  glass, 
  image_url, 
  instructions, 
  drinkIngredients
}) => {

  const [ menus, setMenus ] = useState<Menu[]>([]);

  const getMenus = async() => {
    const menus = await getMenuData();
    setMenus(menus);
  }

  // const addToMenu = (menuname) => {

  // }
  
  useEffect(() => {
    getMenus();
    // return () => {
    //   cleanup?
    // };
  }, []);
  
  return (
    <div className="container-fluid drink-info-container">
      <div className="card" style={{width: "30rem"}}>
        <img src={image_url} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{instructions}</p>
        </div>
        <ul className="list-group list-group-flush">
          <p>Ingredients</p>
        {drinkIngredients.map((ing, ind) => ing ? <li className="list-group-item" key={ind}>{ing}</li> : null)}
        </ul>
        <div className="card-body">
            <p>Glass: {glass}</p>
            <div className="dropdown">
                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Add to Menu
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {menus ? menus.map((menu) => (
                    <a className="dropdown-item" onClick={e => console.log(menu.menuname)}>{menu.menuname}</a>
                  )) : ""}
                </div>
            </div>
        </div>
      </div>
      <div className="card mb-3" style={{maxWidth: "60em"}}>
      <div className="row no-gutters">
        <div className="col-md-6">
          <img src={image_url} className="card-img" alt="cocktail" />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{instructions}</p>
            <div className="card-body">
            <p>Glass: {glass}</p>
            <ul className="list-group list-group-flush">
          <p>Ingredients</p>
        {drinkIngredients.map((ing, ind) => ing ? <li className="list-group-item" key={ind}>{ing}</li> : null)}
        </ul>
            <div className="dropdown">
                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Add to Menu
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {menus ? menus.map((menu) => (
                    <a className="dropdown-item" onClick={e => console.log(menu.menuname)}>{menu.menuname}</a>
                  )) : ""}
                </div>
            </div>
        </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default DrinkInfo;