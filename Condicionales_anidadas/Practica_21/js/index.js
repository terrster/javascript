const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    let x = document.getElementById('input1');
    let tipo = x.value;
    let texto = x.options[x.selectedIndex].text;
    
    let ex1 = document.getElementById("ex1").checked;
    let ex2 = document.getElementById("ex2").checked;
    let ex3 = document.getElementById("ex3").checked;
    let ex4 = document.getElementById("ex4").checked;

    let cargos = 0
    let costo = 0;
    let precio = 0;
    let a = 0;
    let a1 ="No";
    let b = 0;
    let b1 ="No";
    let c = 0;
    let c1 ="No";
    let d = 0;
    let d1 ="No";

    let si ="";

    let res ="";
    
    let respuesta = document.getElementById('res');

    console.log(ex1, ex2, ex3, ex4);


    if (tipo == 1) {
        costo = 1200;
    } else {
        costo = 950;
    }

    if (ex1==true){
        a = costo * .10;
        a1 ="Si";
    }  
    if (ex2==true){
        b = costo * .5;
        b1 ="Si";
    }  
    if (ex3==true){
        c = costo * .5;
        c1 ="Si";
    }  
    if (ex4==true){
        d = costo * .20;
        d1 ="Si";
    } else{
        d = costo * .10;
    }

    cargos = a + b + c +d;
    
    precio = costo + cargos;
        
    respuesta.innerHTML = `<table class="table">
    <thead>
      <tr>
        <th scope="col">Tipo de Poliza</th>
        <th scope="col">Costo Base</th>
        <th scope="col">Bebe</th>
        <th scope="col">Lentes</th>
        <th scope="col">Enfermedades</th>
        <th scope="col">Mayor de 40 Años</th>
        <th scope="col">Cargos</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">${texto}</th>
        <td>$${costo}</td>
        <td>${a1}</td>
        <td>${b1}</td>
        <td>${c1} </td>
        <td>${d1} </td>
        <td>$${cargos}</td>
      </tr>
    <tr>
        <th scope="row">Total</th>
        <td colspan="7" class="table-active">$${precio} Pesos</td>
    </tr>
    </tbody>
    </table>`

    
}

