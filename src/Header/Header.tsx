import React from 'react';
import logo from '../result.svg';
import './Header.css';
import { NavLink, Link } from 'react-router-dom';
import { useColorMode } from '../theme';
import { IconButton, Tooltip } from '@mui/material';
import { 
    Brightness4 as DarkIcon, 
    Brightness7 as LightIcon 
} from '@mui/icons-material';


const Header: React.FC = () => {
    const { mode, toggleColorMode } = useColorMode();

    return (
        <header className="header-wrapper">
            <div className="header-container">
                <div className='logo-container'>
                    <Link to="/" className="logo-link">
                        <img src={logo} className="logo" alt="Hibender.io" />
                        <span className="brand-name">Hibender.io</span>
                    </Link>
                </div>
                <div className="nav-and-actions">
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
                    <div className="theme-toggle">
                        <Tooltip title={mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}>
                            <IconButton onClick={toggleColorMode} color="inherit" sx={{ ml: 1, color: mode === 'dark' ? 'secondary.main' : 'primary.main' }}>
                                {mode === 'dark' ? <LightIcon /> : <DarkIcon />}
                            </IconButton>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
