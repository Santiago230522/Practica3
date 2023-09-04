function calcularPrecioFinal(precioArticulo) { 
    const descuento = precioArticulo * 0.2; 
    const precioConDescuento = precioArticulo - descuento; 
    const iva = precioConDescuento * 0.15; 
    const precioFinal = precioConDescuento + iva;

    return {
      precioConDescuento: precioConDescuento,
      precioFinal: precioFinal
    };
    }
    
    const precioArticulo = prompt("Ingrese por favor el precio de sus articulos"); 
    const resultado = calcularPrecioFinal(precioArticulo); 
    console.log(`El total de lo que debe pagar con el 20 % de descuento es:  ${resultado.precioConDescuento}`); 
    console.log(`El total a pagar final con IVA incluido es:  ${resultado.precioFinal}`);