import React from 'react';
import { Link } from 'react-router-dom';
import Time from '../Time';

function Nav() {
    return (
        <header>
            {/* <Time /> clock needs to update dynamically but not repaint the whole page */}

            <div>Nathan Potts</div>
            <nav>
                <ul>
                    <li>
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
            </nav>
            {/* needs to display the time
            needs to display my name 
            needs to display navigation bar (about me, portfolio, contact, resume)
            what section on needs to be highlighted in NAV */}

        </header>
    )
}

export default Nav;