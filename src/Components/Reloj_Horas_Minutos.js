import { useState } from "react";
import '../Style-Sheets/Reloj.css'

const RelojHorasMinutos = () => {
  let tiempo = new Date();
  let horas = tiempo.getHours();
  let minutos = tiempo.getMinutes();
  let segundos = tiempo.getSeconds();

  if (horas < 10)
    horas = '0' + horas;
  if (minutos < 10)
    minutos = '0' + minutos;
  if (segundos < 10)
    segundos = '0' + segundos;

  let Mostrar_Horas_Minutos = (horas + ':' + minutos);

  const [, setTime] = useState(tiempo);

  const actualizarTiempo = () => {
    let tiempo = new Date();
    setTime(tiempo)

  }

  setInterval(actualizarTiempo, 1000)

  return (
    
    <p className="hora_js" >{Mostrar_Horas_Minutos}</p>

  );
}

export default RelojHorasMinutos;









