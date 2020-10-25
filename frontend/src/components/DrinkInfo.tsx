import React, { useState, useEffect } from 'react';
import { getMenus } from '../api/menu_api';
import Axios from 'axios';
import { Menu } from '../types/types';

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

  const getMenusData = async() => {
    const menus = await getMenus();
    setMenus(menus);
  }

  const [ successAlertVisible, setSuccessAlertVisible ] = useState<{display: string}>({display: "none"});

  // const addToMenu = (menuname) => {

  // }

  const addToMenu = async (menunameArg: string) => {
    try {
        const addDrink = await Axios.put(`/menus/drinks/add/${menunameArg}`, {id: id, name: name, image_url});
        console.log(addDrink);
        setSuccessAlertVisible({display: "flex"});
        setTimeout(function(){ setSuccessAlertVisible({display: "none"}) }, 1000);

    }
    catch (error) {
        console.log(error);
    }
    
}

  
  useEffect(() => {
    getMenusData();
    // return () => {
    //   cleanup?
    // };
  }, []);
  
  return (
    <div className="container-fluid drink-info-container">
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
          <p className="list-group-item">Ingredients:</p>
        {drinkIngredients.map((ing, ind) => ing ? <li className="list-group-item" key={ind}>{ing}</li> : null)}
        </ul>
            <div className="dropdown list-group-item">
                <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Add to Menu
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {menus ? menus.map((menu) => (
                    <a className="dropdown-item" onClick={e => addToMenu(menu.menuname)}>{menu.menuname}</a>
                  )) : ""}
                </div>
            </div>
            <div style={{display: successAlertVisible.display}} className="alert alert-warning" role="alert">Drink added.</div>
        </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default DrinkInfo;