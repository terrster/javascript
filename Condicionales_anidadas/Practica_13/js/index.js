const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('p1').value);
    const num2 = Number (document.getElementById('p2').value);
    const num3 = Number (document.getElementById('p3').value);
    const num4 = Number (document.getElementById('p4').value);

    let menor = Math.min(num1, num2, num3, num4);
    let promedio = (num1 + num2 + num3 + num4 - menor)/3;  

    let res ="";
    
    let respuesta = document.getElementById('res');


    res = `La calificacion ${menor} se elimina por ser la menor, el promedio final del alumno es : ${promedio}`;
        
    respuesta.innerHTML = `<div class="alert alert-success " role="alert">${res}</div>`;

}