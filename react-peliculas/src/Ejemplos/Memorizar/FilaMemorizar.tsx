import { memo } from "react";
import type Persona from "../Persona.module";

const FilaMemorizar = memo(function FilaMemorizar({persona, remover}: FilaProps) {
    console.log(`Renderizando la fila de ${persona.nombre}`);

    if(persona.nombre === "Pedro") {
        throw new Error("Error al renderizar la fila de Pedro");
    }

    return (
         <tr key={persona.id}>
                    <td>{persona.nombre}</td>
                    <td>{persona.departamento}</td>
                    <td>
                        <button>Editar</button>
                        <button onClick={() => remover(persona)}>Eliminar</button>
                    </td>
                </tr>
    )
});

interface FilaProps {
    persona: Persona;
    remover: (p : Persona) => void;
}

export default FilaMemorizar;