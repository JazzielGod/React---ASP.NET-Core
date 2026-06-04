export default function VariablesEjemplo(){
    let apellido = "Briones";
    apellido = "Cota";
    let edad = 30;
    let fecha = new Date();

    let persona = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 25,
        fechaActual : new Date(),
        estaLogueado : false
    }

    let miFuncion = function duplicar(valor){
        return valor * 2;
    }

    var pais = "Argentina";
    pais = "Brasil";

    
    for(let i = 1; i <= 10; i++){

    }

    // console.log(i);


    const continente = "America";
    // continente = "Europa";

    console.log(continente);

    const ingredientes = ["Harina", "Azucar", "Huevos"];
    ingredientes.push("Levadura");
    console.log(ingredientes);
    

}