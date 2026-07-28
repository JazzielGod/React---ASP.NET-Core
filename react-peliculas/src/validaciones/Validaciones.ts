export function primeraLetraMayuscula() {
    return {
        name:'primera-letra-mayuscula',
        message: "La primera letra debe ser mayúscula",
        test: (valor: string | undefined) => {
            if(valor && valor.length > 0 ){
                const primeraLetra = valor.substring(0,1);
                return primeraLetra === primeraLetra.toUpperCase();
            }

            return true;
        }
    }
}

export function fechaNoMayorActual() {
    return {
        name:'fecha-no-mayor-actual',
        message: "La fecha no puede ser mayor a la fecha actual",
        test: (valor: string | undefined) => {
            if(!valor) return true;
            const fechaIngresada = new Date(valor);
            const fechaActual = new Date();
            return fechaIngresada <= fechaActual;
        }
    }
}