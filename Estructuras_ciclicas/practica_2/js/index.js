const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){  

    let acumulador = 0;
    let contador = 0;
    let continuar = true;
    
    let respuesta = document.getElementById('res');

    while (continuar == true) {
        
        let calificacion = prompt(`Ingrese la calificacion`);   
        
        if (calificacion == null) {
            continuar = false;
        }else{
            acumulador = acumulador + Number(calificacion); 
            contador++;
        }
    }

    let resultado = acumulador/contador;
    

    
        
    respuesta.innerHTML = `<span> El promedio es: ${resultado}</span>`;

}