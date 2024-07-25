import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header bg-white py-5">
            <nav className="nav-container d-flex justify-content-center">
                <a className="nav-link" href="#">HOME</a>
                <a className="nav-link" href="#">ACERCA DE MI</a>
                <a className="nav-link" href="#">SERVICIOS</a>
                <a className="nav-link" href="#">HABILIDADES Y EXPERIENCIA</a>
                <a className="nav-link" href="#">ULTIMOS TRABAJOS</a>
                <a className="nav-link" href="#">OPINIONES DE CLIENTES</a>
                <a className="nav-link" href="#">NOVEDADES</a>               
            </nav>
            <a className="nav-link hablemos" href="#">Hablemos!</a>
        </header>
    );
}

export default Header;