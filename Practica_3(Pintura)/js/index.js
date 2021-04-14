let calcular = document.getElementById('bttncalcular');
calcular.addEventListener('click', OpNum1);


function OpNum1(){
    let costom = Number (document.getElementById('CostoMat').value);

    let Num1 = Number (document.getElementById('alto').value);

    let Num2 = Number (document.getElementById('ancho').value);

    let resultado = Num1 * Num2 * costom;

    let Resultado = document.getElementById('Res');

    Resultado.innerHTML = ` 
    
    <em>El presupuesto es: ${resultado}  Pesos </em>

    
    `;
}
