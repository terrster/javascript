const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('d1').value);
    const num2 = Number (document.getElementById('d2').value);
    const num3 = Number (document.getElementById('d3').value);
    const num4 = Number (document.getElementById('d4').value);
    const num5 = Number (document.getElementById('d5').value);
    const num6 = Number (document.getElementById('d6').value);
    
    let suma = num1 + num2 + num3 + num4 + num5 + num6;

    let res ="";
    
    let respuesta = document.getElementById('res');

    console.log(suma);

    if (suma >=100) {
        res = `El trabajador obtiene bono por haber realizado: ${suma} uniades`;
    }else{
        res = `El trabajador no obtiene bono por haber realizado menos de 100 unidades`;
    }
    
        
    respuesta.innerHTML = `<div class="alert alert-success " role="alert">${res}</div>`;

}