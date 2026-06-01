import React from 'react';
import logo from '../result.svg';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';


const Header: React.FC = () => {
    return (
        <header className="header-wrapper">
            <div className="header-container">
                <div className='logo-container'>
                    <Link to="/" className="logo-link">
                        <img src={logo} className="logo" alt="Hibender.io" />
                        <span className="brand-name">Hibender.io</span>
                    </Link>
                </div>
                <nav className="nav">
                    <ul>
                        <li>
                            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/services" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
