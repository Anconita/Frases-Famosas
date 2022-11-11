import '../Style-Sheets/Header.css'
import React from 'react'

const Header = () => {
  return (
    <div className='Contenedor_Header container-fluid'>
      <div className='row'>
        <div className='col'></div>
        <div className='col'></div>

        {/*TITULO HEADER*/}
        <div className='col'>
          <h1 className='Titulo_Header'>KonangGC</h1>
        </div>

        <div className='col'></div>

        {/*ICONOS HEADER*/}
        <div className='Contenedor_Iconos col'>
          <a className='Link_Icono_Youtube' href="https://www.youtube.com/" target='_blank' rel="noreferrer">
          <i className="Icono_Youtube bi bi-youtube"></i>
          </a>
          <a className='Link_Icono_Github' href="https://github.com/Anconita" target='_blank' rel="noreferrer">
          <i className="Icono_Github bi bi-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;

