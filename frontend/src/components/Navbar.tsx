import React, { useState, useEffect} from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { useRouter } from '../utils/utils';
 

const Navbar = () => {
    const router = useRouter();

    return (
        <div className="navbar-c-container">
        <nav className="bg-light"style={{display: "block"}}>
            <ul className="nav">
                <li className="nav-item col-3">
                    <Link className={router.pathname === "/" ? "nav-link btn btn-outline-dark active" : "nav-link btn btn-outline-dark"} to="/">About</Link>
                </li>
                <li className="nav-item col-3">
                    <Link className={router.pathname === "/search" ? "nav-link btn btn-outline-info active" : "nav-link btn btn-outline-info"} to="/search">Search</Link>
                </li>
                <li className="nav-item col-3">
                    <Link className={router.pathname === "/random" ? "nav-link btn btn-outline-danger active" : "nav-link btn btn-outline-danger"} to="/random">Random Drink</Link>
                </li>
                <li className="nav-item col-3">
                    <Link className={router.pathname === "/menus" ? "nav-link btn btn-outline-warning active" : "nav-link btn btn-outline-warning"} to="/menus">Menus</Link>
                </li>
            </ul>
        </nav>
        </div>
    );
}

export default Navbar;