const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = document.getElementById('cl').value;
    const nam = document.getElementById('na').value;
    const precio = Number (document.getElementById('pr').value);
    
    const respuesta = document.getElementById('res');

    if (num1 == 1) {
        let descuento = (precio * .9);
        respuesta.innerHTML = `El precio final del articulo ${nam} es de ${descuento} Pesos`;
    } else {
        if (num1 == 2) {
            let descuento = (precio * .8);
            respuesta.innerHTML = `El precio final del articulo ${nam} es de ${descuento} Pesos`;      
        } else {
            respuesta.innerHTML = `El precio final del articulo ${nam} es de ${precio} Pesos`;
        }
    }
}