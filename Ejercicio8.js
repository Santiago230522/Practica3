function calcularAhorroAnual(sueldoMensual) { 
    const semanasPorMes = 4; 
    const porcentajeAhorro = 0.15; 
    const mesesEnAnio = 12; 
    const ahorroSemanal = sueldoMensual * porcentajeAhorro / semanasPorMes; 
    const ahorroMensual = ahorroSemanal * semanasPorMes; 
    const ahorroAnual = ahorroMensual * mesesEnAnio;

return ahorroAnual;
} const sueldoMensual = prompt("Ingrese por favor su sueldo") 
const ahorroAnual = calcularAhorroAnual(sueldoMensual); 
console.log(`El ahorro anual es: $${ahorroAnual}`);