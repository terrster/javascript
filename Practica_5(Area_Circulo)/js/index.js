const calculation = document.getElementById('calculation');
calculation.addEventListener('click',Calcular);

function Calcular(){
    // Las variables peiden variar de valor
    const rad= Number (document.getElementById('rad').value);
    // Las constantes son valores fijos
    const volorpi = 3.14159;

    let resultado = volorpi*(rad*rad);

    const respuesta = document.getElementById('info');
    respuesta.innerHTML = ` El Área del circulo es: ${resultado}`;
}
