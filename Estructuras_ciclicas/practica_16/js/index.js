const calculation = document.getElementById("Calcular");
calculation.addEventListener("click", Serie);

function Serie() {
  let a = "";
  let b = 0;
  let c = 0;
  let numero = [];
  let primos = [];
  let noprimos = [];

  let num = prompt(`Ingrese numero`);

  if (isNaN(num)) {
    alert("Es encesario Ingresar un Numero");
    return;
  }

  num = Number(num);

  if (num % 1 != 0) {
    alert("Es encesario Ingresar un Numero entero");
    return;
  }

  if (num <= 0) {
    alert("Se necesita ingresar un numero valido");
    return;
  }

  for (let x = 2; x <= num; x++) {
    numero.push(`${x}`);
    console.log(numero);
  }

  for (let i = 2; i <= num; i++) {
    console.log(i);
    a = numero.includes(`${i}`); // Reviso si el numero esta en el array de numero
    console.log(a);
    if (a == true) {
      b = i;
      for (let z = i; z <= num; z++) { // contamos para encontar sus multiplos
        c = z % i;
        console.log(`resto`, c);
        if (c == 0) { // revisamos si son multiplos
          let index = numero.indexOf(`${z}`); //Buscamos donde esta z en el array numero
          console.log(`index`, index);
          if (index > -1) { // si es Mayor de  -1 se elimina el numero del array numero
            numero.splice(index, 1);
            console.log(`array`, numero);
          }
        }
      }
    }
    primos.push(`${b}`); // qué de dodne saque toda esa info y metodos? stackoverflow y MDN Firefox
  }

  let total = Array.from(new Set(primos)); // Eleminamos resultados repetidos por el for

  let respuesta = document.getElementById("res");

  // me complique mucho? si, porque? por pedenjo y seguir instrucciones de wikipedia 
  // puede morir mi compu con numeros gigantes? si 
  // deberia intentar metar un numero enorme ? si
  // resultado del experimento? muere despues de 1500 en mi computadora, siendo honestos ni es tan grande F por el cache de mi laptop.
  // Ahi muere mi sueño de encontar todos los numeros primos 

  respuesta.innerHTML = `<span class="badge bg-info rounded-pill">Los numeors primos menores a ${num} son:</span><br>
  ${(total)} `;
}
