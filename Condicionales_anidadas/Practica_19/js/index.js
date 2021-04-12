const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('num1').value);
    
    let dia = "";
    let res ="";
    
    let respuesta = document.getElementById('res');

    if (num1 <= 0 || num1 > 7 || num1 % 1 != 0) {
        alert(`Numero invalido`);
        return;
    }
    console.log(num1);

    if (num1 == 1) {
        dia = "Lunes";
    }else if (num1 == 2){
        dia = "Martes";
    }else if (num1 == 3){
        dia = "Miercoles";
    }else if (num1 == 4){
        dia = "Jueves";
    }else if (num1 == 5){
        dia = "Viernes";
    }else if (num1 == 6){
        dia = "Sabado";
    }else{
        dia = "Domingo";
    }

    res = `El dia de la semana correspondiente a ${num1} es ${dia}`;
        
    respuesta.innerHTML = `<div class="alert alert-success " role="alert">${res}</div>`;

}