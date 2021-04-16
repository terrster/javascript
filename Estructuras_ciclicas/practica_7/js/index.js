const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',ImprimirNumeros);

function ImprimirNumeros(){   
    let result = "";   
    
    for (let x = 100; x >=0; x--) {
        
            result += `<li class="list-group-item flex-fill">
            ${x} 
            </li>`; 
         
        
    } 
    let respuesta = document.getElementById('lista'); 
    respuesta.innerHTML = result;

}