export function funcionExportada(){
    console.log("Ejecutando la funcion exportada")
}

function funcionOculta(){
    console.log("Ejecutando la funcion oculta")
}

export let configuracionesGlobales = {
    idioma: "ESP",
    logueado: false
}

export default function funcionPrincipal(){
    console.log("Ejecutando la funcion principal")
}

//export {funcionExportada, configuracionesGlobales}