import React from 'react';
import './Trabajos.css'
const Trabajos = () => {
    return(
	    <section className="works py-5">
            <div className="container">
                <div className="trabajos-header mb-4">
                    <h1>Últimos trabajos</h1>
                </div>
                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="imagenes-trabajos-caja">
                            <img src="img/img-trabajo-1.jpg" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="imagenes-trabajos-caja">
                            <img src="img/img-trabajo-2.jpg" alt="" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="imagenes-trabajos-caja">
                            <img src="img/img-trabajo-3.jpg" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <button className="btn boton-trabajos">
                        <img className="imagen-flecha-boton-trabajos" src="img/img-flecha-diagonal.svg" alt="" />
                        Mira todos los trabajos
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Trabajos