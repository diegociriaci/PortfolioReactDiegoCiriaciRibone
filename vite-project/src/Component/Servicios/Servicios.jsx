import React from 'react';
import './Servicios.css'
const Servicios = () => {
    return(
        <section className="servicios py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="servicios-header">
                        <h1>Servicios que ofrezco</h1>
                        <p className="servicios-descripcion">
                            Ofrezco una amplia gama de servicios especializados para satisfacer las necesidades de diseño y gestión de datos de tu proyecto. Con experiencia en diseño gráfico, desarrollo de interfaces de usuario intuitivas y eficientes, así como en la administración de bases de datos, puedo proporcionar soluciones creativas y funcionales que impulsen el éxito de tus iniciativas digitales.
                        </p>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="servicios-lista">
                        <hr />
                        <div className="servicio-item d-flex align-items-center">
                            <p className="num mb-0">01/</p>
                            <div className="d-flex flex-column flex-grow-1 ms-3">
                                <p className="nombre-servicio mb-0">Diseño gráfico</p>
                            </div>
                            <div className="d-flex flex-column align-items-end ms-3">
                                <div className="d-flex align-items-center mb-2 boton-info">
                                    <button className="btn boton-servicio">
                                        <img src="img/img-flecha-diagonal.svg" alt="Flecha" />
                                    </button>
                                    <p className="texto-explorar mb-0 ms-2">Explorar</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="servicio-item d-flex align-items-center">
                            <p className="num mb-0">02/</p>
                            <div className="d-flex flex-column flex-grow-1 ms-3">
                                <p className="nombre-servicio mb-0">Diseño de interfaz de usuario</p>
                            </div>
                            <div className="d-flex flex-column align-items-end ms-3">
                                <div className="d-flex align-items-center mb-2 boton-info">
                                    <button className="btn boton-servicio">
                                        <img src="img/img-flecha-diagonal.svg" alt="Flecha" />
                                    </button>
                                    <p className="texto-explorar mb-0 ms-2">Explorar</p>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="servicio-item d-flex align-items-center">
                            <p className="num mb-0">03/</p>
                            <div className="d-flex flex-column flex-grow-1 ms-3">
                                <p className="nombre-servicio mb-0">Administración de base de datos</p>
                            </div>
                            <div className="d-flex flex-column align-items-end ms-3">
                                <div className="d-flex align-items-center mb-2 boton-info">
                                    <button className="btn boton-servicio">
                                        <img src="img/img-flecha-diagonal.svg" alt="Flecha" />
                                    </button>
                                    <p className="texto-explorar mb-0 ms-2">Explorar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Servicios