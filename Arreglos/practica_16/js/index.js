
const mostrar = document.getElementById("Calcular");


mostrar.addEventListener('click', muestra);

let num = [];
let z = 0;

function randomI(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function muestra() {

    let z = prompt(`Ingrese un numero entre cero  y 100`);

    if (isNaN(z)) {
      alert('Es Necesario que se Ingrese un Numero');
      return
    }

    z = Number(z);

    if (z < 0 || z > 100 ) {
      alert('es necesario un valor valido');
      return;
    }

    for (i = 0; i < 25; i++) {        
      let y = randomI(0,100);
      num[i] = y;
    }
    
    num.sort(comparar);

    let medio = Math.floor((num.length)/2);
    
    
    // let res = document.getElementById("res");
    // res.innerHTML = `<div class="alert alert-info" role="alert" >
    //       El Arreglo generado es [ ${ num } ] </br>
    //       El Arreglo de numeros impares es [ ${ impar } ] </br>
    // </div>`;


    num = [];
    impar = [];
    
}

function comparar(a, b) {
  return a - b;
}
