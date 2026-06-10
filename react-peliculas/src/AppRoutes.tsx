import { Route, Routes } from "react-router";
import IndiceGeneros from "./features/generos/componentes/IndiceGeneros";
import LandingPage from "./features/home/componentes/LandingPage";
import EditarGenero from "./features/generos/componentes/EditarGenero";
import CrearGenero from "./features/generos/componentes/CrearGenero";
import IndiceActores from "./features/actores/componentes/IndiceActores";
import CrearActor from "./features/actores/componentes/CrearActor";
import EditarActor from "./features/actores/componentes/EditarActor";
import IndiceCines from "./features/cines/componentes/IndiceCines";
import EditarCine from "./features/cines/componentes/EditarCine";
import CrearCine from "./features/cines/componentes/CrearCine";
import CrearPelicula from "./features/peliculas/componentes/CrearPelicula";
import EditarPelicula from "./features/peliculas/componentes/EditarPelicula";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} /> 

            <Route path="/generos" element={<IndiceGeneros />} />
            <Route path="/generos/crear" element={<CrearGenero />} />
            <Route path="/generos/editar" element={<EditarGenero />} />

            <Route path="/actores" element={<IndiceActores />} />
            <Route path="/actores/crear" element={<CrearActor />} />
            <Route path="/actores/editar" element={<EditarActor />} />

            <Route path="/cines" element={<IndiceCines />} />
            <Route path="/cines/crear" element={<CrearCine />} />
            <Route path="/cines/editar" element={<EditarCine />} />

            <Route path="/peliculas/crear" element={<CrearPelicula />} />
            <Route path="/peliculas/editar" element={<EditarPelicula />} />


        </Routes>
    )
}