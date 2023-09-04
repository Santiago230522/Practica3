function calcularMontoCheque(numDias) { 
    const costoHotelPorDia = 100000; 
    const costoComidaPorDia = 70000; 
    const otrosGastosPorDia = 200000; 
    const gastosTotalesPorDia = costoHotelPorDia + costoComidaPorDia + otrosGastosPorDia; 
    const montoTotalCheque = gastosTotalesPorDia * numDias;

    return {
      hotel: costoHotelPorDia * numDias,
      comida: costoComidaPorDia * numDias,
      otrosGastos: otrosGastosPorDia * numDias,
      total: montoTotalCheque,
    };
    }
    
    const numeroDiasViaje = prompt("Ingrese por favor el numero de dias que desea viajar para saber el valor de su cheque ");