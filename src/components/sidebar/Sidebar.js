import React, { useState } from 'react'
import './sidebar.css'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const [collapseStatus, setcollapseStatus] = useState(false);

    const handleCollapseStatus = () => {
        setcollapseStatus(!collapseStatus);
    }

    return (
        <div className='sidebar p-2'>
            <ul className="accordion list-unstyled" id="accordionExample">
                <li className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            <i class="fa-solid fa-chart-line"></i> <span className='ms-2'>Dashboard</span>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <ul className="accordion-body ps-5">
                            <li>
                                <a href="component_tabs.html"> Tabs </a>
                            </li>
                            <li>
                                <a href="component_accordion.html"> Accordions </a>
                            </li>
                            <li>
                                <a href="component_modal.html"> Modals </a>
                            </li>
                            <li>
                                <a href="component_cards.html"> Cards </a>
                            </li>
                            <li>
                                <a href="component_bootstrap_carousel.html">Carousel</a>
                            </li>
                            <li>
                                <a href="component_blockui.html"> Block UI </a>
                            </li>

                        </ul>
                    </div>
                </li>
                <li className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <i class="fa-solid fa-hammer" ></i> <span className='ms-2'>Setup</span>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <ul className="accordion-body ps-5">
                            <li>
                                <NavLink to={"/dashboard/setup/awards"}>
                                    Awards
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/setup/countries"}>
                                    Countries
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/setup/grade"}>
                                    Grade
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/setup/schools"}>
                                    Schools
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/dashboard/setup/organisations"}>
                                    Organisations
                                </NavLink>
                            </li>


                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar