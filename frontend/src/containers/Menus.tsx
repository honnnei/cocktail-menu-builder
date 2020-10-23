import React, { useState, useEffect} from 'react';
import MenuForm from '../components/MenuForm';
import MenuCard from '../components/MenuCard';
import { DrinkDetailsEdited, getMenuData } from '../api/cocktail_api';

type Menu = {
    drinks: DrinkDetailsEdited[];
    menuname: string
}

function Menus() {

    const [ menus, setMenus ] = useState<Menu[]>([]);

    const getMenus = async() => {
        const menus = await getMenuData();
        setMenus(menus);
      }

    useEffect(() => {
        getMenus();
    }, []);

    return (
        <div>S
            <MenuForm />
            {menus ? menus.map((menu, index) => (
                <MenuCard menuname={menu.menuname} drinks={menu.drinks} />
            )) : null}
        </div>
    );
}

export default Menus;
