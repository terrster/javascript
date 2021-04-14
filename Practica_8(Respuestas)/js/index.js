const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('bien').value);
    const num2 = Number (document.getElementById('mal').value);
    const num3 = Number (document.getElementById('blanco').value);

    let val = (num1*4)+(num2*-1)+0;
    let total = num1 + num2 + num3;

    const respuesta = document.getElementById('res');
    res.innerHTML = `De ${total} respuestas el alumno obtuvo un total de ${val} puntos  `

}