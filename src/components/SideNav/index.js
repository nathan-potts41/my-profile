import React from 'react';
import { Link } from 'react-router-dom';
import RiverImg from '../../assets/images/RiverImg.png'
import M from "materialize-css/dist/js/materialize.min.js";

function SideNav() {
    document.addEventListener('DOMContentLoaded', function () {
        let elems = document.querySelector('#mobile-nav');
        M.Sidenav.init(elems, {});
    });
    return (
            <ul id="mobile-nav" className="sidenav sidenav-fixed">
                <li><div className="user-view">
                    <div className="background trim-color"></div>
                    <img className="circle" src={RiverImg}></img>
                    <Link to="/about"><span className="white-text name">Nathan Potts</span></Link>
                    <Link to="/contact"><span className="white-text email">nathan.potts41@gmail.com</span></Link>
                </div></li>
                <li><Link to="/about" className="waves-effect">About Me</Link></li>
                <li><Link to="/portfolio" className="waves-effect waves-teal">Portfolio</Link></li>
                <li><Link to="/contact" className="waves-effect waves-teal">Contact</Link></li>
                <li><Link to="/resume" className="waves-effect waves-teal">Resume</Link></li>
                <li><a className="sidenav-close" href="#!">Close Nav</a></li>
            </ul>
        // 
        /* <div className="col s12 m2 l2 side-navi">
    <div className="container center">
        <div>
            <Link to="/about" className="waves-effect waves-teal btn-flat nav-tab">About Me</Link>
        </div>
        <div className="divider"></div>
        <div>
            <Link to="/portfolio" className="nav-tab waves-effect waves-teal btn-flat">Portfolio</Link>
        </div>
        <div className="divider"></div>
        <div>
            <Link to="/contact" className="nav-tab waves-effect waves-teal btn-flat">Contact</Link>
        </div>
        <div className="divider"></div>
        <div>
            <Link to="/resume" className="nav-tab waves-effect waves-teal btn-flat">Resume</Link>
        </div>
    </div>
</div> */
    )
}

export default SideNav;
