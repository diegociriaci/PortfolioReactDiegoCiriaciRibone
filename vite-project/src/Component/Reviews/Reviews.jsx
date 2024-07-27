import React from 'react';
import './Reviews.css';

const Reviews = () => {
    return (
        <section id="reviews" className="reviews">
            <div className="reviews-header">
                <h1>Opiniones de clientes</h1>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {/* si quiero agregar mas opiniones debo agregar esta linea de codigo */}
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="opinion d-flex justify-content-center align-items-center">
                                <div className="contenedor-opiniones d-flex justify-content align-items-center flex-column">
                                    <img className="imagen-perfil" src="img/img-profesional-1.jpg" alt="Perfil de John Smith" />
                                    <div className="informacion-persona d-flex flex-column align-items-center">
                                        <p className="nombre-persona-opinion">John Smith</p>
                                        <p className="ocupacion-persona-opinion">Digital Marketer</p>
                                        <p className="texto-opinion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dolorum delectus quae laboriosam inventore amet. Illum repudiandae ratione unde sed quos voluptates neque iure, velit molestiae temporibus quisquam dignissimos veritatis!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="opinion d-flex justify-content-center align-items-center">
                                <div className="contenedor-opiniones d-flex justify-content align-items-center flex-column">
                                    <img className="imagen-perfil" src="img/img-profesional-2.jpg" alt="Perfil de Ana Maria Suarez" />
                                    <div className="informacion-persona d-flex flex-column align-items-center">
                                        <p className="nombre-persona-opinion">Ana Maria Suarez</p>
                                        <p className="ocupacion-persona-opinion">Designer</p>
                                        <p className="texto-opinion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dolorum delectus quae laboriosam inventore amet. Illum repudiandae ratione unde sed quos voluptates neque iure, velit molestiae temporibus quisquam dignissimos veritatis!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="opinion d-flex justify-content-center align-items-center">
                                <div className="contenedor-opiniones d-flex justify-content align-items-center flex-column">
                                    <img className="imagen-perfil" src="img/img-profesional-2.jpg" alt="Perfil de Ana Maria Suarez" />
                                    <div className="informacion-persona d-flex flex-column align-items-center">
                                        <p className="nombre-persona-opinion">Ana Maria Suarez</p>
                                        <p className="ocupacion-persona-opinion">Designer</p>
                                        <p className="texto-opinion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dolorum delectus quae laboriosam inventore amet. Illum repudiandae ratione unde sed quos voluptates neque iure, velit molestiae temporibus quisquam dignissimos veritatis!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* si quiero agregar mas opiniones debo agregar este item tambien */}
                        <div className="carousel-item">
                            <div className="opinion d-flex justify-content-center align-items-center">
                                <div className="contenedor-opiniones d-flex justify-content align-items-center flex-column">
                                    <img className="imagen-perfil" src="img/img-profesional-2.jpg" alt="Perfil de Ana Maria Suarez" />
                                    <div className="informacion-persona d-flex flex-column align-items-center">
                                        <p className="nombre-persona-opinion">Ana Maria Suarez</p>
                                        <p className="ocupacion-persona-opinion">Designer</p>
                                        <p className="texto-opinion">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dolorum delectus quae laboriosam inventore amet. Illum repudiandae ratione unde sed quos voluptates neque iure, velit molestiae temporibus quisquam dignissimos veritatis!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Reviews
