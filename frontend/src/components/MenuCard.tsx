import React from 'react';
import { Menu } from './DrinkInfo';

const MenuCard: React.FC<Menu> = ({
    menuname, 
    drinks
  }) => {

    return (
        <div>
            <h1>{menuname}</h1>
            {drinks.map((drink: any) => <p>{drink.name}</p>)}
            
        </div>
    )
}

export default MenuCard;
