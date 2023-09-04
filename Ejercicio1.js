function CalcularAreaTriangulo(Base, Altura) { return (Base * Altura) /2; } 

const baseTriangulo = prompt ("Ingrese por favor la base del triangulo") 
const alturaTriangulo = prompt("Ingrese por favor la altura del triangulo") 
const areaTriangulo = CalcularAreaTriangulo(baseTriangulo, alturaTriangulo); 
console.log(`El área del triángulo con base ${baseTriangulo} y altura ${alturaTriangulo} es: ${areaTriangulo}`);