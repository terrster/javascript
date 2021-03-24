const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('la').value);
    const num2 = Number (document.getElementById('lb').value);

    let semi = Math.pow(num1, 2);
    let demi = Math.pow(num2, 2);
    let total = Math.sqrt(semi + demi);

    const respuesta = document.getElementById('res');
    res.innerHTML = `La hipotenusa mide ${total} `;
}