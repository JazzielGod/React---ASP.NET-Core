export default function TmeplateStringsEjemplo(){
    const nombre = 'Juan';
    const pais = "Argentina";

    const saludo = "Hola, mi nombre es " + nombre + " y soy de " + pais;

    const saludo2 = `Hola, mi nombre es ${nombre} y soy de ${pais}`; //usando tildes (backticks) y ${} para insertar variables

    const sumanr = (a, b) => a + b;

    const mensaje = `Hola, ${nombre}
    Esta es una carta
    la suma de 2 + 3 es ${sumanr(2, 3)}
    Att: yo`;

    console.log(mensaje);

}