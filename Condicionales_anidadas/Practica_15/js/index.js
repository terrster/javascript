const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('num1').value);

    let respuesta = document.getElementById('res');
    
    let a = 0;
    let b = num1;
    let c = 0;
    let res ="";

    if (num1 < 0 || num1 > 9999 ) {
        alert(`Numero invalido`);
        return;
    }

    if (num1 % 1 != 0) {
        alert ("No es un numero entero");
        return;
    }
    while (b!=0) {
        a= b%10
        c=c*10+a
        b = (b-a)/10
        console.log(a,b,"invertido",c);
    }

    if (c==num1) {
        res = `El numero ${num1} es capicua`;
    } else {
        res = `El numero ${num1} no es capicua`;
    }   
        
    respuesta.innerHTML = `<div class="alert alert-success " role="alert">${res}</div>`;

}