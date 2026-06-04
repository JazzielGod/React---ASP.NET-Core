import type Persona from "./Persona.module";

export default function Fila({persona, remover}: FilaProps) {
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
}


interface FilaProps {
    persona: Persona;
    remover: (p : Persona) => void;
}