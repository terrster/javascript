const calculation = document.getElementById("Calcular");
calculation.addEventListener("click", Empresa);

function Empresa() {
  let total = 0;
  let mes = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Agto", "Sep", "Oct", "Nov", "Dec"];
  let tresm = "";
  let Anual = 0;
  let Mayor = [0,0];

  let empresas = prompt(`Ingrese total de empresas a registar`);

  if (isNaN(empresas)) {
    alert("Es encesario Ingresar un Numero");
    return;
  }

  empresas = Number(empresas);

  if (empresas % 1 != 0 || empresas <= 0) {
    alert("Se necesita ingresar un numero valido");
    return;
  }

  for (let x = 1; x <= empresas; x++) {
    let cod = prompt(`Ingrese el codigo de la ${x}° empresa `);
    total += `<tr>
      <th scope="row">${cod}</th>`
    for (let i = 0; i < mes.length; i++) {
      let mensual = prompt(`Ingrese el total de produccion de ${mes[i]} de la empresa ${cod}`);
      mensual = Number(mensual);
      Anual = Anual + mensual;
      if (i == 6 && mensual >= 3000) {
        tresm += `<tr>
          <th scope="row">${cod}</th>
          <td>$${mensual}</td>
          </tr>`;
      }
    }
    total += `
        <td>$${(Anual)}</td>
        </tr>`;

    if (Anual >= Mayor[1]) {
      Mayor = [`${cod}`, `${Anual}`];
      console.log(Mayor);
    }

    Anual = 0;
  }

  let respuesta = document.getElementById("res");
  let respuesta2 = document.getElementById("res2");
  let respuesta3 = document.getElementById("res3");

  respuesta.innerHTML = `<thead>
  <tr>
    <th scope="col">Codigo de empresa</th>
    <th scope="col">Total Anual</th>
  </tr>
</thead>
<tbody>
    
    ${total}
    
</tbody>`;

  respuesta2.innerHTML = `<thead>
<tr>
  <th scope="col">Empresas Con produccion Mayor a  $3000 en Julio</th>
  <th scope="col">Produccion de Julio</th>
</tr>
</thead>
<tbody>
  
  ${tresm}
  
</tbody>`;

  respuesta3.innerHTML = `<div class="alert alert-info" role="alert">
  La empresa ${Mayor[0]} fue la que mas produccion tuvo en el Año con un total de $${Mayor[1]} Pesos
</div>`

}
