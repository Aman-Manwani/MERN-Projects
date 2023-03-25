import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
    return (
        <>
            <nav>
                <div className='logo'>
                    <NavLink to="/">
                        CRUD APP
                    </NavLink>
                </div>
                <ul>
                    <li><NavLink  to="/all">allUsers</NavLink></li>
                    <li><NavLink to="/add"> addUsers</NavLink></li>
                </ul>
            </nav>
        </>
    )
};

export default Navbar;