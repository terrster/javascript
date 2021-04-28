const guardar = document.getElementById("inp1");
const mostrar = document.getElementById("Calcular");

mostrar.addEventListener('click', Almacenar);
mostrar.addEventListener('click', muestra);


let index = 0;
let suma = 0;
let num = [];
let z = 0;

function aleatorio(){
    let numero = Math.floor(Math.random() * 10);
    return numero;
}

function Almacenar() {
//   if (event.key != "Enter") {
//     return;
//   }

  if (isNaN(guardar.value)) {
    alert("Ingresa un numero");
    guardar.value = "";
    return;
  }

  if (guardar.value == "") {
    alert("Ingresa un valor");
    guardar.value = "";
    return;
  }

  z = Number(guardar.value);

  guardar.value = "";

  

  for (i = 0; i < z; i++) {
    let numero = aleatorio();
    num[i] = numero;
    suma = suma + numero;
    index++;
    console.log(num);
  }
}

function muestra() {
  const lista = document.getElementById("res");

  lista.innerHTML = `
    <div class="alert alert-success mt-3" role="alert">
        El Array generado de longitud ${index} es: [${num}]</br>
        La suma de sus elementos es: ${suma} 
    </div>`;
  index = 0;
  num = [];
  suma = 0;
}



