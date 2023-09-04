function CambioDolares(pesos, Tcambio) { return (pesos * Tcambio)/2;

}
const Cpesos = prompt("Ingrese por favor cuantos pesos colombianos desea cambiar a dolares") 
const Cdolar = prompt("Ingrese el valor el dolar") 
const CambioDolar = CambioDolares(Cpesos, Cdolar);
console.log (`el dolar esta en ${Cdolar}, cambiando  ${Cpesos} pesos colombianos, el total seria  ${CambioDolar}`);