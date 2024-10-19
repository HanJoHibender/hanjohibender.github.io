import React from 'react';
import logo from '../result.svg';
import './Header.css';


const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className='logo-container'>

                    <a href="/home">
                        <img src={logo} className="logo" alt="Hibender.io" />
                    </a>
                </div>
                <div className='nav-container'>
                    <nav className="nav">
                        <ul>
                            <li><a href="/about">About</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;