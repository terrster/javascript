let calcular = document.getElementById('Calcular');
calcular.addEventListener ('click',area);

function area(){
    let alto = Number (document.getElementById('Num1').value);
    let ancho = Number (document.getElementById('Num2').value);

    let resultado = (alto * ancho)/2;

    let res = document.getElementById('Res');

    res.innerHTML = `
    <em> El area del triangulo dado es ${resultado} </em>
    `;

}

