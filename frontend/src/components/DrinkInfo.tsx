import React, { useState, useEffect } from 'react';
import { DrinkDetailsEdited, getMenuData } from '../api/API';
import Axios from 'axios';

type Menu = {
  menuname: string,
  drinks: DrinkDetailsEdited[];
  _id: string,
  __v: number
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

  // const [ menus, setMenus ] = useState<any[]>([]);
  const getMenus = async () => {
    const menus = await getMenuData();
    return menus;
  }
  

  console.log(getMenus());

  useEffect(() => {
    // getMenuDate();
    // return () => {
    //   cleanup?
    // };
  }, []);
  
  return (
    <div className="">
      <div className="card" style={{width: "18rem"}}>
        <img src={image_url} className="card-img-top" alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{instructions}</p>
        </div>
        <ul className="list-group list-group-flush">
        {drinkIngredients.map((ing, ind) => ing ? <li className="list-group-item" key={ind}>{ing}</li> : null)}
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
            <p>{glass}</p>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" onClick={e => console.log(1)}>Action</a>
                    <a className="dropdown-item" onClick={e => console.log(2)}>Another action</a>
                    <a className="dropdown-item" onClick={e => console.log(3)}>Something else here</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default DrinkInfo;