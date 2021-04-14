const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('num1').value);
    const num2 = Number (document.getElementById('num2').value);
    const num3 = Number (document.getElementById('num3').value);
    
    
    let respuesta = document.getElementById('res');

    let mayor = num1;
    let menor = num3;
    let medio = num2;
    

    if ((num2>mayor)&&(num2>num3)) {
        mayor = num2;
        if (num1>num3) {

            medio = num1;
            menor = num3;
        } else {

            medio = num3;
            menor = num1;
        }
    }else if (num3>mayor){
        mayor = num3;
        if (num1>num2) {

            medio = num1;
            menor = num2;
        } else {

            medio = num2;
            menor = num1;
        }
    }else{
         mayor = num1;
         menor = num3;
         medio = num2;
    }

    res = `${mayor}, ${medio}, ${menor}`;
        
    respuesta.innerHTML = `<div class="alert alert-success " role="alert">${res}</div>`;

}