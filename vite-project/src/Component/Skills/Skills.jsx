import React from 'react'
import './Skills.css'
const Skills = () => {
    return(
        <section id="skills" className="skills d-flex flex-row justify-content-between py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 skills-header">
                        <h1>Habilidades y Experiencia</h1>
                        <p className="skills-descripcion">Cuento con experiencia en el manejo básico-intermedio a nivel académico de: Python, C#, HTML, CSS, MySQL y Git.</p>
                        <div className="habilidades">
                            <h2>Habilidades</h2>
                            <div className="row d-flex align-items-center flex-wrap imagenes-skills">
                                <div className="col-6 col-md-4 mb-1 imagenes-skills-caja">
                                    <img src="img/img-python.svg" alt="Python" />
                                    <p>Python</p>
                                </div>
                                <div className="col-6 col-md-4 mb-1 d-flex align-items-center justify-content-center flex-column imagenes-skills-caja">
                                    <img src="img/img-csharp.svg" alt="C#" />
                                    <p>C#</p>
                                </div>
                                <div className="col-6 col-md-4 mb-1 imagenes-skills-caja">
                                    <img src="img/img-html.svg" alt="HTML" />
                                    <p>HTML</p>
                                </div>
                                <div className="col-6 col-md-4 mb-1 imagenes-skills-caja">
                                    <img src="img/img-css.svg" alt="CSS" />
                                    <p>CSS</p>
                                </div>
                                <div className="col-6 col-md-4 mb-1 imagenes-skills-caja">
                                    <img src="img/img-mysql.svg" alt="MySQL" />
                                    <p>MySQL</p>
                                </div>
                                <div className="col-6 col-md-4 mb-1 imagenes-skills-caja">
                                    <img src="img/img-git.svg" alt="Git" />
                                    <p>Git</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 d-flex flex-column aling-items-start experiencia-lista">
                        <h2>Experiencia</h2>
                        <hr className="my-3"/>
                        <div className="experiencia-item d-flex align-items-center">
                            <button className="fechas-contenedor">
                                <p className="fechas mb-0">2019-PRESENT</p>
                            </button>
                            <p className="ocupacion flex-grow-1 d-fle mb-0 text-center">WEB UI/UX DESIGNER</p>
                            <p className="plataforma mb-0 ms-auto">Instagram</p>
                        </div>
                        <hr className="my-3"/>
                        <div className="experiencia-item d-flex align-items-center">
                            <button className="fechas-contenedor">
                                <p className="fechas mb-0">2019-PRESENT</p>
                            </button>
                            <p className="ocupacion flex-grow-1 mb-0 text-center">WEB UI/UX DESIGNER</p>
                            <p className="plataforma mb-0 ms-auto">Facebook</p>
                        </div>
                        <hr className="my-3"/>
                        <div className="experiencia-item d-flex align-items-center">
                            <button className="fechas-contenedor">
                                <p className="fechas mb-0">2019-PRESENT</p>
                            </button>
                            <p className="ocupacion flex-grow-1 mb-0 text-center">WEB UI/UX DESIGNER</p>
                            <p className="plataforma mb-0 ms-auto">Twitter</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills