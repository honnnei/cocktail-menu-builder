import React, { useState, useEffect } from 'react';
import { Menu } from '../types/types';
import { getSingleMenu } from '../api/menu_api';
import PDF from '../components/PDF';


const MenuViewPage: React.FC<any> = (props) => {

    const [ menu, setMenu ] = useState<Menu>();

    const callGetMenu = async() => {
        const menu = await getSingleMenu(props.match.params.menuname);
        setMenu(menu);
        console.log(menu);
      }

    useEffect(() => {
        callGetMenu();
    }, []);

    return (
        <div>
            {/* <PDF menuname={menuname} drinks={drinks} /> */}
            {props.match.params.menuname}
        </div>
    )
}

export default MenuViewPage;
