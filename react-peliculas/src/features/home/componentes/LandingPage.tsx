import { useEffect, useState } from "react";
import ListadoPeliculas from "../../peliculas/componentes/ListadoPeliculas";
import type Pelicula from "../../peliculas/modelos/peliculas.model";

export default function LandingPage() {
    const [peliculas, setPeliculas] = useState<AppState>({});

    useEffect(() => {
        setTimeout(() => {
            const enCines: Pelicula[] = [
            {
                id: 1,
                titulo: "El señor de los anillos",
                poster: "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg"
            },
            {
                id: 2,
                titulo: "Jonh Wick",
                poster: "https://m.media-amazon.com/images/I/81s6TwmHtTL._AC_UF894,1000_QL80_.jpg"
            }
        ];

        const proximosEstrenos: Pelicula[] = [
            {
                id: 3,
                titulo: "Pulp Fiction",
                poster: "https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg"
            },
            {
                id: 4,
                titulo: "Piratas del caribe",
                poster: "https://es.web.img3.acsta.net/c_310_420/pictures/14/03/25/11/14/498694.jpg"
            }
        ];


        setPeliculas({enCines, proximosEstrenos});

        }, 1000);
    }, []);
    return (
        <>
        <div className="container">
                <h3>En cines</h3>
            <ListadoPeliculas peliculas={peliculas.enCines} /> 
                <h3>Próximos estrenos</h3>
            <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
        </div>
        </>
    )
}


interface AppState {
    enCines?: Pelicula[];
    proximosEstrenos?: Pelicula[];
}