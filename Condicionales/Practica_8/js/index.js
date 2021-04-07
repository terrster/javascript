const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('la').value);
    const num2 = Number (document.getElementById('lb').value);
    const num3 = Number (document.getElementById('lc').value);

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
    console.log(mayor);
    let suma = num1 + num2 + num3 - mayor;

    if (mayor < suma) {
        if ((num1 == num2)&&(num2 == num3)) {
            respuesta.innerHTML = `Es un triangulo Equilatero `;
        } else {
            if ((num1 == num2)||(num1 == num3)||(num2 == num3)) {
                respuesta.innerHTML = `Es un triangulo Isoseles `;          
            } else {
                respuesta.innerHTML = `Es un triangulo Escaleno `;
            }
        }
    } else {
        respuesta.innerHTML = `No es un triangulo`; 
    }
}