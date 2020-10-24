import React, { useState, useEffect} from 'react';
import MenuForm from '../components/MenuForm';
import MenuCard from '../components/MenuCard';
import { getMenus } from '../api/menu_api';
import { Menu } from '../types/types';


function Menus() {

    const [ menus, setMenus ] = useState<Menu[]>([]);

    const callGetMenus = async() => {
        const menus = await getMenus();
        setMenus(menus);
      }

    useEffect(() => {
        callGetMenus();
    }, []);

    return (
        <div>
            <MenuForm getMenusAgain={callGetMenus}/>
            {menus ? menus.map((menu) => (
                <MenuCard menuname={menu.menuname} drinks={menu.drinks} getMenusAgain={callGetMenus}/>
            )) : null}
        </div>
    );
}

export default Menus;
