import React from 'react';
import './Header.css';

const Header = () => {
    return (
        // <header className="bg-white py-5 d-flex align-items-center header-custom">
        //     <nav className="nav-container d-flex justify-content-center flex-grow-1">
        //         <a className="nav-link" href="#">HOME</a>
        //         <a className="nav-link" href="#">ACERCA DE MI</a>
        //         <a className="nav-link" href="#">SERVICIOS</a>
        //         <a className="nav-link" href="#">HABILIDADES Y EXPERIENCIA</a>
        //         <a className="nav-link" href="#">ULTIMOS TRABAJOS</a>
        //         <a className="nav-link" href="#">OPINIONES DE CLIENTES</a>
        //         <a className="nav-link" href="#">NOVEDADES</a>               
        //     </nav>
        //     <a className="nav-link hablemos" href="#">Hablemos!</a>
        // </header>
    <header className="bg-white py-4 d-flex align-items-center header-custom">
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg">
                {/* <a className="navbar-brand" href="#">Navbar</a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav d-flex justify-content-center flex-grow-1">
                        <a className="nav-link" href="#">HOME</a>
                        <a className="nav-link" href="#">ACERCA DE MI</a>
                        <a className="nav-link" href="#">SERVICIOS</a>
                        <a className="nav-link" href="#">HABILIDADES Y EXPERIENCIA</a>
                        <a className="nav-link" href="#">ULTIMOS TRABAJOS</a>
                        <a className="nav-link" href="#">OPINIONES DE CLIENTES</a>
                        <a className="nav-link" href="#">NOVEDADES</a>
                        <a className="nav-link hablemos" href="#">Hablemos!</a>
                    </div>
                </div>
            </nav>
        </div>
    </header>

    );
}

export default Header;