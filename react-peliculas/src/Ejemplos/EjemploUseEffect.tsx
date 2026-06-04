import { useEffect, useState } from "react";

export default function EjemploUseEffect() {
  const [clicks, setClicks] = useState(0);
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    console.log("El componente ha cargado");
    return () => console.log("desmontando componente");
  }, []);

  useEffect(() => {
    console.log("hook de clicks: ");
    document.title = `Clicks: ${clicks}`;
  }, [clicks]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <>
      <h3>Ejemplo useEffect</h3>

      <div>
        <button onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</button>
      </div>
      <div>La hora actual es: {hora.toTimeString()}</div>
    </>
  );
}
