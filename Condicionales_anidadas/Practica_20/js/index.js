const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('num1').value);

    let calificacion = num1;
    let Nota = "";
    let res ="";
    
    let respuesta = document.getElementById('res');

    if (num1 < 0 || num1 > 10) {
        alert(`Numero invalido`);
        return;
    }
    
    if (num1%1 != 0){
        calificacion=Math.round(num1);
    }

    if (calificacion == 10) {
        Nota = "A";
    }else if (calificacion == 9){
        Nota = "B";
    }else if (calificacion == 8){
        Nota = "C";
    }else if (calificacion == 7 || calificacion == 6){
        Nota = "D";
    }else{
        Nota = "F";
    }

    res = `${num1} es igual a ${Nota}`;
        
    respuesta.innerHTML = `<div class="alert alert-success " role="alert">${res}</div>`;

}