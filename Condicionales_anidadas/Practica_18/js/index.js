const calculation = document.getElementById('Calcular');
calculation.addEventListener('click',Operacion);

function Operacion(){
    const costo = Number (document.getElementById('costo').value);
    const kilos = Number (document.getElementById('kilos').value);
    let tipo = document.getElementById('input1').value;
    let tamaño = Number (document.getElementById('input2').value);
    let aumento = 0;
    let agregar ="";
    let precio = 0;
    
    
    let respuesta = document.getElementById('res');

    if (costo == ""|| costo <= 0 || kilos <= 0 || kilos == "") {
        alert(`Costo o Kilos Invalidos`);
        return;
    }
    

    if (tipo == "A" && tamaño == 1) {
        aumento = costo + .2;
        agregar = "+.20";
    }else if (tipo == "A" && tamaño == 2){
        aumento = costo + .3;
        agregar = "+.30";
    }else if (tipo == "B" && tamaño == 1){
        aumento = costo - .3;
        agregar = "-.30";
    }else{
        aumento = costo - .5;
        agregar = "-.50";
    }

    precio = Math.round(kilos * aumento);

    respuesta.innerHTML = `<table class="table">
    <thead>
      <tr>
        <th scope="col">Uva</th>
        <th scope="col">Costo por Kilo Inicial</th>
        <th scope="col">Agregado</th>
        <th scope="col">Costo Final</th>
        <th scope="col">Kilos Vendidos</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">${tipo}${tamaño}</th>
        <td>$${costo}</td>
        <td>${agregar}</td>
        <td>$${aumento}</td>
        <td>${kilos} Kilos</td>
      </tr>
    <tr>
        <th scope="row">Total</th>
        <td colspan="4" class="table-active">$${precio} Pesos</td>
    </tr>
    </tbody>
    </table>`
        
    

}