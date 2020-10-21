import React, { useState, useEffect} from 'react';
import Carousel from '../components/Carousel';
import MenuForm from '../components/MenuForm';
import MenuCard from '../components/MenuCard';
import { DrinkDetailsEdited, getMenuData } from '../api/API';

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
        <div>
            <h1>Menus</h1>
            <MenuForm />
            <Carousel />
            {menus ? menus.map((menu, index) => (
                <MenuCard menuname={menu.menuname} drinks={menu.drinks} />
            )) : null}
        </div>
    );
}

export default Menus;
