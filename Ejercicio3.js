function calcularEdadTrabajo(AniodeNacimiento) { const anioAc = new Date().getFullYear();

    const Edad = anioAc - AniodeNacimiento;
    return Edad;
    } 
    
    let AniodeNacimiento = prompt("Ingrese por favor su Año de nacimiento") 
    const Edad = calcularEdadTrabajo(AniodeNacimiento); 
    console.log(`Si naciste en el año ${AniodeNacimiento}, entonces tienes ${Edad} años.`);