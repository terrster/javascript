const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('num1').value);
    const num2 = Number (document.getElementById('num2').value);
    let respuesta = document.getElementById('res');
    
    let residuo = 0;
    let res ="";
    
    

    if (num1>num2) {
        residuo = num1%num2;
    }else{
        residuo = num2%num1;
    }
    
    if (residuo == 0 && num1>num2) {
        res = `${num1} es multiplo de ${num2}`;
    } else if(residuo == 0 && num2>num1){
        res = `${num2} es multiplo de ${num1}`;
    } else{
        res = `${num1} y ${num2} no son multiplos`;
    }
        
    respuesta.innerHTML = `<div class="alert alert-success " role="alert">${res}</div>`;

}