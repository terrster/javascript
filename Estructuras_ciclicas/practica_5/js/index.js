const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',EvaluarNumero);

function EvaluarNumero(){      
    let continuar = true;
    let mayor = 0;
    let menor = 0;        
    
      
    while (continuar == true) {
        let num1 = prompt(`Ingrese Numero a Evaluar`);
        
        if (isNaN(num1)) {
            alert('Es Necesario que se Ingrese un Numero');            
        }else if (num1 == null){
            continuar = false;
        }else{
            num1 = Number(num1);
            if (num1 >= 500) {
                mayor++;
            } else {
                menor++;
            }
        }
      
    }
    
    let respuesta = document.getElementById('res'); 
    respuesta.innerHTML = `Ingreso ${mayor} numeros mayores a 500 e ingreso ${menor} numeros menores a 500</span>`;

}