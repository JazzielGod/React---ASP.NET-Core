export default function OperadorSpread() {
    //ejemplo 1: operador spread con una funcion

    const sumar = (a, b) => a + b;

    const numeros = [2, 3];

    //const resultado = sumar(numeros[0], numeros[1]); //sin operador spread
    const resultado = sumar(...numeros); //con operador spread

    //console.log(resultado); //5


    //ejemplo 2: concatenar arreglos con operador spread

    const masNumeros = [1, ...numeros]; //[1, 2, 3]

    const masNumeros2 = [1, numeros]; //[1, [2, 3]]


    //console.log(masNumeros); //[1, 2, 3]
    //console.log(masNumeros2); //[1, [2, 3]]

    //ejemplo 3: concatenando varios arreglos 

    const otrosNumeros = [4, 5];

    const muchosNumeros = [...numeros, ...otrosNumeros]; //[2, 3, 4, 5]


    //ejemplo 4: desctructurando y usando el operador spread

    const [primero, ...resto] = muchosNumeros;

    //console.log(muchosNumeros); //[2, 3, 4, 5]

    //console.log(primero); //2

    //console.log(resto); //[3, 4, 5]

    //ejemplo 5: clonando un arreglo

    //const muchosNumeros2 = muchosNumeros;
    //muchosNumeros2.push(6);

    //console.log(muchosNumeros); //[2, 3, 4, 5, 6] - se modifica el arreglo original
    //console.log(muchosNumeros2); //[2, 3, 4, 5, 6]

    // const muchosNumerosClonados = [...muchosNumeros];
    // muchosNumerosClonados.push(6);
    
    // console.log(muchosNumeros); //[2, 3, 4, 5] - no se modifica el arreglo original
    // console.log(muchosNumerosClonados); //[2, 3, 4, 5, 6]

    //ejemplo 6: operador spread con objetos

    const persona = {
        nombre: "Claudia",
        apellido: "Gavilan",
        edad: 30
    };

    const persona2 = {
        ...persona,
        profesion: "Desarrolladora",
        direccion: {
            calle: "Calle Falsa",
            numero: 123,
            ciudad: "Springfield"
        }
    };


    //console.log(persona2);

    //ejemplo 7: clonando un objeto

    const person3 = {...persona2};
    person3.nombre = "Juan";

    // console.log(persona2); //nombre: "Claudia"
    // console.log(person3); //nombre: "Juan"

    //Ejemplos 8: destructurar y operador spread sobre un objeto

    const {edad, direccion, ...person4} = persona2;

    console.log(edad); //30
    console.log(direccion);
    console.log(person4); //{nombre: "Claudia", apellido: "Gavilan", profesion: "Desarrolladora"}



}