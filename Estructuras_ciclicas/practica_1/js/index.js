const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){  

    let resultado = 0
    let respuesta = document.getElementById('res');

    for (let x = 1;x<=10;x++) {
        let numero = Number(prompt(`Ingrese el ${x}° numero`));
        
        resultado= resultado + numero;
        console.log(resultado);
    }
    

    
        
    respuesta.innerHTML = `<span>La Suma de los 10 Numeros es: ${resultado}</span>`;

}