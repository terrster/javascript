const calculation = document.getElementById("Calcular");
calculation.addEventListener("click", Anal);

function Anal() {
  let num = 5;
  let contador = 0;
  let total = "";

  for (let n = 0; n <= 1800 ;) {
    contador = contador + 1;
    total += `${num} `;
    if (contador != 2) {
      num = num + 2
    } else {
      num = num + 3
      contador = 0;
    }
    n = n + num;
    console.log(n);
  }
  

  let respuesta = document.getElementById("res");
  respuesta.innerHTML = total;
}
