const guardar = document.getElementById("inp1");
const mostrar = document.getElementById("Calcular");

guardar.addEventListener('keyup',Almacenar);
mostrar.addEventListener('click', muestra);

let index = 0;
let num = [];
let primos = [];
let z = 0;

function esPrimo(n) {
  let i = 1;
  while (n % ++i != 0);
  return n == i;
}

function numeros() {
  for (let i = 2; i < 1000; i++) {
    if (esPrimo(i)){
    primos.push(i);} 
  }
  console.log(primos);
}

function Almacenar(event) {

    if (event.key != "Enter") {
        return;        
    } 

    if (isNaN(guardar.value)){
        alert("Ingresa un numero");
        guardar.value="";
        return;
    }    

    if (guardar.value == "") {
        alert("Ingresa un valor");
        guardar.value="";
        return;
    }

    

    z = Number (guardar.value);
    guardar.value="";

    for (i = 0; i < z; i++) {
        numeros();
      let y = Math.floor(Math.random() * (primos.length));
      console.log(y);
      let numero = primos[y];
      num[i] = numero;
      index++;
      console.log(num);
    }
}

function muestra() {
    const lista = document.getElementById("lista");

    lista.innerHTML = `El Array es ${num}`;
    index = 0;
    num = [];
}



