import React from 'react';
import './Header.css'
const Header = () => {
    return(
	<header class="header bg-white py-5">
        <nav class="d-flex justify-content-center align-items-center flex-grow-1">
            <a class="nav-link" href="#">HOME</a>
            <a class="nav-link" href="#">PORTFOLIO</a>
            <a class="nav-link" href="#">ABOUT</a>
            <a class="nav-link" href="#">PAGE</a>
        </nav>
        <a class="nav-link hablemos" href="#">Hablemos!</a>
    </header>
    )
}

export default Header