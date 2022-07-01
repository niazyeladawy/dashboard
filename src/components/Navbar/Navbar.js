import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from "react-router-dom"

import './navbar.css'

const Navbar = () => {
    const location = useLocation();
    const [bread, setBread] = useState();

    const getLoc = () => {
        let loc = location.pathname.split("/").splice(2);
        setBread(loc);
    }
    useEffect(() => {
        getLoc()
    }, [location]);

    console.log(location);
    return (
        <nav className='bg-sec main_nav py-3'>
            <div className='ms-3'>
                <p>{location.pathname}</p>

                {
                    bread?.map((item, idx) => (
                        <NavLink to={`/dashboard/${item}`}>
                            <i className="fa-solid fa-chart-line"></i> {item}
                        </NavLink>
                    ))
                }

            </div>
        </nav>
    )
}

export default Navbar