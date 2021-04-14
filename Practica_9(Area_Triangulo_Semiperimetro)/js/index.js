const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('la').value);
    const num2 = Number (document.getElementById('lb').value);
    const num3 = Number (document.getElementById('lc').value);

    let semi = (num1 + num2 + num3)/2;
    let total = Math.sqrt(semi*(semi - num1)*(semi - num2)*(semi - num3));

    const respuesta = document.getElementById('res');
    res.innerHTML = `El Área es ${total} `;

}