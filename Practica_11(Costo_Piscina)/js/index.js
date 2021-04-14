const calculation1 = document.getElementById('ca1');
calculation1.addEventListener('click',Operacion1);

const calculation2 = document.getElementById('ca2');
calculation2.addEventListener('click',Operacion2);

const calculation3 = document.getElementById('ca3');
calculation3.addEventListener('click',Operacion3);

const calculation4 = document.getElementById('ca4');
calculation4.addEventListener('click',Operacion4);

function Operacion1(){
    const num1 = Number (document.getElementById('costo').value);
    const num2 = Number (document.getElementById('l1').value);
    const num3 = Number (document.getElementById('an1').value);
    const num4 = Number (document.getElementById('p1').value);

    let area = (num2 * num3);
    console.log(area);
    let volumen = area * num4;
    let total = volumen * num1;

    const res = document.getElementById('res');
    res.innerHTML = `El Costo total del es ${total} `;
}
function Operacion2(){
    const num1 = Number (document.getElementById('costo').value);
    const num2 = Number (document.getElementById('b1').value);
    const num3 = Number (document.getElementById('al1').value);
    const num4 = Number (document.getElementById('p2').value);

    let area = (num2 * num3)/2;
    console.log(area);
    let volumen = area * num4;
    let total = volumen * num1;

    const res = document.getElementById('res');
    res.innerHTML = `El Costo total del es ${total} `;
}
function Operacion3(){
    const num1 = Number (document.getElementById('costo').value);
    const num2 = Number (document.getElementById('r1').value);
    const num3 = Number (document.getElementById('r2').value);
    const num4 = Number (document.getElementById('p3').value);

    let area = num2 * num3 * 3.14159;
    console.log(area);
    let volumen = area * num4;
    let total = volumen * num1;

    const res = document.getElementById('res');
    res.innerHTML = `El Costo total del es ${total} `;
}
function Operacion4(){
    const num1 = Number (document.getElementById('costo').value);
    const num2 = Number (document.getElementById('l2').value);
    const num3 = Number (document.getElementById('an2').value);
    const num4 = Number (document.getElementById('r3').value);
    const num5 = Number (document.getElementById('p4').value);

    let area = (num2 * num3) + (num4 * 3.14159);
    console.log(area);
    let volumen = area * num5;
    let total = volumen * num1;

    const res = document.getElementById('res');
    res.innerHTML = `El Costo total del es ${total} `;
}