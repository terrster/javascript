const calculation = document.getElementById("Calcular");
calculation.addEventListener("click", Serie);

function Serie() {
  let total = 0;
  let resultado = "";

  let num = prompt(`Ingrese un numero entero positivo`);

  if (isNaN(num)) {
    alert("Es encesario Ingresar un Numero");
    return;
  }

  num = Number(num);

  if (num % 1 != 0 || num < 0) {
    alert("Se necesita ingresar un numero valido");
    return;
  }

  while (total != 1) {
    if (num % 2 == 0) {
      resultado += `${num} - `;
      total = num / 2;
      num = total;
      console.log(total);
    } else {
      resultado += `${num} - `;
      total = 3 * num + 1;
      num = total;
      console.log(total);
    }
  }

  let respuesta = document.getElementById("res");

  respuesta.innerHTML = `${resultado} ${total}`;
}
