const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){     
    
    let respuesta = document.getElementById('res');
    
    
    let acumulado = 0;
    let resultado ="";
    
    for (let x = 1; x <= 12; x++) {
        let ahorro = prompt(`Ingrese cuanto ahorro ${x}° mes`);
        acumulado = acumulado+Number(ahorro);
        resultado +=`
        <li class="list-group-item d-flex justify-content-between align-items-center">
        El ahorro del mes ${x} es ${ahorro}
        <span class="badge bg-primary rounded-pill">${x}</span>
        </li>`;
    }

    const lista = document.getElementById('lista');
    lista.innerHTML = resultado;
        
    respuesta.innerHTML = `<span> Usted ahorro: ${acumulado} en el año</span>`;

}