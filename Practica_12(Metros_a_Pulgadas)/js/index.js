const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('bien').value);

    let total = num1 * 39.37;

    const res = document.getElementById('res');
    res.innerHTML = `El total es ${total} pulgadas`;

}