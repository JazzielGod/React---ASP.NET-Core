import TablaMemorizar from "./TablaMemorizar";
import { useState } from "react";

export default function EjemploMemorizarTabla() {
    const [texto, setTexto] = useState("");
    return (
        <>
            <input type="text" onChange={(e) => setTexto(e.target.value)}/>
            <p>
                El texto es: {texto}
            </p>
            <TablaMemorizar/>
        </>
    )
}