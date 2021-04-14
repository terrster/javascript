const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('x1').value);
    const num2 = Number (document.getElementById('x2').value);
    const num3 = Number (document.getElementById('y1').value);
    const num4 = Number (document.getElementById('y2').value);

    let dx = Math.pow((num2 - num1), 2);
    let dy = Math.pow((num4 - num3), 2);
    let total = Math.sqrt(dx + dy);

    const res = document.getElementById('res');
    res.innerHTML = `La distancia entre el Punto A (${num1} ,${num3}) y el Punto B (${num2} ,${num4}) es de: ${total} unidades `;
}