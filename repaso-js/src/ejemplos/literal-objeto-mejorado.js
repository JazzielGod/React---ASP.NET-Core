export default function LiteralesObjetosMejorado(){
    
    let apellido = "Gavilan";
    
    const paisProp = "pais";
    const paisValor = "Argentina";

    const persona = {
        nombre: "Juan",
        apellido,
        funcionNormal: function(){},
        funcionFlecha: () => {},
        [paisProp]: paisValor
    }


    const retornarValorPropiedadPersona = (prop) => persona[prop];

    console.log(retornarValorPropiedadPersona("apellido"));

    console.log(persona);

}