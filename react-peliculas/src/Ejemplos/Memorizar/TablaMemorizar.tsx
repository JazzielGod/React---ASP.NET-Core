import { memo, useCallback, useState } from "react";
import type Persona from "../Persona.module";
import FilaMemorizar from "./FilaMemorizar";
import { ErrorBoundary } from "react-error-boundary";

const TablaMemorizar = memo(function TablaMemorizar() {

    console.log("Renderizando el componente Tabla");

    const personasFuente: Persona[] = [
        { id: 1, nombre: 'Juan', departamento: 'Ventas' },
        { id: 2, nombre: 'María', departamento: 'Marketing' },
        { id: 3, nombre: 'Pedro', departamento: 'Recursos Humanos' },
        { id: 4, nombre: 'Ana', departamento: 'Ventas' },
        { id: 5, nombre: 'Luis', departamento: 'Marketing' },
        { id: 6, nombre: 'Laura', departamento: 'Recursos Humanos' },
        { id: 7, nombre: 'Carlos', departamento: 'Ventas' },
    ];

    const [personas, setPersonas] = useState(personasFuente);

    const removerPersona = useCallback((persona: Persona) => {
        setPersonas(estadoActual => estadoActual.filter(p => p.id !== persona.id));
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Departamento</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {personas.map(p =>
                <ErrorBoundary key={p.id} fallback={
                    <>
                        <tr> 
                            <td colSpan={3} style={{ color: 'red' }}>
                                ---Error: {p.nombre} 
                            </td>
                        </tr>
                    </>}>
                    <FilaMemorizar  persona={p} remover={removerPersona}/>
                </ErrorBoundary>
                )}
            </tbody>
        </table>
    )

});

export default TablaMemorizar;