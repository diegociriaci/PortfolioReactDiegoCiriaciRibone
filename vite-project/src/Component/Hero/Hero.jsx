import React from 'react'
import './Hero.css'

const Hero = ({ onShowModal }) => {
    return (
        <section id="acerca-de-mi" className="hero">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12">
                        <h2 className="nombre-apellido">Diego Ciriaci Ribone</h2>
                        <h2 className="desarrollador-nombre">Desarrollador & Diseñador</h2>
                        <div className="redes">
                            <a href="https://www.instagram.com/diegoocrr/" className="nav-link-hero">INSTAGRAM</a>
                            <img className="imagen-flecha" src="img/img-flecha-diagonal-naranja.png" alt="Flecha" />
                            <a href="https://www.behance.net/" className="nav-link-hero">BEHANCE</a>
                            <img className="imagen-flecha" src="img/img-flecha-diagonal-naranja.png" alt="Flecha" />
                            <a href="https://dribbble.com/" className="nav-link-hero">DRIBBLE</a>
                            <img className="imagen-flecha" src="img/img-flecha-diagonal-naranja.png" alt="Flecha" />
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-md-row justify-content-center align-items-center contenedor-presentacion">
                    <div className="col-md-4 mi-presentacion d-flex flex-column align-items-start">
                        <p>Me llamo Diego, soy estudiante de Ingeniería en Sistemas de Información, me considero una persona proactiva, responsable, persistente, disciplinada, organizada y curiosa, bastante exigente con todas las cosas que hago, con ganas de aprender y mejorar constantemente.</p>
                        <button className="btn d-block boton-contratame" onClick={onShowModal}>
                            Contrátame! <img className="imagen-flecha-boton" src="img/img-flecha-diagonal.svg" alt="Flecha" />
                        </button>
                    </div>
                    <div className="col-md-4 d-flex justify-content-center align-items-center foto-perfil-flexbox">
                        <img className="foto-perfil" src="img/foto-perfil.png" alt="Foto de perfil" />
                    </div>
                    <div className="col-md-4 d-flex flex-column align-items-center contenedor-info">
                        <div className="info-item d-flex align-items-center flex-column">
                            <p className="info-numero">2</p>
                            <p className="info-texto">PROYECTOS COMPLETADOS</p>
                        </div>
                        <div className="info-item d-flex align-items-center flex-column">
                            <p className="info-numero">1%</p>
                            <p className="info-texto">CALIFICACIÓN DEL CLIENTE</p>
                        </div>
                        <div className="info-item d-flex align-items-center flex-column">
                            <p className="info-numero">2</p>
                            <p className="info-texto">MESES DE EXPERIENCIA</p>
                        </div>
                    </div>
                </div>
                <div className="row contenedor-puntuacion">
                    <div className="col-12 text-start">
                        <div className="imagen-clutch">
                            <img src="img/img-clutch.svg" alt="Clutch" />
                        </div>
                        <div className="imagen-estrella">
                            <img src="img/img-estrella.svg" alt="Estrella" />
                            <img src="img/img-estrella.svg" alt="Estrella" />
                            <img src="img/img-estrella.svg" alt="Estrella" />
                        </div>
                        <div className="opinion-texto">
                            <p>3 de 5 basado en 200 reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
