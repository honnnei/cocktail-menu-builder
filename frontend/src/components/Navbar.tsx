import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav >
            {/* className="navbar navbar-expand-lg navbar-light bg-light" */}
            <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
                    <Link className="navbar-brand" to="/">Cocktail Menu Builder</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active btn btn-outline-info" to="/search">Search</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link btn btn-outline-danger" to="random">Random Drink</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link btn btn-outline-warning" to="menus">Menus</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;