import React, { useEffect, useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'
import throttle from 'lodash.throttle'
import './Header.css'
import { Collapse } from 'bootstrap'

const Header = ({ onShowModal }) => {
    const [scrolling, setScrolling] = useState(false)
    const [navbarToggler, setNavbarToggler] = useState(false)

    const handleScroll = throttle(() => {
        if (window.scrollY > 50 && !scrolling) {
            setScrolling(true)
        } else if (window.scrollY <= 50 && scrolling) {
            setScrolling(false)
        }
    }, 200)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        };
    }, [scrolling])

    useEffect(() => {
        const collapse = document.querySelector('#navbarNavAltMarkup')
        const bsCollapse = new Collapse(collapse, { toggle: false })

        if (navbarToggler) {
            bsCollapse.show()
            document.querySelector('.header-custom').style.height = 'auto'
        } else {
            bsCollapse.hide()
            if (scrolling) {
                document.querySelector('.header-custom').style.height = '3rem'
            }
        }
    }, [navbarToggler, scrolling])

    const handleNavLinkClick = (offset) => {
        if (navbarToggler) {
            setNavbarToggler(false)
        }
        setScrolling(true)

        setTimeout(() => {
            const yOffset = -47
            if (offset) {
                const element = document.querySelector(`#${offset}`)
                const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset

                window.scrollTo({
                    top: yPosition,
                    behavior: 'auto'
                })
            } else {
                scroll.scrollToTop({
                    duration: 0,
                    smooth: true
                })
            }
        }, 0)
    }

    const handleCloseForm = () => {
        setNavbarToggler(false)
        if (scrolling) {
            document.querySelector('.header-custom').style.height = '3rem'
        }
    }

    return (
        <header className={`bg-white py-4 d-flex align-items-center header-custom sticky-top ${scrolling ? 'header-transparent' : 'header-solid'}`}>
            <div className="container-fluid">
                <nav className="navbar navbar-expand-lg">
                    <button
                        className="navbar-toggler"
                        type="button"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded={navbarToggler}
                        aria-label="Toggle navigation"
                        onClick={() => setNavbarToggler(!navbarToggler)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse${navbarToggler ? ' show' : ''}`} id="navbarNavAltMarkup">
                        <div className="navbar-nav d-flex justify-content-center flex-grow-1">
                            <Link className="nav-link" to="acerca-de-mi" smooth={false} duration={0} offset={-47} onClick={() => handleNavLinkClick('acerca-de-mi')}>HOME</Link>
                            <Link className="nav-link" to="acerca-de-mi" smooth={false} duration={0} offset={-47} onClick={() => handleNavLinkClick('acerca-de-mi')}>ACERCA DE MI</Link>
                            <Link className="nav-link" to="servicios" smooth={false} duration={0} offset={-47} onClick={() => handleNavLinkClick('servicios')}>SERVICIOS</Link>
                            <Link className="nav-link" to="skills" smooth={false} duration={0} offset={-47} onClick={() => handleNavLinkClick('skills')}>HABILIDADES Y EXPERIENCIA</Link>
                            <Link className="nav-link" to="trabajos" smooth={false} duration={0} offset={-47} onClick={() => handleNavLinkClick('trabajos')}>ULTIMOS TRABAJOS</Link>
                            <Link className="nav-link" to="reviews" smooth={false} duration={0} offset={-47} onClick={() => handleNavLinkClick('reviews')}>OPINIONES DE CLIENTES</Link>
                            <Link className="nav-link" to="novedades" smooth={false} duration={0} offset={-47} onClick={() => handleNavLinkClick('novedades')}>NOVEDADES</Link>
                            <Link className="nav-link hablemos" to="contacto" smooth={false} duration={0} offset={-47} onClick={() => {onShowModal();handleCloseForm();}}>Hablemos!</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
