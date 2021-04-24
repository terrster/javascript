const calculation = document.getElementById("Calcular");
let bye = document.getElementById("bye");
const boton = document.getElementById("Calcular2");

boton.style.display = "none";
calculation.addEventListener("click", nume);

function nume() {
  document.getElementById("lista").innerHTML=``;
  document.getElementById('res').innerHTML=``;
  bye.style.display = "none";
  boton.style.display = "initial";
  let Ahorro = 1;
  let total = "";
  let cuenta = 0;
  for (let x = 1; x <=6; x++) {
      
      let grupo = document.createElement("div");
      grupo.className = "row mt-3";
      document.getElementById('res').appendChild(grupo);
      
      for (let i = 1; i <=5; i++) { 
      cuenta = cuenta + 1;   
      let columna = document.createElement("div");
      columna.className = "col"
      grupo.appendChild(columna);
      let etiqueta1 = document.createElement("label");
      etiqueta1.className= "form-label";
      etiqueta1.setAttribute = ("for", `Num${cuenta}`);
      etiqueta1.innerHTML = `Ingrese Numero ${cuenta}`;
      columna.appendChild(etiqueta1);
      let input = document.createElement("input");
      input.className = "form-control";
      input.type = "number";
      input.id = `Numero${cuenta}`;
      columna.appendChild(input);
        
      }
    
  }
  
}

boton.addEventListener('click', calculo);

function calculo() {
  boton.style.display = 'none';
  bye.style.display = 'initial';
  
  calculation.innerText = "Reiniciar";
  let total = "";
  let cuenta = 0;
  let t1 = 0;
  let t2 = 0;
  for (let x = 1; x <= 30; x++) {
    let num = document.getElementById("Numero"+x).value;
    
      if (isNaN(num)) {
        total += `<li class="list-group-item">El elemneto ${x} No es un valor valido</li>`;
      } 

      if (num == "") {
        num = 0;
      }

    num = Number(num);

    if (num == 0){
      total += `<li class="list-group-item">El elemneto ${x} es 0</li>`;
    } else if (num%2 == 0){
      cuenta = cuenta + 1;
      t1 = t1 + num;
      
    }else{
      t2 = t2 + num;
    }
    
  }
  let y = t1/cuenta;
  total += `<li class="list-group-item">El promedio de Numeros Pares es: ${y} </li>`;
  total += `<li class="list-group-item">La suma de los Numeros Inpares es: ${t2}</li>`;
  console.log(total);
  console.log("suma 2", t2);

  let lista = document.getElementById("lista");
  lista.innerHTML = total;
}
