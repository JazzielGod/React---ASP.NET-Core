function duplicar(valor){
    return valor * 2;
}


let functionAnonima = (vañpr) => {
    return valor * 2;
}

let funcionAnonima2 = valor => valor * 2;

funcionAnonima2(3); // 6

let sumar = (sumando1, sumando2) => sumando1 + sumando2;

sumar(2, 3); // 5

let imprimirAlgo = () => console.log("Hola mundo");

//imprimirAlgo(); // Hola mundo

function funcionQueRecibeComoParametroUnaFuncion(funcion){
    funcion();
}

//funcionQueRecibeComoParametroUnaFuncion(imprimirAlgo); // Hola mundo

//funcionQueRecibeComoParametroUnaFuncion(() => console.log("Hola mundo desde una función flecha"));
 // Hola mundo desde una función flecha


export function EjemploThis(){
    const persona = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 25,

        saludarNormal: function(){
            setTimeout(function(){
                console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
            }, 2000);
        },
        saludarFlecha: function(){
            setTimeout(() => {
                console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`);
            }, 1000);
        }
    }

    persona.saludarNormal(); // Hola, me llamo undefined undefined y tengo undefined años
    persona.saludarFlecha(); // Hola, me llamo Juan Perez y tengo 25 años
}
