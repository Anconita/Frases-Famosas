import React from 'react'
import '../Style-Sheets/Contenedor_Principal.css'

const Contenedor_Principal = (props) => {

  return (
    <div className='container'>
      <div className='Contenedor_Principal'>
        <div className='row g-8'>
          <div className='Columna_Izquierda col-md-4'>
            <div className='Contenedor_Hora'>
              <h1 className='Hora'>{props.horas_minutos}<p className='Segundos'>{props.segundos}</p></h1>
            </div>
            <img src={require('../Imagenes/imagen.jpg')} className='Imagen img-fluid rounded-start' alt=".." />

          </div>
          <div className='Contenedor_Columna_Derecha col-md-8'>
            <div className='Contenedor_Frase_Autor'>
              <div className='Contenedor_Frase'>
                <p className='Frase h4' >{props.frase}</p>
              </div>
              <div className='Contenedor_Autor'>
                <p className='Autor h4'>{props.autor}</p>
              </div>
            </div>
            <button className='Boton-Siguiente btn btn-dark' onClick={props.click}>Siguiente</button>
          </div>

        </div>
      </div>
    </div>
  );
}


export default Contenedor_Principal;