const calculation = document.getElementById("Calcular");
calculation.addEventListener("click", Anal);

function Anal() {
  let Ahorro = 1;
  let total = "";

  for (let x = 1; x <=365; x++) {
    
    Ahorro = Ahorro * 3;
    total += `El Ahorro despues de  ${x}° dia es : ${Ahorro/100} Pesos</br>`;
    
  }
  

  let respuesta = document.getElementById("res");
  respuesta.innerHTML = total;
}
