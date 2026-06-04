export default function ContenidoDinamicoIf(props: ContenidoDinamicoIfProps) {
  if (props.calificacion >= 90) {
    return (
      <div>
        <h3 style={{ color: "blue" }}>Calificación alta</h3>
      </div>
    );
  } else if (props.calificacion >= 80 && props.calificacion <= 90) {
    return <h3 style={{ color: "orange" }}>Calificación media</h3>;
  } else {
    return <h3>Púedes volver a intentarlo: <button>Reintentar</button></h3>;
  }
}

interface ContenidoDinamicoIfProps {
  calificacion: number;
}
