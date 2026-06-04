import type Pelicula from "../modelos/peliculas.model";
import styles from "./PeliculaIndividual.module.css";
export default function PeliculaIndividual(props: PeliculaIndividualProps) {

    const construirLink = () => `/peliculas/${props.pelicula.id}`;

    return (
        <div className={styles.div}>
           <a href={construirLink()}>
                <img src={props.pelicula.poster} alt="Poster" />
           </a>
           <p>
                <a href={construirLink()}>{props.pelicula.titulo}</a>
           </p>
        </div>
    );
}

interface PeliculaIndividualProps {
    pelicula: Pelicula;
}