import React from 'react';
import './Novedades.css'
const Novedades = () => {
    return(
	<section id="novedades" className="novedades py-5">
        <div className="container">
            <div className="row">
                <div className="novedades-header col-12 mb-4">
                    <h1>Novedades</h1>
                </div>
            </div>
            <div className="card-container">
                <div className="card h-100 card-custom">
                    <div className="imagen-novedad">
                        <img src="img/img-novedad-1.jpg" className="card-img-top" alt="Novedad 1" />
                    </div>
                    <div className="card-body">
                        <p className="card-text">Nuevas tendencias en experiencia de usuario: La importancia de la personalización</p>
                    </div>
                </div>
                <div className="card h-100 card-custom">
                    <div className="imagen-novedad">
                        <img src="img/img-novedad-2.jpg" className="card-img-top" alt="Novedad 2" />
                    </div>
                    <div className="card-body">
                        <p className="card-text">COVID-19: Impacto en el diseño de experiencia de usuario</p>
                    </div>
                </div>
                <div className="card h-100 card-custom">
                    <div className="imagen-novedad">
                        <img src="img/img-novedad-3.jpg" className="card-img-top" alt="Novedad 3" />
                    </div>
                    <div className="card-body">
                        <p className="card-text">Descubriendo los detalles: Entrevista con un experto en UX/UI</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    )
}

export default Novedades