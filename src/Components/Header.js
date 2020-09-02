import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link link-hover" exact>Info</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/aqi" className="nav-link link-hover" exact>Air Quality Index</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/map" className="nav-link link-hover" exact>Map</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Header;