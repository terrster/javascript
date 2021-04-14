const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    let num1 = document.getElementById('hr1');
    let num2 = document.getElementById('hr2');

    let dia1 = document.getElementById('d1');
    let dia2 = document.getElementById('d2');

    let hr1 = Number (num1.value.split(":")[0]);
    let min1 = Number (num1.value.split(":")[1]);

    let hr2 = Number (num2.value.split(":")[0]);
    let min2 = Number (num2.value.split(":")[1]);

    let d1 = Number (dia1.value.split("-")[2]);
    let d2 = Number (dia2.value.split("-")[2]);

    let res ="";
    let costo="";
    
    let respuesta = document.getElementById('res');

    if (hr1 ==0 || hr2==0) {
        if (hr1 ==0 ) {
            hr1 = 24;
        }
        if (hr2 == 0) {
            hr2 = 24;
        }
    }

    let dia = d2 - d1;
    let extra = 0;

    if (dia >= 1) {
        extra = dia * 24;
    } else {
        extra = 0
    }

    let hora = extra+(hr2-hr1);

    let mayor = 0;

    if (min2 >= min1) {
        mayor = min2-min1; 
    } else {
        mayor = (60-min1) + min2;
        hora = hora - 1;
    }

    if (hora <0  ) {
        alert("Revisar Hora o dia");
        return;
    }

    if (hora < 2) {
        costo = hora *5;
    }else if (hora > 2 && hora <= 5 ){
        costo = ((hora -2) * 4) + 10;
    }else if (hora > 5 && hora <= 10){
        costo = ((hora -5) * 3) + 26;
    }else{
        costo = ((hora -10) * 2) + 41;
    }

    console.log("costo",costo);

    res = `Por ${hora} horas y ${mayor} minutos de estacionamiento son: $${costo} pesos`;
        
    respuesta.innerHTML = `<div class="alert alert-success " role="alert">${res}</div>`;

}