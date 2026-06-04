export default function DestructurarEjemplo(){
    let persona = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 25,
        fechaActual: new Date(),
    }

    //ejemplo 1: destructurando las propiedades de un objeto
    // const nombre = persona.nombre;
    // const apellido = persona.apellido;
    // const edad = persona.edad;

    //const {nombre, apellido, edad} = persona;

    //console.log(nombre, apellido, edad);

    //ejemplo 2: destructurando el resultado de una función que retorna un objeto
    const obtenerDireccion = () => {
        return {
            calle: "Calle Falsa",
            numero: 123,
            ciudad: "Springfield",
        }
    }

    const {numero, ciudad} = obtenerDireccion();

    //console.log(numero, ciudad);

    //ejemplo 3: destructurando el parametro de una función

    const imprimirNombre = ({persona}) => {
        console.log(persona.nombre);

        const nombreEnMayusculas = persona.nombre.toUpperCase();
        console.log(nombreEnMayusculas);
    }

    const imprimirNombre2 = ({nombre}) => {
        console.log(nombre)

        const nombreEnMayusculas = nombre.toUpperCase();
        console.log(nombreEnMayusculas);
    }

    //imprimirNombre(persona);
    //mprimirNombre2(persona);

    //ejemplo 4: destructurando un array

    const numeros = [1, 2, 3, 4, 5];

    const [primero, segundo, ,cuarto] = numeros;
    //console.log(primero, segundo, cuarto);

    const retornaArreglo = () => {
        return ["Jazziel", "Gavilan"];
    }

    const [nombre, apellido] = retornaArreglo();

    console.log(nombre, apellido);

}