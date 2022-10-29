import '../Style-Sheets/Footer.css'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='Contenedor_Footer'>
        <h1>KonangGC</h1>
        <p>Somos expertos en la creacion de tus sueños</p>
        <div className="CopyRight">
          <p>©copyright 2022</p>
        </div>
      </div>

      <div className="Linea"></div>
    </footer>
  );
}

export default Footer;