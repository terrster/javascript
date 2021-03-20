let suma = document.getElementById('suma');
suma.addEventListener('click', OpNum1);

let resta = document.getElementById('resta');
resta.addEventListener('click', OpNum2);

let multi = document.getElementById('multi');
multi.addEventListener('click', OpNum3);

let divi = document.getElementById('divi');
divi.addEventListener('click', OpNum4);



function OpNum1(){
    let Num1 = Number (document.getElementById('Num1').value);

    let Num2 = Number (document.getElementById('Num2').value);

    let resultado = Num1 + Num2;

    let Resultado = document.getElementById('Res')

    Resultado.innerText = resultado;
}


function OpNum2(){
    let Num1 = Number (document.getElementById('Num1').value);

    let Num2 = Number (document.getElementById('Num2').value);

    let resultado = Num1 - Num2;

    let Resultado = document.getElementById('Res')

    Resultado.innerText = resultado;
}


function OpNum3(){
    let Num1 = Number (document.getElementById('Num1').value);

    let Num2 = Number (document.getElementById('Num2').value);

    let resultado = Num1 * Num2;

    let Resultado = document.getElementById('Res')

    Resultado.innerText = resultado;
}


function OpNum4(){
    let Num1 = Number (document.getElementById('Num1').value);

    let Num2 = Number (document.getElementById('Num2').value);

    let resultado = Num1 / Num2;

    let Resultado = document.getElementById('Res')

    Resultado.innerText = resultado;
}


