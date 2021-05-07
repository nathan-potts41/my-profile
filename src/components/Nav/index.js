import React from 'react';
import Time from '../Time';

function Nav() {
    return (
        <header>
            <div className="navbar-fixed">
                {/* <Time /> clock needs to update dynamically but not repaint the whole page */}
                <nav className="nav-wrapper yellow darken-3">
                    <a href="#" className="brand-logo center">Nathan Potts</a>
                </nav>
                {/* needs to display the time
            needs to display my name 
            needs to display navigation bar (about me, portfolio, contact, resume)
            what section on needs to be highlighted in NAV */}
            </div>
        </header>
    )
}

export default Nav;