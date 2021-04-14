const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('e1').value);
    const num2 = Number (document.getElementById('e2').value);
    const nam1 = document.getElementById('n1').value;
    const nam2 = document.getElementById('n2').value;

    if (num1 > num2) {
        let diferencia = num1 - num2;
        const respuesta = document.getElementById('res');
        respuesta.innerHTML = `${nam1} es mayor por ${diferencia} años`;
    } else {
        let diferencia = num2 - num1;
        const respuesta = document.getElementById('res');
        respuesta.innerHTML = `${nam2} es mayor por ${diferencia} años`;
    }
}