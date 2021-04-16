const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',ImprimirNumeros);

function ImprimirNumeros(){   
    let result = "";   
    
    for (let x = 0; x <=100; x++) {
        if (x%2==0) {
            result += `<li class="list-group-item d-flex justify-content-between align-items-center">
            El numero ${x} es Par
            <span class="badge bg-primary rounded-pill">Par</span>
            </li>`; 
        } 
        
    } 
    let respuesta = document.getElementById('lista'); 
    respuesta.innerHTML = result;

}