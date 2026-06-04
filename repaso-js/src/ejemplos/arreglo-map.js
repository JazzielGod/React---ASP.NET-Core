export default function MapEjemplo() {
    //ejemplo 1: transformando numeros


    const numeros = [1, 2, 3, 4, 5];

    const cuadrados = numeros.map(num => num * num); // [1, 4, 9, 16, 25]

    // console.log(cuadrados);

    //ejemplo 2: extrayendo un valor de un arreglo de objetos

    const personas = [
        {id: 1, nombre: 'Alice', pais: 'USA'},  
        {id: 2, nombre: 'Bob', pais: 'UK'},
        {id: 3, nombre: 'Charlie', pais: 'Canada'}
    ];


    //console.log(personas)

    const ids = personas.map(persona => persona.id)

    //console.log(ids); // [1, 2, 3]

    const nombres = personas.map(persona => persona.nombre)

    //console.log(nombres); // ['Alice', 'Bob', 'Charlie']

    const nombresYPaises = personas.map(persona => {
        return {
            nombre: persona.nombre,
            pais: persona.pais
        }
    })

    //console.log(nombresYPaises); 


    //ejemplo 3: generando UI


    const elementosDeLista = numeros.map(valor => 
        `<li>${valor}</li>`
    );

    const lista = `
    <ul>
        ${elementosDeLista.join('')}
    </ul>
    `;


    console.log(lista);

    return lista;

}