const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const num1 = Number (document.getElementById('personas').value);
    const num2 = Number (document.getElementById('kilometros').value);

    let num3 = document.getElementById('input1').value;
    console.log(num3);

    let personas = 0;
    let precio =0;
    let costo = 0;
    let res ="";
    
    let respuesta = document.getElementById('res');

    if (num1 == ""|| num1 == 0 || num2 == ""|| num2 == 0) {
        alert(`El minimo de Personas o Kilometros debe ser de 1`);
        return;
    }
    
    if (num1 < 20) {
        personas  = 20;
        alert(`El minimo de Personas es de 20 se cobrara a base de este minimo`);
    } else {
        personas = num1;
    }

    if (num3=="A") {
        precio =1.5;
        costo = personas * num2 * 1.5;
    }else if (num3=="B"){
        precio =2;
        costo = personas * num2 * 2;
    }else if (num3=="C"){
        precio =2.5;
        costo = personas * num2 * 2.5;
    }else{
        precio =3;
        costo = personas * num2 * 3;
    }

    respuesta.innerHTML = `<table class="table">
    <thead>
      <tr>
        <th scope="col">N° de Personas</th>
        <th scope="col">Kilometros</th>
        <th scope="col">Tipo de Autobus</th>
        <th scope="col">Costo Kilometro/Persona</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">${personas}</th>
        <td>${num2}</td>
        <td>${num3}</td>
        <td>$${precio}</td>
      </tr>
    <tr>
        <th scope="row">Total</th>
        <td colspan="3" class="table-active">$${costo} Pesos</td>
    </tr>
    </tbody>
    </table>`;
        
    // respuesta.innerHTML = `<div class="alert alert-success " role="alert">${res}</div>`;

}