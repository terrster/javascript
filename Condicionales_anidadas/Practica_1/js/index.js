const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('num1').value);
    const num2 = Number (document.getElementById('num2').value);
    const num3 = Number (document.getElementById('num3').value);

    const respuesta = document.getElementById('res');

    let mayor = (num1);

    if ((num2>mayor)&&(num2>num3)) {
         mayor = (num2);
    } else {
        if (num3>mayor) {
            mayor = (num3);
        } else {
            mayor = (num1); 
        }
    }
    respuesta.innerHTML = `El numero Mayor es ${mayor} `;
}