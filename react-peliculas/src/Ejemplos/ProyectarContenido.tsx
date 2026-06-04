export default function ProyectarContenido(props: ProyectarContenidoProps){
    return (
        <>
            <h3>Parte Superior</h3>
            {props.children}
            <h3>Parte Inferior</h3>
        
        </>
    )
}

interface ProyectarContenidoProps {
    children: React.ReactNode; //react node es cualquier elemento de react, puede ser un componente, un texto, etc.
}