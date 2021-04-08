const calculation = document.getElementById("Calcular");
calculation.addEventListener("click", Operacion);

function Operacion() {
  const num1 = Number(document.getElementById("num1").value);

  const respuesta = document.getElementById("res");

  if (num1 >= 9) {
    respuesta.innerHTML = `Aprobado`;
  } else if (num1 >=6 && num1 < 9) {
    respuesta.innerHTML = `Regular`;
  } else {
    respuesta.innerHTML = `Reprobado`;
  }
}
