const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('e1').value);
    const num2 = Number (document.getElementById('e2').value);

    const nam1 = document.getElementById('n1').value;
    const nam2 = document.getElementById('n2').value;


    const respuesta = document.getElementById('res');

    
    if (num1>num2) {

        respuesta.innerHTML = `${nam1} es Mayor `;
        
    } else {
        if (num2>num1) {
            respuesta.innerHTML = `${nam2} es Mayor `;
        } else {
            respuesta.innerHTML = `${nam1} y ${nam2} tienen la misma edad`;
        }
    }
}