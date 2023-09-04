function calcularPresupuesto(area, costoPorMetroCuadrado) { const costoTotal = area * costoPorMetroCuadrado; return costoTotal; }

let area = prompt("Ingrese por favor el area que desea pintar") 
const costoPorMetroCuadrado = 3000;

const presupuesto = calcularPresupuesto(area, costoPorMetroCuadrado); 
console.log(`El presupuesto para el trabajo de pintura es: ${presupuesto} pesos colombianos`);