const calculation = document.getElementById("Calcular");
calculation.addEventListener("click", tiendas);

function tiendas() {
  let c = prompt(`Ingrese el numero de ciudades a registar`);
  let tienda = "";
  let ciudad = "";
  let ventac = 0;
  let total = 0;
  let x = 0;
  let i = 0;
  let resu = 0;

  if (isNaN(c)) {
    alert("Es encesario Ingresar un Numero");
    return;
  }

  num = Number(c);

  if (c <= 0) {
    alert("Se necesita ingresar un numero valido");
    return;
  }
  console.log(`Ciudades`, c)
  while (x < c) {
    let contador = 0;
    for (x; x < c; x++) {
      ventac = 0;
      i = 0 ;
      let t = prompt(`Ingrese el numero de Tiendas de la Ciudad ${x + 1}`);
      t = Number(t);
      while (i < t) {
        for (i; i < t; i++) {
          contador = 0;
          resu = 0;
          let n = prompt(
            `Ingrese el numero de empleados de la ${i + 1}° tienda de la Ciudad ${x+1}`
          );
          n = Number(n);
          while (contador != n) {
            for (let v = 1; v <= n; v++) {
              let venta = prompt(`Ingrese el total de ventas del empleado ${v}`);
              if (contador != n) {
                contador++;
              }
              venta = Number(venta);
              resu = resu + venta;
            }
          }
          tienda +=`<span> La ${i+1}° Tienda de la Ciudad ${x+1} vendio: ${resu}</span></br>`
          console.log(tienda);
          ventac = ventac + resu
        }
      }
      ciudad +=`<span>La Ciudad ${x+1} vendio: ${ventac}</span></br>`
      total = ventac + total;
    }
  }

  let respuesta = document.getElementById("res");

  respuesta.innerHTML = `<span class="badge bg-primary">Ventas Por Tienda</span></br>
  ${tienda}
  <span class="badge bg-primary">Ventas Por Ciudad</span></br>
  ${ciudad}
  <span class="badge bg-primary">Total de Ventas</span></br>
  <span>${total}</span>`;
}
