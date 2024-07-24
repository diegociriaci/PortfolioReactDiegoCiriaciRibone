import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Component/Header/Header.jsx'
import Hero from './Component/Hero/Hero.jsx'
import Servicios from './Component/Servicios/Servicios.jsx'
import Skills from './Component/Skills/Skills.jsx'
import Trabajos from './Component/Trabajos/Trabajos.jsx'
import Reviews from './Component/Reviews/Reviews.jsx'
import Novedades from './Component/Novedades/Novedades.jsx'
import Footer from './Component/Footer/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Hero/>
    <Servicios/>
    <Skills/>
    <Trabajos/>
    <Reviews/>
    <Novedades/>
    <Footer/>
    <App />
  </React.StrictMode>,
)
