import { useForm, type SubmitHandler } from "react-hook-form";
import Boton from "../../../componentes/Boton";

export default function FiltrarPeliculas() {
    
    const valorInicial: FormType = {
        titulo: "",
        generoId: 0,
        proximosEstrenos: false,
        enCines: false
    };

    const {register, handleSubmit,reset, formState: {isSubmitting}} = useForm<FormType>({
        defaultValues: valorInicial
    });

    const onSubmit: SubmitHandler<FormType> = async (data) => {
        console.log("Filtrando películas...");
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
    }
    
    const generos = [
        {id: 1, nombre: "Drama"},
        {id: 2, nombre: "Acción"},
        {id: 3, nombre: "Comedia"}
    ];
    return (
        <>
            <h3>Filtro de Películas</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="row row-cols-lg-auto g-3 align-items-center">
                <div className="col-12">
                    <input id="titulo" className="form-control" 
                    {...register("titulo")} placeholder="Título de la película" autoComplete="off" />
                </div>
                <div className="col-12">
                    <select className="form-select" {...register("generoId")}>
                        <option value="0">Seleccione un género...</option>
                        {generos.map(genero => <option key={genero.id} value={genero.id}>{genero.nombre}</option>)}
                    </select>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" {...register("proximosEstrenos")} id="proximosEstrenos" />
                        <label htmlFor="proximosEstrenos">Próximos estrenos</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" {...register("enCines")} id="enCines" />
                        <label htmlFor="enCines">En cines</label>
                    </div>
                </div>
                <div className="col-12">
                    <Boton disabled={isSubmitting} type="submit">{isSubmitting ? "Filtrando..." : "Enviar"}</Boton>
                    <Boton onClick={() => reset()} className="btn btn-danger ms-2">Limpiar</Boton>
                </div>

            </form>  
        </>
    )
}

interface FormType{
    titulo: string;
    generoId: number;
    proximosEstrenos: boolean;
    enCines: boolean;

}