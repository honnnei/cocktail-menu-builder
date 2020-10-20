import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <Link to="/">Search</Link>
            <Link to="random">Random Drink</Link>
            <Link to="menus">Menus</Link>
        </nav>
    );
}

export default Navbar;