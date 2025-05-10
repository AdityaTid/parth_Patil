import React from 'react';
import './assets/css/light-theme.css';
import './assets/css/dark-theme.css';
import './assets/css/animations.css';

const Header = ({ toggleTheme, isDarkMode }) => {
    return (
        <header className={`header ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="logo">
                <h1>Local AC Shop</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <button onClick={toggleTheme} className="theme-toggle">
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </header>
    );
};

export default Header;