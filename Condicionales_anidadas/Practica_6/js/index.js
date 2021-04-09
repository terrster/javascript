const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('costo').value);
    
    let descuento = 0;
    let total = 0;
    let res ="";
    
    let respuesta = document.getElementById('res');

    if (num1 == ""|| num1 == 0) {
        alert(`Ingrese Costo del Traje`);
        return;
    }

    if (num1>3600) {
        descuento = 16;
        total = num1 * .84;
    }else {
        descuento = 7;
        total = num1 * .93;
    }

    res = `El Traje tiene un descuento del %${descuento}, el precio final seria de: $${total}`;
        
    respuesta.innerHTML = `<div class="alert alert-success " role="alert">${res}</div>`;

}