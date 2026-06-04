export default function ContenidoDinamico(props: ContenidoDinamicoProps){
    return (
        <div>
            {props.mostrarContenido ? <p>El contenido secreto se muestra</p> : undefined}
        </div>
    )
}

interface ContenidoDinamicoProps {
    mostrarContenido: boolean;
}