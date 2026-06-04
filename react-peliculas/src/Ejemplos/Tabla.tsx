import Fila from "./Fila";
import type Persona from "./Persona.module";
import { useState } from "react";

export default function Tabla() {

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

    const removerPersona = (persona: Persona) => {
        setPersonas(
            personas.filter(p => p.id !== persona.id)
        );
    }



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
                {personas.map(p =><Fila key={p.id} persona={p} remover={removerPersona}/>)}
            </tbody>
        </table>
    )

}