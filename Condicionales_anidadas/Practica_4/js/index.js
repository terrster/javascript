const calculation = document.getElementById("Calcular");
calculation.addEventListener("click", Operacion);

function Operacion() {
  const num1 = Number(document.getElementById("num1").value);

  const respuesta = document.getElementById("res");

  if (num1 >= 300) {
    respuesta.innerHTML = 
    `<div class="alert alert-success" role="alert">
        <strong>El costo del Platillo es de $75 por persona dando un total de ${num1*75} pesos</strong>
    </div>`;
  } else if (num1 >=200 && num1 < 300) {
    respuesta.innerHTML = 
    `<div class="alert alert-warning" role="alert">
        <strong>El costo del Platillo es de $85 por persona dando un total de ${num1*85} pesos</strong>
    </div>`;
  } else {
    respuesta.innerHTML = 
    `<div class="alert alert-danger" role="alert">
        <strong>El costo del Platillo es de $95 por persona dando un total de ${num1*95} pesos</strong>
    </div>`;
  }
}