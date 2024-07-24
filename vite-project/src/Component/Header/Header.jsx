import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header bg-white py-5">
            <nav className="nav-container d-flex justify-content-center">
                <a className="nav-link" href="#">HOME</a>
                <a className="nav-link" href="#">PORTFOLIO</a>
                <a className="nav-link" href="#">ABOUT</a>
                <a className="nav-link" href="#">PAGE</a>
            </nav>
            <a className="nav-link hablemos" href="#">Hablemos!</a>
        </header>
    );
}

export default Header;