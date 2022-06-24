import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
    return (
        <nav className='bg-sec main_nav py-3'>
            <div className='ms-3'>
                <NavLink to={"/dashboard"}>
                <i className="fa-solid fa-chart-line"></i> Dashboard
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar