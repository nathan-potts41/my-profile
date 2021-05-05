import React from 'react';
import { Link } from 'react-router-dom';

function SideNav() {
    return (
        <div>
            <ul className="container-fluid">
                <li className="nav-tab">
                    <Link to="/about">About Me</Link>
                </li>
                <li>
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Me</Link>
                </li>
                <li>
                    <Link to="/resume">Resume</Link>
                </li>
            </ul>
        </div>
    )
}

export default SideNav;
