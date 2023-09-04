function calcularPromedio(examen1, examen2, examen3) { 
    const ponderacionExamen1 = 0.25; 
    const ponderacionExamen2 = 0.25; 
    const ponderacionExamen3 = 0.5; 
    const notaPonderadaExamen1 = examen1 * ponderacionExamen1; 
    const notaPonderadaExamen2 = examen2 * ponderacionExamen2; 
    const notaPonderadaExamen3 = examen3 * ponderacionExamen3; 
    const promedio = notaPonderadaExamen1 + notaPonderadaExamen2 + notaPonderadaExamen3;

    return promedio;
    } const notaExamen1 = prompt("Ingrese por favor la nota del primer examen") 
    const notaExamen2 = prompt("Ingrese por favor la nota del segundo examen") 
    const notaExamen3 = prompt("Ingrese por favor la nota del tercer examen") 
    const promedioFinal = calcularPromedio(notaExamen1, notaExamen2, notaExamen3); 
    console.log(`El promedio final del alumno es: ${promedioFinal}`);