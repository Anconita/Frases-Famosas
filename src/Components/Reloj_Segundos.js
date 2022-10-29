import { useState } from "react";
import '../Style-Sheets/Reloj.css'

const Reloj_Segundos = () => {
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

  let Mostrar_Segundos = (segundos);

  const [time, setTime] = useState(tiempo);

  const actualizarTiempo = () => {
    let tiempo = new Date();
    setTime(tiempo)

  }

  setInterval(actualizarTiempo, 1000)

  return (
    <>
      {Mostrar_Segundos}

    </>
  );
}

export default Reloj_Segundos;