import Cabecera from "./Cabecera";
import ProyectarContenido from "./ProyectarContenido";
import ProyectarContenido2 from "./ProyectarContenido2";

export default function AppEjemplo2() {
  return (
    <>
      
      <h2>Ejemplo 1</h2>

      <ProyectarContenido>
        <>
          <button onClick={() => alert('Me haz clickeado')}>Clickme</button>

          <h4>Hola Mundo</h4>
        
        </>
      </ProyectarContenido>
    
      <h2>Ejemplo 2</h2>
    
      <ProyectarContenido2
        parteSuperior={<button>Boton superior</button>}
        parteIntermedia={<>
          <Cabecera/>
          <p>Contenido intermedio</p>
        </>}
        parteInferior={<>
          
        </>}
      />

    </>
  );
}
