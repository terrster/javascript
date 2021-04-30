
const mostrar = document.getElementById("Calcular");


mostrar.addEventListener('click', muestra);

let primos = [];


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

function muestra() {
    numeros();
    primos.reverse();
    const lista = document.getElementById("lista");
    lista.style = "word-wrap:break-word"
    lista.innerHTML = `
    El Array es ${primos}   
    `;
    primos = [];
}
