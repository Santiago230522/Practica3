function calcularFormasDePago(valorTotalCompra) { 
    const recargo2Cuotas = 0.05; 
    const recargo6Cuotas = 0.40; 
    const formaPago1Cuota = { cuotas: 1, montoPorCuota: valorTotalCompra, total: valorTotalCompra, recargo: 0, }; 
    const monto2Cuotas = valorTotalCompra / 2; 
    const recargo2CuotasTotal = monto2Cuotas * recargo2Cuotas; 
    const formaPago2Cuotas = { cuotas: 2, montoPorCuota: monto2Cuotas, total: valorTotalCompra + recargo2CuotasTotal, recargo: recargo2CuotasTotal, }; 
    const monto6Cuotas = valorTotalCompra / 6; 
    const recargo6CuotasTotal = monto6Cuotas * recargo6Cuotas; const formaPago6Cuotas = { cuotas: 6, montoPorCuota: monto6Cuotas, total: valorTotalCompra + recargo6CuotasTotal, recargo: recargo6CuotasTotal, };

return [formaPago1Cuota, formaPago2Cuotas, formaPago6Cuotas];
}