const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('presupuesto').value);
    const p1 = Number (document.getElementById('p1').value);
    const p2 = Number (document.getElementById('p2').value);
    const p3 = Number (document.getElementById('p3').value);
    const p4 = Number (document.getElementById('p4').value);

    let respuesta = document.getElementById('res');

    let suma = p1 + p2 + p3 + p4;
    let res ="";
    
    

    if (suma > num1) {
        res = `Presupuesto es Insuficiente falta: $${suma - num1} Pesos`;
    }else{
        res = `Presupuesto es Suficiente sobran $${num1 - suma} Pesos`;
    }
    
        
    respuesta.innerHTML = `<div class="alert alert-success " role="alert">${res}</div>`;

}