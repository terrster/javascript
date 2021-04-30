const guardar = document.getElementById("inp1");
const mostrar = document.getElementById("Calcular");

guardar.addEventListener('keyup',Almacenar);
mostrar.addEventListener('click', muestra);

let index = 0;
let palabras = [];
let primos = [];
let z = 0;


function Almacenar(event) {

    if (event.key != "Enter") {
        return;        
    } 

    if (isNaN(guardar.value)==false){
        alert("Ingresa un numero");
        guardar.value="";
        return;
    }    

    if (guardar.value == "") {
        alert("Ingresa un valor");
        guardar.value="";
        return;
    }

    palabras[index] = guardar.value;
    guardar.value="";
    index++;
    console.log(palabras);
}

function muestra() {
    let nuevo = [];
    const lista = document.getElementById("lista");
    for (let i = 0; i < palabras.length; i++) {
      let bar = vocales(palabras[i].toLowerCase());
      if (bar == true) {
        nuevo.push(palabras[i]);
      }      
    }
    lista.innerHTML = `<div class="alert alert-warning" role="alert">
           Las palabras Introducidas son : [${palabras}] </br>
           Las palabras que inician con vocales son [${nuevo}] 
    </div>`
    palabras = [];
    index = 0;
}

function vocales(palabra){
  let vocales = ["a", "e", "i", "o", "u"];
  
  for (let i = 0; i < vocales.length; i++) {
    let verdad = palabra.startsWith(vocales[i]);
    while (verdad == true) {
      return true;
      break;
    }   
  }  
}



