import React from 'react';
import { Link } from 'react-router-dom';
// import Menus from '../containers/Menus';
// import Search from '../containers/Search';
// import RandomDrink from '../containers/RandomDrink';

export default function Navbar() {
    return (
        <div>
            <Link to="/">Search Cocktails</Link>
            <Link to="/random">Random Drink</Link>
            <Link to="/menus">Menus Dashboard</Link>
        </div>
    )
}
