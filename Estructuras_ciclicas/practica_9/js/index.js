const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',ImprimirNumeros);

function ImprimirNumeros(){   
    let result = ""; 
    let a = 70;
    let b = 150 
    let x = 1 
    
    while (x != 0) {
            
            a++;
            b--;
            x = b - a;
            console.log(a,b);                   
    } 
    let respuesta = document.getElementById('res'); 
    respuesta.innerHTML = `El punto de encuentro entre 70 Kilometros y 150 Kilometros es: ${a} Kilometros`;

}