const calculation = document.getElementById("Calcular");
calculation.addEventListener("click", Serie);

function Serie() {
  let total = 0;
  let a = 0;
  let b = 1;
  let c = 0;
  let resultado = [];

  let num = prompt(`Ingrese numero`);

  if (isNaN(num)) {
    alert("Es encesario Ingresar un Numero");
    return;
  }

  num = Number(num);

  if (num < 0) {
    alert("Se necesita ingresar un numero valido");
    return;
  }

  for (let x = 0; x <= num;  x++) {
    a = b;
    b = c;
    c = a + b;
    resultado.push (`${b} `);    
    
  }
    
  

  let respuesta = document.getElementById("res");

  respuesta.innerHTML = `<span class="badge bg-info rounded-pill">El numero ${num} da la siguiente serie</span><br>
  ${resultado}`;
}
