function calcularAreaCuadrado(longitudLado) { 
    const area = longitudLado * longitudLado; return area; }

const longitudLadoCuadrado = prompt ("Para darle el area del cuadrado debemos saber la longitud de uno de sus lados, por favor ingrese la longitud de un lado ") 
const areaCuadrado = calcularAreaCuadrado(longitudLadoCuadrado); 
console.log(`El área del cuadrado es: ${areaCuadrado} unidades cuadradas.`);