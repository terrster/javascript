const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('e1').value);
    const num2 = Number (document.getElementById('e2').value);
    let nam1 = document.getElementById('n1').value;
    let nam2 = document.getElementById('n2').value;

    let respuesta = document.getElementById('res');

    
    let res ="";
    
    
    if (nam1 == ""|| nam2 == "") {
        if (nam1 == "") {
            nam1="Persona 1";
        } else {
            nam2="persona 2"
        }
    }
    
    if (num1 > num2) {
        res = `<span class="nom">${nam1}</span> es mayor que <span class="nom">${nam2}</span> por: ${num1-num2} Años.`;
    } else if (num2 ==num1){
        res = `<span class="nom">${nam2}</span> y <span class="nom">${nam1}</span> tiene la misma edad.`;
    } else{
        res = `<span class="nom">${nam2}</span> es mayor que <span class="nom">${nam1}</span> por: ${num2-num1} Años.`;
    }    
        
    respuesta.innerHTML = `<div class="alert alert-success " role="alert">${res}</div>`;

}