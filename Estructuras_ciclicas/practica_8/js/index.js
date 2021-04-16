const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',ImprimirNumeros);

function ImprimirNumeros(){   
    let result = ""; 
    let horas = 0;
    let x = 1;
    
    while (x<=6){
            let dia = prompt(`Ingrese Horas trabajadas el ${x}° dia`);
            if (isNaN(dia)) {
                alert("Se necesita ingresar un numero");
            } else {
                dia = Number(dia);
                horas = horas + dia;
                x = x+1 
            }
            result += `<li class="list-group-item flex-fill">
            El ${x-1}° Dia, trabajo : ${dia} horas 
            </li>`; 
         
        
    } 
    let lista = document.getElementById('lista');
    let respuesta = document.getElementById('res');  
    lista.innerHTML = result;
    respuesta.innerHTML = `El Total de horas trabajadas en la semana es: ${horas}`;

}