const calculation = document.getElementById("Calcular");
calculation.addEventListener("click", elecciones);

function elecciones() {
  let total = 0;
  let a = 0;
  let b = 0;
  let c = 0;
  let d = 0;
  let x = 1;
  let f = 0;

  while (x == 1) {
    let num = prompt(`Ingrese un numero`);

    if (isNaN(num)) {
      alert("Es encesario Ingresar un Numero");
      return;
    }

    num = Number(num);

    if (num == 1) {
      a++
    } else if(num == 2) {
      b++
    } else if(num == 3) {
      c++
    } else if(num == 4) {
      d++
    } else if(num == 0) {
      alert("Se Terminaron las Elecciones");
      x = 0;
    } else {
      alert("Numero Invalido");
      f++;
    }
  }
  total = a + b + c + d + f;

  let respuesta = document.getElementById("res");

  respuesta.innerHTML = `<table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col" colspan="${total}">Elecciones 2021</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="${a}" class="table-primary">${((a*100)/total).toFixed(2)}%</td>
      <th scope="row">Votos Candidato 1</th>
    </tr>
    <tr>
      <td colspan="${b}" class="table-secondary">${((b*100)/total).toFixed(2)}%</td>
      <th scope="row">Votos Candidato 2</th>
    </tr>
    <tr>
      <td colspan="${c}" class="table-success">${((c*100)/total).toFixed(2)}%</td>
      <th scope="row">Votos Candidato 3</th>
    </tr>
    <tr>
      <td colspan="${d}" class="table-warning">${((d*100)/total).toFixed(2)}%</td>
      <th scope="row">Votos Candidato 4</th>
    </tr>
    <tr>
      <td colspan="${f}" class="table-danger">${((f*100)/total).toFixed(2)}%</td>
      <th scope="row">Votos Nulos</th>
    </tr>
    <tr>
      <td colspan="${total}" class="table-dark">Total de votos ${total}</td>
    </tr>
  </tbody>
</table>`;
}
