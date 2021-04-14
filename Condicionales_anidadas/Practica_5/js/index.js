const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('credito').value);
    let num2 = Number (document.getElementById('input1').value);
    let aumento = 0;
    let res ="";
    
    let respuesta = document.getElementById('res');

    if (num1 == ""|| num1 == 0) {
        alert(`Es necesario Ingresar el Credito Actual`);
        return;
    }
    console.log(num2);

    if (num2==1) {
        aumento = num1 *1.25;
    }else if (num2==2){
        aumento = num1 * 1.35;
    }else if (num2==3){
        aumento = num1 * 1.4;
    }else{
        aumento = num1 * 1.5;
    }

    res = `El Total de Credito qué se le  asigno  es: $${aumento}`;
        
    respuesta.innerHTML = `<div class="alert alert-success " role="alert">${res}</div>`;

}