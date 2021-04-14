const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('c1').value);
    const num2 = Number (document.getElementById('c2').value);
    const num3 = Number (document.getElementById('c3').value);

    const respuesta = document.getElementById('res');

    let promedio = (num1 + num2 + num3)/3;
    
    if (promedio >=6) {
        respuesta.innerHTML = `El Alumno esta <strong>Aprobado</strong> con una calificacion de ${promedio} `;
        
    } else {
        
        respuesta.innerHTML = `El Alumno esta <strong>Reprobado</strong> con una calificacion de ${promedio} `;

    }

    
    

}
