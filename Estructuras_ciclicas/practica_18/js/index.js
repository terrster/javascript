const calculation = document.getElementById("Calcular");
calculation.addEventListener("click", Cuatro);

function Cuatro() {
  
  let num = prompt(`Ingrese un numero`);
  let b = 0;
  let resu = 0;

  if (isNaN(num)) {
    alert("Es encesario Ingresar un Numero");
    return;
  }

  num = Number(num);

  if (num <= 0) {
    alert("Se necesita ingresar un numero valido");
    return;
  }

  for (let x = 1; x <=num; x++) {
    let suma = 0;
    for (let i = 1; i <=(x/2); i++) {
      b = x%i
      if (b == 0) {
        suma = suma + i;
      }      
    }
    if (suma == x) {
      resu += `${x} -`;
    }
  }
  

  let respuesta = document.getElementById("res");

  respuesta.innerHTML = `Los numeros Perfectos menores a ${num} son: ${resu} `;

  
}
