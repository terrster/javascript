const guardara = document.getElementById("inp1");
const guardarb = document.getElementById("inp2");
const mostrar = document.getElementById("Calcular");


mostrar.addEventListener('click', muestra);
guardara.addEventListener('keyup',guarda1);
guardarb.addEventListener('keyup',guarda2);

let numa = [];
let numb = [];

function guarda1(event) {

  if (event.key != "Enter") {
      return;        
  } 

  if (isNaN(guardara.value)){
      alert("Ingresa un numero");
      guardara.value="";
      return;
  }    

  if (guardara.value == "") {
      alert("Ingresa un valor");
      guardara.value="";
      return;
  }

  

  z = Number (guardara.value);
  guardara.value="";

  numa.push(z);
}

function guarda2(event) {

  if (event.key != "Enter") {
      return;        
  } 

  if (isNaN(guardarb.value)){
      alert("Ingresa un numero");
      guardarb.value="";
      return;
  }    

  if (guardarb.value == "") {
      alert("Ingresa un valor");
      guardarb.value="";
      return;
  }

  

  z = Number (guardarb.value);
  guardarb.value="";

  numb.push(z);
}

function muestra() {
  let num3 = numa.concat(numb);
  num3.sort(comparar);

  let res = document.getElementById("res");
    res.innerHTML = `<div class="alert alert-info" role="alert" >
          El Arreglo generado es [ ${ num3.reverse() } ] </br>
    </div>`;

  numa = [];  
  numb = [];  
}



function comparar(a, b) {
  return a - b;
}
