import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="navbar-fixed">
            {/* <Time /> clock needs to update dynamically but not repaint the whole page */}
            <nav className="yellow darken-3">
                <div className="nav-wrapper">
                    <a href="/about" className="brand-logo center">Nathan Potts</a>
                    <a href="#" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
            </nav>
            {/* needs to display the time
            needs to display my name 
            needs to display navigation bar (about me, portfolio, contact, resume)
            what section on needs to be highlighted in NAV */}
        </div>
    )
}

export default Nav;