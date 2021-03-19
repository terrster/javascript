// Entradas --> Datos proporcionados por el usuario
// Procesos --> Que le voy hacer a las Entradas
// Salidas --> Resultado de los procesos

//Entradas

let btnsuma = document.getElementById('btnsum');

btnsuma.addEventListener('click', SumaNum);

function SumaNum(){
    let num1 = Number (document.getElementById('num1').value);

    let num2 = Number (document.getElementById('num2').value);

    // console.log(num1);
    // console.log(num2);

    let resultado = num1 + num2;

    let ContenedorResultado = document.getElementById('containerResponse')

    ContenedorResultado.innerText = resultado;
}

