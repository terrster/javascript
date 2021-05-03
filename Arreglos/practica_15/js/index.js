
const mostrar = document.getElementById("Calcular");


mostrar.addEventListener('click', muestra);

let num = [];
let impar = [];
let z = 0;

function randomI(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function muestra() {

    for (i = 0; i < 30; i++) {        
      let y = randomI(100,300);
      impares(y);
      num[i] = y;
      console.log(num)
    }
    
    let res = document.getElementById("res");
    res.innerHTML = `<div class="alert alert-info" role="alert" >
          El Arreglo generado es [ ${ num } ] </br>
          El Arreglo de numeros impares es [ ${ impar } ] </br>
    </div>`;


    num = [];
    impar = [];
    
}

function impares(numero) {
  console.log(impar);
  while (numero%2 != 0) {
    impar.push(numero);
    break;
  }  
}
