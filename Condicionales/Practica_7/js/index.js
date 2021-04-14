const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('un').value);
    let respuesta = document.getElementById('res');

    if (num1 >= 100) {        
        respuesta.innerHTML = `El Trabajador tiene un incentivo por haber realizado ${num1} unidades `;
    } else {
        respuesta.innerHTML = `El Trabajador no tiene un incentivo `;
    }
}
