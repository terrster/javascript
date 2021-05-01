const guardar = document.getElementById("inp1");
const mostrar = document.getElementById("Calcular");

guardar.addEventListener('keyup',Almacenar);
mostrar.addEventListener('click', muestra);

let index = 0;
let num = [];
let duplicados = [];

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

    
    if (num.indexOf(guardar.value) < 0 ) {
      num[index] = guardar.value;
      index++;
      guardar.value="";
    } else {
      num[index] = guardar.value;
      index++;
      duplicados.push(guardar.value);
      console.log("d," , duplicados)
      guardar.value="";
    }
    

}

function muestra() {
    const lista = document.getElementById("lista");
    const result = document.getElementById("res");

    lista.innerHTML = `<div class="alert alert-success" role="alert">
    Los numeros Guardados son ${num} 
    </div>`;
    result.innerHTML = `<li class="list-group-item d-flex justify-content-between align-items-center">
    La ,media de los elementos es : ${promedio()}
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    La mediana de los elementos es : ${media()}
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    La moda de los elementos es : ${moda()}
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    La Varianza de los elementos es : ${Varianza()}
    </li>
    <li class="list-group-item d-flex justify-content-between align-items-center">
    La Desviación Estándar de los elementos es : ${Desviacion()}
    </li>`
    index = 0;
    num = [];
    duplicados = [];
}

function promedio(){
  let z = 0;
  for (let i = 0; i < num.length; i++) {
    z = z + Number (num[i]);}
    z = z/index;  
  return z;
}

function media() {
  let z = Number (num.length);
  let y = num.sort(comparar);

  if (z%2 == 0) {    
    let x = Number (y[(z/2)-1]) + Number (y[z/2]);
    return (x/2);
  } else {
    z = z + 1
    z = z/2
    z = z-1
    let c = y[z];
    return c;
  }
}

function comparar(a, b) {
  return a - b;
}

function moda (){
  let max = 0;
  let moda = 0;
  let modas = [];
  for (let i = 0; i < duplicados.length; i++) {
    let veces = 0;
    for (let j = 0; j < duplicados.length; j++) {
      if (duplicados[i] == duplicados[j]) {
        veces++;
      }
    }
    if (veces > max) {
      moda = duplicados[i];
      max = veces;
      console.log(moda)
      return moda;
    } else if (veces == max){
      modas.push(moda);
      moda = duplicados[i];
      modas.push(moda);
      console.log(modas)
      return modas;

    }      
  }    
}

function Varianza(){
  let y = promedio();
  console.log(y)
  let x = 0;  
  for (let i = 0; i < num.length; i++) {
    let z = Math.pow((num[i] - y),2);
    console.log(z);
    x = x+z;    
  }

  x = x/Number (num.length);
  return x;
}

function Desviacion(){
  let y = Varianza();
  y = Math.sqrt(y);
  return y;
}




