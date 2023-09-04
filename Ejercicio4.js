function cobroEstacionamiento(horas) {

    const PrecioHora = 1000;
    const horasCompletas = Math.ceil(horas);
    const PrecioTotal = PrecioHora * horasCompletas;
    return PrecioTotal;
    } 
    
    let horasCompletas = prompt("Ingrese por favor las horas que estuvo estacionado") 
    const PrecioTotal = cobroEstacionamiento(horasCompletas); 
    console.log(`El total a cobrar por ${horasCompletas} horas de estacionamiento es: $${PrecioTotal}`);