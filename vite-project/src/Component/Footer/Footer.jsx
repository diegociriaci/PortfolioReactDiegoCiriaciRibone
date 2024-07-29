import React from 'react';
import './Footer.css'
const Footer = ({ onShowModal }) => {
    return(
	    <footer className="py-5 d-flex flex-direction-column">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-8 footer-header">
                        <h1 className="mb-4 titulo-footer">Escribinos, <br />Vamos a trabajar.</h1>
                        <hr className="bg-white hr-tamanio" />
                        <div className="mb-3 d-flex align-items-center">
                            <img className="icono-mensaje-ubicacion me-3" src="img/img-mensaje.svg" alt="Icono de mensaje" />
                            <div>
                                <p className="info-contacto-titulo mb-0">Email</p>
                                <p className="info-contacto-subtitulo mb-0">diegociriaci@gmail.com</p>
                            </div>
                        </div>
                        <hr className="bg-white hr-tamanio"/>
                        <div className="mb-3 d-flex align-items-center">
                            <img className="icono-mensaje-ubicacion me-3" src="img/img-ubicacion.svg" alt="Icono de ubicación" />
                            <div>
                                <p className="info-contacto-titulo mb-0">Ubicación</p>
                                <p className="info-contacto-subtitulo mb-0">Ciudad de Córdoba, Argentina</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 text-center d-flex flex-column justify-content-center align-items-center saludo">
                        <button className="boton-saludo mb-3" onClick={onShowModal}>
                            <img src="img/img-flecha-diagonal.svg" alt="Flecha diagonal"/>
                        </button>
                        <p className="mb-0">
                            <img src="img/img-mano.svg" alt="Icono de mano"/> Saludar!
                        </p>
                    </div>
                </div>
                <hr className="bg-white hr-final" />
                <div className="d-flex justify-content-between align-items-center pie-pagina">
                    <p className="mb-0">© 2024 - Desarrollado por Diego Ciriaci Ribone.</p>
                    <div>
                        <a href="https://www.instagram.com/diegoocrr/" target="_blank" rel="noopener noreferrer">
                            <img src="img/img-instagram.svg" alt="Instagram" className="me-3"/>
                        </a>
                        <a href="https://ar.pinterest.com/" target="_blank" rel="noopener noreferrer">
                            <img src="img/img-pinterest.svg" alt="Pinterest" className="me-3"/>
                        </a>
                        <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">
                            <img src="img/img-behance.svg" alt="Behance"/>
                        </a>    
                    </div>
                    <p className="email mb-0">diegociriaci@gmail.com</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer