
const mostrar = document.getElementById("Calcular");

mostrar.addEventListener('click', muestra);

let num = [];
let num2 = [];
let z = 0;

function randomI(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function muestra() {

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
      num[i] = randomI(0,256);
      if (num[i]%2 == 0) {
        num2.push(num[i]);
      }
      console.log(num);
    }
    const lista = document.getElementById("lista");

    lista.innerHTML = `<div class="alert alert-info" role="alert" >
          El Arreglo A generado es [ ${ num } ] </br>
          Los numeros pares son [ ${ num2 } ] </br>
    </div>`;
  num = [];
  num2 = [];  
}



