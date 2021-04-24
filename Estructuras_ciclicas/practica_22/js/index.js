const calculation = document.getElementById("Calcular");
const segunda = document.getElementById("Calcular2");

segunda.style.display = "none";
let total = "";
let contador = 0;
let x = 0;

calculation.addEventListener("click", autos);


function autos() {
  calculation.style.display = "none";
  document.getElementById("lista").style.display = "none";
  document.getElementById("res").innerHTML=``;
  document.getElementById("res").style.display = "initial";

  let mostrar = "";

  total = prompt(`Ingrese el total de autos a registrar`);
  x = 0;

  if (isNaN(total)) {
    alert("Es nencesario ingresar un Numero");
    return;
  }

  total = Number(total);
  contador = total;
  console.log("antes", contador)
  
  
  if (total <= 0) {
    alert("Se necesita ingresar un numero valido");
    return;
  } 

    for (x=1; x <= total; x++) {

      let grupo = document.createElement("div");
      grupo.className = "row mt-3";
      document.getElementById('res').appendChild(grupo);
      let columna = document.createElement("div");
      columna.className = "col"
      grupo.appendChild(columna);
      let etiqueta1 = document.createElement("label");
      etiqueta1.className= "form-label";
      etiqueta1.setAttribute = ("for", `Auto${x}`);
      etiqueta1.innerHTML = `Costo del Vehiculo ${x}`;
      columna.appendChild(etiqueta1);
      let input = document.createElement("input");
      input.className = "form-control";
      input.type = "number";
      input.id = `Auto${x}`;
      columna.appendChild(input);

      let columna2 = document.createElement("div");
      columna2.className = "col"
      grupo.appendChild(columna2);
      let etiqueta2 = document.createElement("label");
      etiqueta2.className= "form-label";
      etiqueta2.setAttribute = ("for", `Clave${x}`);
      etiqueta2.innerHTML = `Seleccione Tipo de Clave`;
      columna2.appendChild(etiqueta2);
      let select = document.createElement("select");
      select.className = "form-select";
      select.id = `Clave${x}`;
      columna2.appendChild(select);
      let op1 = document.createElement("option");
      op1.value = "1" 
      op1.text = "1"
      select.appendChild(op1);
      let op2 = document.createElement("option"); 
      op2.value = "2" 
      op2.text = "2"
      select.appendChild(op2);
      let op3 = document.createElement("option"); 
      op3.value = "3" 
      op3.text = "3"
      select.appendChild(op3);

    
  }
  segunda.style.display = "initial";
  
}

segunda.addEventListener('click',impuest);
function impuest() {
  document.getElementById("lista").style.display = "initial";
  segunda.style.display = "none";
  calculation.style.display = "initial";
  calculation.innerText ="Volver a Empezar"
  
  document.getElementById('res').style.display= "none";
  let constante = "";
  let t1 = 0;
  let t2 = 0;
  let t3 = 0;
  let total = 0;

  for (let z = 1; z <= contador; z++) {

    let carro = document.getElementById("Auto"+z).value;
    let clave = document.getElementById("Clave"+z).value;

    let n1 = 0;
 
    if (clave == 1) {
      console.log("clave",clave);
      n1 = (carro *.10);
      
      t1 = n1 + t1;
      constante += `<li class="list-group-item">El carro ${z} debe de pagar $${n1} pesos de Inpuestos</li>`;
    } else if(clave ==2){
      n1 = (carro *.20);
      
      t2 = n1 + t2;
      constante += `<li class="list-group-item">El carro ${z} debe de pagar $${n1} pesos de Inpuestos</li>`;
    } else{
      n1 = (carro *.30);
      t3 = n1 + t3;
      constante += `<li class="list-group-item">El carro ${z} debe de pagar $${n1} pesos de Inpuestos</li>`;
    }
    
  }

  total = t1 + t2 + t3;

  let todo = document.getElementById("lista");
  todo.innerHTML = `${constante}
  <li class="list-group-item">El total de pagar por todos los Autos de clave 1 es : ${t1} Pesos</li>
  <li class="list-group-item">El total de pagar por todos los Autos de clave 2 es : ${t2} Pesos</li>
  <li class="list-group-item">El total de pagar por todos los Autos de clave 3 es : ${t3} Pesos</li>
  <li class="list-group-item">El total de pagar por todos los Autos es : ${total} Pesos</li>`;
}
