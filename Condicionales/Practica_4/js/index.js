const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('n1').value);
    let descuento =(num1 * .8);
    const respuesta = document.getElementById('res');

    if (num1>=1000) {
        respuesta.innerHTML = `Se aplica la promocion del 20% de descuento haciendo un total de ${descuento} pesos `;
    } else {
        respuesta.innerHTML = `No hay descuento el precio se mantiene en ${num1} pesos`;
    }
}