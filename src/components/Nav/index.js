import React from 'react';

function Nav() {
    return (
        <div className="navbar-fixed">
            {/* <Time /> clock needs to update dynamically but not repaint the whole page */}
            <nav className="yellow darken-3">
                <div className="nav-wrapper">
                    {/* <a href="/about" className="brand-logo">Nathan Potts</a> */}
                    <a href="#" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                </div>
            </nav>
        </div>
    )
}

export default Nav;