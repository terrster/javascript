const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('costo').value);
    let num2 = Number (document.getElementById('input1').value);
    let num3 = Number (document.getElementById('input2').value);



    let total = 0;
    let lugar ="";

    let res ="";
    
    let respuesta = document.getElementById('res');

    if (num1 == ""|| num1 == 0) {
        alert(`Mejor Quedate en casa`);
        return;
    }

    if (num2==1) {
        total = num1 *(750*num3);
        lugar = "Cd. México";
    }else if (num2==2){
        total = num1 *(800*num3);
        lugar = "Puerto Vallarta";
    }else if (num2==3){
        total = num1 *(1200*num3);
        lugar = "Acapulco";
    }else if(num2==4){
        total = num1 *(1800*num3);
        lugar = "Cancún";
    }else{
        res = `Hogar Dulce Hogar`;
        respuesta.innerHTML = `<div class="alert alert-success " role="alert">${res}</div>`;
        return;
    }

    res = `Ir a ${lugar} cuesta: $${total} Pesos`;
        
    respuesta.innerHTML = `<div class="alert alert-success " role="alert">${res}</div>`;

}