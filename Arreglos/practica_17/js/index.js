
const mostrar = document.getElementById("Calcular");


mostrar.addEventListener('click', muestra);

let num = [];
let num2 = [];

function muestra() {

    for (i = 0; i < 10; i++) {        
      let z = prompt(`Ingrese un numero`);

      if (isNaN(z)) {
      alert('Es Necesario que se Ingrese un Numero');
      return
      }

      z = Number(z);
      console.log(i)

      if (i < 5 ) {
        num.push(z);
      } else {
        num2.push(z);
      }

      console.log(num);
      console.log(num2);
    }
    
    let tercero = num.concat(num2); 
    
    let res = document.getElementById("res");
    res.innerHTML = `<div class="alert alert-info" role="alert" >
          El Arreglo generado es [ ${ tercero } ] </br>
    </div>`;


    num = [];
    num2 = [];
    
}