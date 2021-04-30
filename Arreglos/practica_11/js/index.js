const guardar = document.getElementById("inp1");
const mostrar = document.getElementById("Calcular");

guardar.addEventListener('keyup',Almacenar);
mostrar.addEventListener('click', muestra);

let index = 0;
let palabra = [];

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

    if (index == 1) {
        alert("Solo una Palabra a la Vez");
        guardar.value="";
        return;
    }
    palabra[index] = guardar.value;
    index++;
    guardar.value="";

}

function muestra() {
    const lista = document.getElementById("lista");

    lista.innerHTML = `<div class="alert alert-success" role="alert">
    La Palabra ${palabra} invertida es ${invertido(palabra[0])}
    </div>`;
    index = 0;
    num = [];
}

function invertido(palabra) {
 
  let separado = palabra.split(""); 
  
  let alrevez = separado.reverse(); 
  
  let junto = alrevez.join(""); 
  
  
  return junto;
}



