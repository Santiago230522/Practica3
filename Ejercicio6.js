function calcularHipotenusa(catetoA, catetoB) { 
    const catetoAcuadrado = catetoA * catetoA; 
    const catetoBcuadrado = catetoB * catetoB; 
    const hipotenusacuadrado = catetoAcuadrado + catetoBcuadrado; 
    const hipotenusa = Math.sqrt(hipotenusacuadrado);

    return hipotenusa;
    } let catetoA = prompt("Ingrese por favor el lado A") 
    let catetoB = prompt("Ingrese por favor el lado B")
    
    const hipotenusa = calcularHipotenusa(catetoA, catetoB); 
    console.log(`La hipotenusa del triángulo rectángulo es: ${hipotenusa}`);