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
                <img className="circle" src={RiverImg} alt="A river landscape"></img>
                <Link to="/about"><span className="white-text header">Nathan Potts</span></Link>
                <Link to="/contact"><span className="white-text email">nathan.potts41@gmail.com</span></Link>
            </div></li>
            <li><Link to="/about" className="waves-effect">About Me</Link></li>
            <li><Link to="/portfolio" className="waves-effect waves-teal">Portfolio</Link></li>
            <li><Link to="/contact" className="waves-effect waves-teal">Contact</Link></li>
            <li><Link to="/resume" className="waves-effect waves-teal">Resume</Link></li>
            <li><div className="divider"></div></li>
            <li><a className="sidenav-close" href="#!">Close Nav</a></li>
        </ul>
    )
}

export default SideNav;
