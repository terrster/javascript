const calculation = document.getElementById("Calcular");
calculation.addEventListener("click", salario);

function salario() {
  let salario = 1500;
  let total = "";

  for (let x = 1; x <=6; x++) {
    
    salario = salario + (salario *.10);
    total += `El salario despues de  ${x}° Año es : ${salario} </br>`;
    
  }
  

  let respuesta = document.getElementById("res");
  respuesta.innerHTML = total;
}
