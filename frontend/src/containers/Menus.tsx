import React, { useState, useEffect} from 'react';
import MenuForm from '../components/MenuForm';
import MenuCard from '../components/MenuCard';
import { getMenus } from '../api/menu_api';
import { Menu } from '../types/types';
import PDF from '../components/PDF';


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
        <div className="menus-page-container">
            <div>
                <MenuForm getMenusAgain={callGetMenus}/>
            </div>
            <div className="menus-container">
            {menus ? menus.map((menu) => (
                <MenuCard menuname={menu.menuname} drinks={menu.drinks} getMenusAgain={callGetMenus}/>
            )) : null}
            </div>
        </div>
    );
}

export default Menus;
