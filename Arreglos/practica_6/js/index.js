let opciones = document.getElementById("opciones");
const mostrar = document.getElementById("Calcular");


opciones.style.display = "none";
mostrar.addEventListener('click', muestra);

let num = [];
let num2 = [];
let z = 0;

function randomI(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function muestra() {
    document.getElementById("res").innerHTML =``;
    let n = prompt(`Ingrese la cantidad de numeros a generar`) 

    if (isNaN(n)){
        alert("Ingresa un numero");
  
        return;
    }    

    if (n == "") {
        alert("Ingresa un valor");
  
        return;
    }

    z = Number (n);

    for (i = 0; i < z; i++) {        
      let y = randomI(-100,100);
      num[i] = y;
      num2[i] = randomI(-100,100);
      console.log(num);
    }
    const lista = document.getElementById("lista");

    lista.innerHTML = `<div class="alert alert-info" role="alert" >
          El Arreglo A generado es [ ${ num } ] </br>
          El Arreglo B generado es [ ${ num2 } ] </br>
    </div>`;

    mostrar.style.display = 'none';
    opciones.style.display = "initial";

    document.getElementById("op").onchange = function() {seleccion()};
    
}

function seleccion() {
  
  let options = document.getElementById("op").value;
  let ope = ""
  let resultado = [];     
  
  if (options == 1) {
    ope = "Suma";
    for (let i = 0; i < z; i++) {
      let suma = num[i] + num2[i];
      resultado[i] = suma;      
    }
  } else if (options == 2) {
    ope = "Resta";
    for (let i = 0; i < z; i++) {
      let resta = num[i] + num2[i];
      resultado[i] = resta;
    }
  } else if (options == 3){
    ope = "Multiplicacion";
    for (let i = 0; i < z; i++) {
      let multiplo = num[i] * num2[i];
      resultado[i] = multiplo;
    }
  } else{
    return;
  }
  
  let res = document.getElementById("res");
  res.innerHTML = `<div class="alert alert-success" role="alert" >
  El resultado de la ${ope} = ${resultado}
</div>`;

mostrar.style.display = "initial";
mostrar .innerText = "Reiniciar";


}
