import { useEffect } from "react";
import { Navigate, useLocation } from "react-router";

export default function RutaNoEncontrada() {

    const location = useLocation();

    useEffect(() => {
        console.log("La ruta no existe: " + location.pathname);
    }, [location]);

    return <Navigate to="/" />    
}