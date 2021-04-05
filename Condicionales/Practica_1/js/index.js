const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('num1').value);
    const num2 = Number (document.getElementById('num2').value);

    const respuesta = document.getElementById('res');

    if (num1 > num2){
        
        respuesta.innerHTML = `El Numero Mayor es ${num1} `;
    }

    else{
        
        respuesta.innerHTML = `El Numero Mayor es ${num2} `;
    }

}