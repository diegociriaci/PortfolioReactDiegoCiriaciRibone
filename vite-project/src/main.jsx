import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Header from './Component/Header/Header.jsx'
import Hero from './Component/Hero/Hero.jsx'
import Servicios from './Component/Servicios/Servicios.jsx'
import Skills from './Component/Skills/Skills.jsx'
import Trabajos from './Component/Trabajos/Trabajos.jsx'
import Reviews from './Component/Reviews/Reviews.jsx'
import Novedades from './Component/Novedades/Novedades.jsx'
import Footer from './Component/Footer/Footer.jsx'
import MyModal from './Component/MyModal/MyModal.jsx'
import NotificacionFormulario from './Component/NotificacionFormulario/NotificacionFormulario.jsx'

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const handleShowModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  return (
    <>
      <Header onShowModal={handleShowModal}/>
      <Hero onShowModal={handleShowModal}/>
      <Servicios/>
      <Skills/>
      <Trabajos/>
      <Reviews/>
      <Novedades/>
      <Footer onShowModal={handleShowModal}/>
      <MyModal show={showModal} handleClose={handleCloseModal}/>
      <NotificacionFormulario/>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
