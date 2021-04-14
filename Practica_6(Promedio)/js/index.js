const mat = Number (document.getElementById('matricula').value);
const calculation = document.getElementById('calcular');
calculation.addEventListener('click', Promedio);

function Promedio(){
    const cal1 = Number (document.getElementById('cal1').value);
    const cal2 = Number (document.getElementById('cal2').value);
    const cal3 = Number (document.getElementById('cal3').value);
    const cal4 = Number (document.getElementById('cal4').value);
    const cal5 = Number (document.getElementById('cal5').value);

    let resultado = (cal1 + cal2 + cal3 + cal4 + cal5)/5;
    
    const res = document.getElementById('res');
    res.innerHTML = `El amumno con matricula <em>${mat}</em> es <em>${resultado}</em>`;
}