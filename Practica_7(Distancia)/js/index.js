const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Distancia);

function Distancia(){
    const num1 = Number (document.getElementById('vel').value);
    const num2 = Number (document.getElementById('tiempo').value);

    let res = num1 * num2;

    const respuesta = document.getElementById('res');
    respuesta.innerHTML = `La distancia recorrida es: ${res}`;
}