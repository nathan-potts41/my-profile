import React from 'react';
import { Link } from 'react-router-dom';

function SideNav() {
    return (
        <div className="col s12 m2 l2 side-navi">
            <div className="container center">
                <div>
                    <Link to="/about" className="waves-effect waves-teal btn-flat nav-tab">About Me</Link>
                </div>
                <div class="divider"></div>
                <div>
                    <Link to="/portfolio" className="nav-tab waves-effect waves-teal btn-flat">Portfolio</Link>
                </div>
                <div class="divider"></div>
                <div>
                    <Link to="/contact" className="nav-tab waves-effect waves-teal btn-flat">Contact</Link>
                </div>
                <div class="divider"></div>
                <div>
                    <Link to="/resume" className="nav-tab waves-effect waves-teal btn-flat">Resume</Link>
                </div>
            </div>
        </div>
    )
}

export default SideNav;
