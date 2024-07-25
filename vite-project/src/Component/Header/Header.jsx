import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
    const [scrolling, setScrolling] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
    <header className={`bg-white py-4 d-flex align-items-center header-custom sticky-top ${scrolling ? 'header-transparent' : 'header-solid'}`}>        
        <div className="container-fluid ">
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav d-flex justify-content-center flex-grow-1">
                        <a className="nav-link" href="#">HOME</a>
                        <Link className="nav-link" to="acerca-de-mi" smooth={true} duration={50}>ACERCA DE MI</Link>
                        <Link className="nav-link" to="servicios" smooth={true} duration={50}>SERVICIOS</Link>
                        <Link className="nav-link" to="skills" smooth={true} duration={50}>HABILIDADES Y EXPERIENCIA</Link>
                        <Link className="nav-link" to="trabajos" smooth={true} duration={50}>ULTIMOS TRABAJOS</Link>
                        <Link className="nav-link" to="reviews" smooth={true} duration={50}>OPINIONES DE CLIENTES</Link>
                        <Link className="nav-link" to="novedades" smooth={true} duration={50}>NOVEDADES</Link>
                        <a className="nav-link hablemos" href="#">Hablemos!</a>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    );
}

export default Header;