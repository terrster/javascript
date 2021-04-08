const calculation = document.getElementById("Calcular");
calculation.addEventListener("click", Operacion);

function Operacion() {
  const num1 = Number(document.getElementById("num1").value);

  const respuesta = document.getElementById("res");

  if (num1 >= 300) {
    respuesta.innerHTML = 
    `<div class="alert alert-success" role="alert">
        <strong>El costo del Platillo es de $75</strong>
    </div>`;
  } else if (num1 >=200 && num1 < 300) {
    respuesta.innerHTML = 
    `<div class="alert alert-warning" role="alert">
        <strong>El costo del Platillo es de $85</strong>
    </div>`;
  } else {
    respuesta.innerHTML = 
    `<div class="alert alert-danger" role="alert">
        <strong>El costo del Platillo es de $95</strong>
    </div>`;
  }
}